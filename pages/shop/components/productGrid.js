import React, {Fragment} from 'react';
import styles from '../Index.module.scss'
import classnames from 'classnames'
import _ from "lodash"
import Link from 'next/link'
import {useSelector} from "react-redux";
import {addCart} from "../../../services/store/cart/Action";
import {toast} from "react-toastify";


const ProductGrid = ({products}) => {
    const loggedIn = useSelector(store => store.IsLoggedIn)
    const user = JSON.parse(localStorage.getItem('user'))

    function handleAddCart(product) {

        // if user Logged In save cart in database
        if (loggedIn) {
            const cart = {
                product: product.id,
                user: user.pk,
                quantity: 1,
                total: product.discount_price !== 0 ? product.discount_price : product.price
            }
            addCart(cart).then(response => {
                if (response.status === 200) {
                    toast.success("Product added to Cart", {theme:"colored"});
                }else {
                    toast.error(response, {theme:"colored"});
                }
            }).catch(function (error){
                toast.error(error, {theme:"colored"});
            })
        }
        // if user is not Logged In save cart in localstorage
        else {
            let cart = JSON.parse(localStorage.getItem('cart'))
            if (cart === null) {
                cart = []
            }
            // if a product already added then update its quantity and price
            let cartIndex = cart.findIndex(c => c.product === product.id)
            if (cartIndex !== -1) {
                cart[cartIndex].total += product.discount_price !== 0 ? product.discount_price : product.price
                cart[cartIndex].quantity += 1;
            }
            // if a product not added then add a product in localStorage
            else {
                cart.push({
                    product: product,
                    quantity: 1,
                    user: null,
                    total: product.discount_price !== 0 ? product.discount_price : product.price
                })
            }
            localStorage.setItem('cart', JSON.stringify(cart))
        }

    }

    return (
        <section className="text-gray-600 body-font animate__animated animate__zoomIn">
            <div className="container mx-auto">
                <div className="flex flex-wrap -m-4">
                    {

                        !_.isEmpty(products) ?
                            products.map((product, i) => (

                                <div key={`product-single-${i}`}
                                     className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full p-1 cursor-pointer animate__animated animate__fadeIn">
                                    <div className={'border border-primary p-3'}>
                                        {/* product image */}
                                        <Link href={`/shop/product/${product.id}`}>
                                            <a>
                                                <div
                                                    className="block relative h-48 rounded overflow-hidden transition hover:scale-105">
                                                    <img alt="ecommerce"
                                                         className={classnames(styles.product_img, "object-contain object-center w-full h-full block ")}
                                                         src={product.thumbnail}/>
                                                </div>
                                                {/* product image: end */}

                                                <div className="mt-4">
                                                    {/* product category */}
                                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{
                                                        !_.isEmpty(product.category) ?
                                                            product.category.map((cat, i) => (
                                                                <Fragment key={`singe-pro-${i}`}>
                                                                    {
                                                                        i > 0 ? <>, {cat.name}</> : cat.name
                                                                    }
                                                                </Fragment>

                                                            )) : "Undefine"}</h3>
                                                    {/* product title */}
                                                    <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
                                                    {/* product price */}
                                                    <div className="flex items-baseline my-1 space-x-2">

                                                        {
                                                            !(product.discount_price === 0) ?
                                                                <>
                                                                    <p className="text-xl text-primary font-roboto font-semibold">{product.currency} {product.discount_price}</p>
                                                                    <p className="text-sm text-gray-400 font-roboto line-through">{product.currency} {product.price}</p>
                                                                </>
                                                                :
                                                                <p className="text-xl text-primary font-roboto font-semibold">{product.currency} {product.price}</p>
                                                        }

                                                    </div>
                                                    {/* product price:end */}
                                                    {/* product star */}
                                                    <div className="flex items-center">
                                                        <div className="flex gap-1 text-sm text-yellow-400">
                                                            <span><i className="fas fa-star"/></span>
                                                            <span><i className="fas fa-star"/></span>
                                                            <span><i className="fas fa-star"/></span>
                                                            <span><i className="fas fa-star"/></span>
                                                            <span><i className="fas fa-star"/></span>
                                                        </div>
                                                        <div className="text-xs text-gray-500 ml-3">(150)</div>
                                                    </div>
                                                    {/* product star: end */}

                                                </div>
                                                {/* product button */}
                                            </a>
                                        </Link>
                                        <div onClick={() => handleAddCart(product)}
                                             className="block w-full py-1 mt-2 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
                                            Add to Cart
                                        </div>
                                        {/* product button end */}

                                    </div>
                                </div>

                            )) : <></>
                    }
                </div>
            </div>
        </section>
    );
};

ProductGrid.getInitialProps = async ({query}) =>{
    const {products} = query
    return {
        props: {
            products: products
        }
    }
}
export default ProductGrid;