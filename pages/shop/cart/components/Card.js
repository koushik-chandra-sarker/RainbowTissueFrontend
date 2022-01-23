import React, {useEffect, useState} from 'react';
import {deleteCart, getTotalCartByRequestedUser, updateCart} from "../../../../services/store/cart/Action";
import {toast} from "react-toastify";
import _ from "lodash";
import {useDispatch} from "react-redux";


const Card = ({cart, summaryCalc, updateCartList, handleCheckoutBtn}) => {
    const [cartItem, setCartItem] = useState(cart)
    const dispatch = useDispatch()
    function handleQuantity(value) {

        let q = Number(cartItem.quantity) + (value)
        if (q > cartItem.product.stock) {
            toast.error(`Product Available ${cartItem.product.stock}`, {autoClose: 10000, theme: "colored"});
            return
        }
        let total = cart.product.discount_price !== 0 ? cart.product.discount_price * q : cart.product.price * q
        if (q >= 0) {
            setCartItem({...cartItem, quantity: q, total: total})
            if (value === 1) {
                summaryCalc(cart.product.discount_price !== 0 ? cart.product.discount_price : cart.product.price, 1)
            } else {
                summaryCalc(cart.product.discount_price !== 0 ? -cart.product.discount_price : -cart.product.price, -1)
            }
        }
    }

    function handleQuantityByInput(value) {
        if (value > cartItem.product.stock) {
            toast.error(`Product Available ${cartItem.product.stock}`, {autoClose: 10000, theme: "colored"});
            return
        }
        let total = cart.product.discount_price !== 0 ? cart.product.discount_price * value : cart.product.price * value
        setCartItem({...cartItem, quantity: value, total: total})
        const quantity = value - cartItem.quantity
        summaryCalc(cart.product.discount_price !== 0 ? cart.product.discount_price * (quantity) : cart.product.price * (quantity), quantity)


    }

    useEffect(() => {
        const cart = {
            product: cartItem.product.id,
            user: cartItem.user,
            quantity: cartItem.quantity,
            total: cartItem.total
        }
        handleCheckoutBtn(true)
        updateCart(cartItem.id, cart).then(function (response) {
            if (response.status === 200) {
                handleCheckoutBtn(false)
            }
        })

    }, [cartItem])


    function handleDelete(id) {
        deleteCart(id).then(function (response) {
            if (response.status === 204) {
                updateCartList()
                toast.success("Delete Successful", {theme: 'colored'})
            } else {
                toast.error("Something went wrong! Try Again.", {theme: 'colored'})

            }
        })
    }

    return (
        <div
            className="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
            {/* cart image */}
            <div className="w-32 flex-shrink-0">
                <img src={!_.isEmpty(cartItem.product) ? cartItem.product.thumbnail : ""} className="w-full"/>
            </div>
            {/* cart image end */} {/* cart content */}
            <div className="md:w-1/3 w-full">
                <h2 className="text-gray-800 mb-3 xl:text-lg text-sm font-medium uppercase">
                    {cartItem.product.name}
                </h2>
                {/*<p className="text-primary font-semibold">{cartItem.product.currency} {cartItem.product.price}</p>*/}
                {
                    !(cartItem.product.discount_price === 0) ?
                        <>
                            <p className="text-xl text-primary font-roboto font-semibold">{cartItem.product.currency} {cartItem.product.discount_price}</p>
                            <p className="text-sm text-gray-400 font-roboto line-through">{cartItem.product.currency} {cartItem.product.price}</p>
                        </>
                        :
                        <p className="text-xl text-primary font-roboto font-semibold">{cartItem.product.currency} {cartItem.product.price}</p>
                }
                {/*<p className="text-gray-500">Size: 100 pcs</p>*/}
            </div>
            {/* cartItem content end */} {/* cartItem quantity */}
            <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300">
                <div
                    onClick={() => handleQuantity(-1)}
                    className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-
                </div>
                <input
                    onChange={(e) => handleQuantityByInput(e.target.value)}
                    type={'number'}
                    className="h-8 w-16 focus:outline-none text-center flex items-center justify-center cart_quantity"
                    defaultValue={cartItem.quantity}
                    value={cartItem.quantity}
                    min="1" max={cartItem.product.stock} maxLength={cartItem.product.stock.length}
                />
                <div
                    onClick={() => handleQuantity(1)}
                    className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+
                </div>
            </div>
            {/* cart quantity end */}
            <div className="ml-auto md:ml-0">
                <p className="text-primary text-lg font-semibold">{cartItem.total}</p>
            </div>
            <div className="text-gray-600 hover:text-primary cursor-pointer">
                <i onClick={() => handleDelete(cartItem.id)} className="fas fa-trash"/>
            </div>
        </div>
    );
};

Card.getInitialProps = async ({query}) => {
    const {cart, summaryCalc, updateCartList, handleCheckoutBtn} = query
    return {
        props: {
            cart: cart,
            summaryCalc: summaryCalc,
            updateCartList: updateCartList,
            handleCheckoutBtn: handleCheckoutBtn
        },
    }
}
export default Card;