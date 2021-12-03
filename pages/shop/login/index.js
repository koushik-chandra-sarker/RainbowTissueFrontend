import React from 'react';
import Link from "next/link";
const Index = () => {
    return (
        <div>
            {/* form wrapper */}
            <div className="w-11/12 sm:w-3/4 mx-auto py-16">
                <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
                    <h2 className="text-2xl uppercase font-medium mb-1">
                        LOGIN
                    </h2>
                    <p className="text-gray-600 mb-6 text-sm">
                        Login if you are a customer
                    </p>
                    <form action>
                        <div className="space-y-4">
                            <div>
                                <label className="text-gray-600 mb-2 block">
                                    Username <span className="text-primary">*</span>
                                </label>
                                <input type="text" id="username" name="username"
                                       className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                        focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                        px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                            <div>
                                <label className="text-gray-600 mb-2 block">Password <span className="text-primary">*</span></label>
                                <input type="email" id="email" name="password"
                                       className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                        focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                        px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-6">
                            <div className="flex items-center">
                                <input type="checkbox" id="agreement" className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                <label htmlFor="agreement" className="text-gray-600 ml-3 cursor-pointer">
                                    Remember Me
                                </label>
                            </div>
                            <a href="#" className="text-primary">Forgot Password?</a>
                        </div>
                        <div className="mt-4">
                            <button type="submit" className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">
                                Login
                            </button>
                        </div>
                    </form>
                    <p className="mt-4 text-gray-600 text-center">
                        Don't have an account? <Link href={'/shop/register'}><a className="text-primary">Register Now
                    </a></Link>
                </p>
                </div>
            </div>
            {/* form wrapper end */}

        </div>
    );
};

export default Index;