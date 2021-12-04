import React from 'react';
import styles from '../Index.module.scss'
import classnames from 'classnames'
import _ from "lodash"
import  Link from 'next/link'

const ProductGrid = (props) => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto">
                <div className="flex flex-wrap -m-4">
                    {
                        !_.isEmpty(props.products)?
                            props.products.map((product, i) => (
                                <Link href={`/shop/product/${product.id}`}>
                                    <a key={i} className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full p-1 cursor-pointer animate__animated animate__fadeIn">
                                        <div className={'border border-primary p-3'}>
                                            {/* product image */}
                                            <a className="block relative h-48 rounded overflow-hidden transition hover:scale-105">
                                                <img alt="ecommerce"
                                                     className={classnames(styles.product_img, "object-cover object-center w-full h-full block ")}
                                                     src={product.thumbnail}/>
                                            </a>
                                            {/* product image: end */}

                                            <div className="mt-4">
                                                {/* product category */}
                                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{
                                                    !_.isEmpty(product.category) ?
                                                        product.category.map((cat, i)=>(
                                                            <>
                                                                {
                                                                    i>0? <>, {cat.name}</>: cat.name
                                                                }
                                                            </>

                                                        )): "Undefine"}</h3>
                                                {/* product title */}
                                                <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
                                                {/* product price */}
                                                <div className="flex items-baseline my-1 space-x-2">

                                                    {
                                                        !(product.discount_price === 0)?
                                                            <>
                                                                <p className="text-xl text-primary font-roboto font-semibold">{product.currency} {product.discount_price}</p>
                                                                <p className="text-sm text-gray-400 font-roboto line-through">{product.currency} {product.price}</p>
                                                            </>
                                                            : <p className="text-xl text-primary font-roboto font-semibold">{product.currency} {product.price}</p>
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
                                                {/* product button */}
                                                <a href="#"
                                                   className="block w-full py-1 mt-2 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
                                                    Add to Cart
                                                </a> {/* product button end */}
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                        )):<></>
                    }
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;