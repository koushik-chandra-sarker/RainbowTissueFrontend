import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";
import {getCartList, updateCart} from "../../../services/store/cart/Action";

const Card = ({cart, summaryCalc}) => {
    const [cartItem, setCartItem] = useState(cart)
    const dispatch = useDispatch()

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
        updateCart(cartItem.id, cart).then(function (response) {
            if (response.status === 200) {
                return
            }
        })


    }, [cartItem])

    return (
        <div
            className="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
            {/* cart image */}
            <div className="w-16 h-16 flex-shrink-0">
                <img src={!_.isEmpty(cartItem.product) ? cartItem.product.thumbnail : ""} className="w-full h-full"/>
            </div>
            {/* cart image end */} {/* cart content */}
            <div className="md:w-1/3 w-full">
                <h2 className="text-gray-800 text-sm font-medium uppercase">
                    {cartItem.product.name}
                </h2>
                {/*<p className="text-primary font-semibold">{cartItem.product.currency} {cartItem.product.price}</p>*/}
                {
                    !(cartItem.product.discount_price === 0) ?
                        <>
                            <p className="text-sm text-primary font-roboto font-semibold">{cartItem.product.currency} {cartItem.product.discount_price}</p>
                            <p className="text-sm text-gray-400 font-roboto line-through">{cartItem.product.currency} {cartItem.product.price}</p>
                        </>
                        :
                        <p className="text-sm text-primary font-roboto font-semibold">{cartItem.product.currency} {cartItem.product.price}</p>
                }
                {/*<p className="text-gray-500">Size: 100 pcs</p>*/}
            </div>
            {/* cartItem content end */} {/* cartItem quantity */}
            <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300">
                <input
                    onChange={(e) => handleQuantityByInput(e.target.value)}
                    type={'number'}
                    className="h-8 w-16 focus:outline-none text-center flex items-center justify-center cart_quantity"
                    value={cartItem.quantity}
                    min="1" max={cartItem.product.stock} maxLength={cartItem.product.stock.length}
                />
            </div>
            {/* cart quantity end */}
            <div className="ml-auto md:ml-0">
                <p className="text-primary text-lg font-semibold">{cartItem.total}</p>
            </div>
            <div className="text-gray-600 hover:text-primary cursor-pointer">
                <i className="fas fa-trash"/>
            </div>
        </div>
    );
};

Card.getInitialProps = async ({query}) => {
    const {cart, summaryCalc} = query
    return {
        props: {
            cart: cart,
            summaryCalc: summaryCalc
        },
    }
}

export default Card;