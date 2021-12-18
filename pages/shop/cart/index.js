import React, {useEffect, useState} from 'react';
import Header from "../components/header";
import {useDispatch, useSelector} from "react-redux";
import {getCartList} from "../../../services/store/cart/Action";
import Card from "./components/Card";
import _ from "lodash";
import {getDeliveryFee} from "../../../services/store/deliveryFee/Action";

const Index = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCartList())
    }, [dispatch])
    const cartList = useSelector(store => store.cartList)
    const [summary, setSummary] = useState({
        subTotal: 0,
        deliveryFee: 0,
        total: 0,
        totalQuantity: 0
    })
    useEffect(() => {
        summaryCalculate()
    }, [cartList])

    function summaryCalculate() {
        let totalQuantity = 0
        let total = 0
        if (!_.isEmpty(cartList.data)) {
            total = cartList.data.reduce(function (a, b) {
                return a + b.total;
            }, 0)
            totalQuantity = cartList.data.reduce(function (a, b) {
                return a + b.quantity;
            }, 0)
        }
        getDeliveryFee(totalQuantity).then(res => {
            let deliveryFee = 0
            if (!_.isEmpty(res.data)){
                deliveryFee = res.data[0].fees
            }
            setSummary({
                ...summary,
                subTotal: total,
                deliveryFee: deliveryFee,
                total: total + deliveryFee,
                totalQuantity: totalQuantity
            })
            console.log(res )
        }).catch(reason => {
            console.log(reason)

        })
    }

    function summaryCalculateFromChild(amount, quantity) {
        getDeliveryFee(summary.totalQuantity+quantity).then(res => {
            let deliveryFee = 0
            if (!_.isEmpty(res.data)){
                deliveryFee = res.data[0].fees
            }
            setSummary({
                ...summary,
                subTotal: summary.subTotal + amount,
                deliveryFee: deliveryFee,
                total: summary.subTotal + amount + deliveryFee,
                totalQuantity: summary.totalQuantity+quantity
            })
        })
    }

    return (
        <div>
            <Header/>
            {/* cart wrapper */}
            <div className="container lg:grid grid-cols-12 gap-6 items-start pb-16 pt-4">
                {/* product cart */}
                <div className="xl:col-span-9 lg:col-span-8">
                    {/* cart title */}
                    <div className="bg-gray-200 py-2 pl-12 pr-20 xl:pr-28 mb-4 hidden md:flex">
                        <p className="text-gray-600 text-center">Product</p>
                        <p className="text-gray-600 text-center ml-auto mr-16 xl:mr-24">Quantity</p>
                        <p className="text-gray-600 text-center">Total</p>
                    </div>
                    {/* cart title end */}
                    {/* shipping carts */}
                    <div className="space-y-4">
                        {/* single cart */}
                        {
                            cartList.loading ?
                                <></>
                                :
                                !_.isEmpty(cartList.data) ?
                                    cartList.data.map((cart, i) => (
                                        <Card key={i} cart={cart} summaryCalc={summaryCalculateFromChild}/>
                                    )) :
                                    <></>
                        }

                        {/*<div
                            className="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
                             cart image
                            <div className="w-32 flex-shrink-0">
                                <img src="/static/image/product/5_1.jpg" className="w-full"/>
                            </div>
                             cart image end   cart content
                            <div className="md:w-1/3 w-full">
                                <h2 className="text-gray-800 mb-3 xl:text-lg text-sm font-medium uppercase">
                                   Rainbow 200 Sheet Facial Tissue Box
                                </h2>
                                <p className="text-primary font-semibold">$45.00</p>
                                <p className="text-gray-500">Size: 100 pcs</p>
                            </div>
                             cart content end   cart quantity
                            <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300">
                                <div
                                    className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-
                                </div>
                                <div className="h-8 w-10 flex items-center justify-center">4</div>
                                <div
                                    className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+
                                </div>
                            </div>
                             cart quantity end
                            <div className="ml-auto md:ml-0">
                                <p className="text-primary text-lg font-semibold">$320.00</p>
                            </div>
                            <div className="text-gray-600 hover:text-primary cursor-pointer">
                                <i className="fas fa-trash"/>
                            </div>
                        </div>
                         single cart end
                         single cart
                        <div className="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200
                            rounded flex-wrap md:flex-nowrap">
                             cart image
                            <div className="w-32 flex-shrink-0">
                                <img src="/static/image/product/1_1.jpg" className="w-full"/>
                            </div>
                             cart image end   cart content
                            <div className="md:w-1/3 w-full">
                                <h2 className="text-gray-800 mb-3 xl:text-lg text-sm font-medium uppercase">
                                    Rainbow 200 Sheet Facial Tissue Box
                                </h2>
                                <p className="text-primary font-semibold">$45.00</p>
                                <p className="text-gray-500">Size: 50 pcs</p>
                            </div>
                             cart content end   cart quantity
                            <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300">
                                <div
                                    className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-
                                </div>
                                <div className="h-8 w-10 flex items-center justify-center">4</div>
                                <div
                                    className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+
                                </div>
                            </div>
                             cart quantity end
                            <div className="ml-auto md:ml-0">
                                <p className="text-primary text-lg font-semibold">$320.00</p>
                            </div>
                            <div className="text-gray-600 hover:text-primary cursor-pointer">
                                <i className="fas fa-trash"/>
                            </div>
                        </div>*/}
                        {/* single cart end */}
                    </div>
                    {/* shipping carts end */}
                </div>
                {/* product cart end */}
                {/* order summary */}
                <div className="xl:col-span-3 lg:col-span-4 border border-gray-200 px-4 py-4 rounded mt-6 lg:mt-0">
                    <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">ORDER SUMMARY</h4>
                    <div className="space-y-1 text-gray-600 pb-3 border-b border-gray-200">
                        <div className="flex justify-between font-medium">
                            <p>Subtotal</p>
                            <p>{summary.subTotal}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Delivery</p>
                            <p>{summary.deliveryFee}</p>
                            {/*<p>Free</p>*/}
                        </div>
                        {/*<div className="flex justify-between">*/}
                        {/*    <p>Tax</p>*/}
                        {/*    <p>Free</p>*/}
                        {/*</div>*/}
                    </div>
                    <div className="flex justify-between my-3 text-gray-800 font-semibold uppercase">
                        <h4>Total</h4>
                        <h4>{summary.total}</h4>
                    </div>
                    {/* searchbar */}
                    <div className="flex mb-5">
                        <input type="text"
                               className="pl-4 w-full border border-r-0 border-primary py-2 px-3 rounded-l-md
                               focus:ring-primary focus:border-primary text-sm"
                               placeholder="Coupon"/>
                        <button type="submit"
                                className="bg-primary border border-primary text-white px-5 font-medium rounded-r-md
                                 hover:bg-transparent hover:text-primary transition text-sm font-roboto"
                        >
                            Apply
                        </button>
                    </div>
                    {/* searchbar end */} {/* checkout */}
                    <a href="checkout.html" className="bg-primary border border-primary text-white px-4 py-3 font-medium rounded-md uppercase hover:bg-transparent
                        hover:text-primary transition text-sm w-full block text-center"
                    >
                        Process to checkout
                    </a> {/* checkout end */}
                </div>
                {/* order summary end */}
            </div>
            {/* cart wrapper end */}
        </div>
    );
};

export default Index;