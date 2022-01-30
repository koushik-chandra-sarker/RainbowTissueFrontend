import React, {Fragment, useEffect, useRef, useState} from 'react';
import Link from "next/link";
import {Disclosure, Menu, Transition} from '@headlessui/react'
import {useDispatch, useSelector} from "react-redux";
import {isLoggedIn, logout} from "../../../services/login/Action";
import {useRouter} from "next/router";
import {getTotalCartByRequestedUser} from "../../../services/store/cart/Action";
import SearchedProductCard from "./SearchedProductCard";
import {Card, CircularProgress} from "@mui/material";
import {getProductList} from "../../../services/store/product/ProductAction";
import {store_base_url} from "../../../constants";
import _ from "lodash";
import useOutsideClicked from "../../../hooks/useOutsideClicked";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Header = () => {

    const dispatch = useDispatch()
    const router = useRouter()
    const loggedIn = useSelector(store => store.IsLoggedIn)
    const totalCart = useSelector(store => store.totalCart)
    const [searchKey, setSearchKey] = useState("")
    const productList = useSelector(state => state.products);
    const [products, setProducts] = useState("")
    const { ref, isComponentVisible, setIsComponentVisible } = useOutsideClicked(false);

    useEffect(() => {
        dispatch(isLoggedIn())
        dispatch(getTotalCartByRequestedUser())
    }, [dispatch])
    useEffect(() => {
        setProducts(productList)
    }, [productList])
    function logoutHandle() {
        logout();
        dispatch(isLoggedIn())
        router.push('/shop')
    }

    const getProducts = () => {
        dispatch(getProductList(`${store_base_url}/product/?active=true&search=${searchKey}`))
    }

    function handleSearchProduct() {

        if (!_.isEmpty(searchKey)) {
            getProducts()
            setIsComponentVisible(true)
        } else {
            setProducts({})
            setIsComponentVisible(false)
        }

    }

    return (
        <>
            {/* header */}
            <header className="py-4 shadow-sm bg-pink-100 lg:bg-white">
                <div className="sm:w-4/5 w-full mx-auto flex items-center justify-between">
                    {/* logo */}
                    <div className={'border border-3 border-primary p-2 rounded text-primary'}>
                        <Link href={'/shop'}>
                            <a className="block text-2xl">
                                Rainbow E-Shop
                            </a>
                        </Link>
                    </div>

                    {/* logo end */}
                    {/* searchbar */}
                    <div className="w-full xl:max-w-xl lg:max-w-lg lg:flex relative hidden">
                        <span className="absolute left-4 top-3 text-lg text-gray-400">
                            <i className="fas fa-search"/>
                        </span>
                        <input type="text" onChange={e => setSearchKey(e.target.value)}
                               className="pl-12 w-full border border-r-0 border-primary py-3 px-3 rounded-l-md focus:ring-primary focus:border-primary"
                               placeholder="search"/>
                        <button type="submit" onClick={handleSearchProduct}
                                className="bg-primary border border-primary text-white px-8 font-medium rounded-r-md hover:bg-transparent hover:text-primary transition">
                            Search
                        </button>
                        {
                            isComponentVisible ?
                                <Card ref={ref}
                                      className={'absolute bg-white w-full top-16 p-4 gap-4 max-h-96 grid z-10 overflow-auto'}>
                                    {
                                        products.loading ?
                                            <div className={'flex justify-center p-4'}><CircularProgress/></div> :
                                            !_.isEmpty(products.data) ?
                                                products.data.map((product, key) => (
                                                    <SearchedProductCard key={`search-product-${key}`}
                                                                         product={product}/>
                                                )) :
                                                <div className={'flex justify-center p-4'}>Product not match</div>
                                    }

                                </Card> :
                                <></>
                        }

                    </div>
                    {/* searchbar end */}
                    {/* navicons */}
                    <div className="space-x-4 flex items-center">
                        {/* <a href="wishlist.html"
                           className="block text-center text-gray-700 hover:text-primary transition relative">
                            <span
                                className="absolute -right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">5</span>
                            <div className="text-2xl">
                                <i className="far fa-heart"/>
                            </div>
                            <div className="text-xs leading-3">Wish List</div>
                        </a>*/}
                        <Link href="/shop/cart">
                            <a
                                className="lg:block text-center text-gray-700 hover:text-primary transition hidden relative">
                            <span
                                className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                                {totalCart.data}
                            </span>
                                <div className="text-2xl">
                                    <i className="fas fa-shopping-bag"/>
                                </div>
                                <div className="text-xs leading-3">Cart</div>
                            </a>
                        </Link>
                        <div className="ml-4 flex items-center md:ml-6">
                            {/*<button*/}
                            {/*    type="button"*/}
                            {/*    className="inline-flex justify-center px-2 py-0.5 text-sm font-medium text-white bg-my-primary border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"*/}
                            {/*>*/}
                            {/*    Login*/}
                            {/*</button>*/}
                            {/* Profile dropdown */}
                            <Menu as="div" className="ml-3 relative">
                                <div>
                                    <Menu.Button
                                        className="bg-gray-800 flex text-sm rounded-full focus:outline-none ring-2 ring-offset-2 ring-offset-yellow-600 ring-yellow-600">
                                        <span className="sr-only">Open user menu</span>
                                        <img
                                            className="h-8 w-8 rounded-full"
                                            src={'/static/image/default_avatar.jpg'}
                                            alt=""
                                        />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items
                                        className="origin-top-right z-50 absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">

                                        {
                                            loggedIn ?
                                                <>
                                                    <Menu.Item>
                                                        {({active}) => (
                                                            <Link href="/shop/profile">
                                                                <a className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                                                                    Profile
                                                                </a>
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({active}) => (

                                                            <div
                                                                onClick={logoutHandle}
                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            >
                                                                Logout
                                                            </div>


                                                        )}
                                                    </Menu.Item>
                                                </>

                                                :
                                                <Menu.Item>
                                                    {({active}) => (
                                                        <Link href="/shop/login">
                                                            <a className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 ')}> Login</a>

                                                        </Link>

                                                    )}
                                                </Menu.Item>
                                        }

                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                        {/*<Link href="/shop/login">
                            <a className="block text-center text-gray-700 hover:text-primary transition">
                                <div className="text-2xl">
                                    <i className="far fa-user"/>
                                </div>
                                <div className="text-xs leading-3">Account</div>
                            </a>
                        </Link>*/}
                    </div>
                    {/* navicons end */}
                </div>
            </header>
            {/* header end */}
        </>
    );
};

export default Header;