import React from 'react';
import Link from "next/link";
const Header = () => {
    return (
        <>
            {/* header */}
            <header className="py-4 shadow-sm bg-pink-100 lg:bg-white">
                <div className="sm:w-4/5 w-full mx-auto flex items-center justify-between">
                    {/* logo */}
                    <div className={'border border-3 border-primary p-2 rounded text-primary'}>
                        <a href="#" className="block text-2xl">
                            Rainbow E-Shop
                        </a>
                    </div>

                    {/* logo end */}
                    {/* searchbar */}
                    <div className="w-full xl:max-w-xl lg:max-w-lg lg:flex relative hidden">
                        <span className="absolute left-4 top-3 text-lg text-gray-400">
                            <i className="fas fa-search"/>
                        </span>
                        <input type="text"
                               className="pl-12 w-full border border-r-0 border-primary py-3 px-3 rounded-l-md focus:ring-primary focus:border-primary"
                               placeholder="search"/>
                        <button type="submit"
                                className="bg-primary border border-primary text-white px-8 font-medium rounded-r-md hover:bg-transparent hover:text-primary transition">
                            Search
                        </button>
                    </div>
                    {/* searchbar end */}
                    {/* navicons */}
                    <div className="space-x-4 flex items-center">
                        <a href="wishlist.html"
                           className="block text-center text-gray-700 hover:text-primary transition relative">
                            <span
                                className="absolute -right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">5</span>
                            <div className="text-2xl">
                                <i className="far fa-heart"/>
                            </div>
                            <div className="text-xs leading-3">Wish List</div>
                        </a>
                        <a href="cart.html"
                           className="lg:block text-center text-gray-700 hover:text-primary transition hidden relative">
                            <span
                                className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">3</span>
                            <div className="text-2xl">
                                <i className="fas fa-shopping-bag"/>
                            </div>
                            <div className="text-xs leading-3">Cart</div>
                        </a>
                        <Link href="/shop/login">
                            <a href="account.html"
                               className="block text-center text-gray-700 hover:text-primary transition">
                                <div className="text-2xl">
                                    <i className="far fa-user"/>
                                </div>
                                <div className="text-xs leading-3">Account</div>
                            </a>
                        </Link>
                    </div>
                    {/* navicons end */}
                </div>
            </header>
            {/* header end */}
        </>
    );
};

export default Header;