import React, {useState} from 'react';
import classnames from 'classnames'
const Register = () => {

    const [showPass, setShowPass] = useState(false)
    return (
        <div>
            <div className="w-11/12 sm:w-2/4  mx-auto">
                <div className="flex justify-center my-12">
                    {/* Row */}
                    <div className="w-full flex">
                        {/* Col */}
                        <div className="w-full bg-white rounded-lg lg:rounded-l-none">
                            <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
                            <form className="pt-6 pb-8 mb-4 bg-white rounded">
                                <div className="mb-4 md:flex">
                                    <div className="mb-1 md:mr-2 md:mb-0 md:w-1/2 w-full">
                                        <label className="block mb-2 text-sm font-bold text-gray-700"
                                               htmlFor="username">
                                            Username <span className="text-primary">*</span>
                                        </label>
                                        <input type="text" id="username" placeholder={'username'}
                                               className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                    focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                    px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                    </div>
                                    <div className="md:ml-2 md:w-1/2 w-full">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                                            Email <span className="text-primary">*</span>
                                        </label>
                                        <input type="email" id="email" placeholder={'example@gmail.com'}
                                               className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                    focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                    px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                    </div>
                                </div>
                                <div className="mb-4 md:flex">
                                    <div className="mb-1 md:mr-2 md:mb-0 md:w-1/2 w-full">
                                        <label className="block mb-2 text-sm font-bold text-gray-700"
                                               htmlFor="phone">
                                            Phone <span className="text-primary">*</span>
                                        </label>
                                        <input type="number" id="phone" placeholder={'Ex: 01700000000'}
                                               className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                    focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                    px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                    </div>
                                    <div className="md:ml-2 md:w-1/2 w-full">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="profile_pic">
                                            Profile Picture
                                        </label>
                                        <input type="file" id="profile_pic" 
                                               className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                    focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700
                                                   leading-8 transition-colors duration-200 ease-in-out"/>
                                    </div>
                                </div>
                                <div className="mb-1 md:flex">
                                    <div className="mb-4 md:mr-2 md:mb-0 md:w-1/2 w-full">
                                        <label className="block mb-2 text-sm font-bold text-gray-700"
                                               htmlFor="firstName">
                                            First Name <span className="text-primary">*</span>
                                        </label>
                                        <input type="text" id="firstName" placeholder={'First Name'}
                                               className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                    focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                    px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                    </div>
                                    <div className="md:ml-2 md:w-1/2 w-full">
                                        <label className="block mb-2 text-sm font-bold text-gray-700"
                                               htmlFor="lastName">
                                            Last Name
                                        </label>
                                        <input type="text" id="lastName" placeholder={'First Name'}
                                               className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                    focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                    px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                    </div>
                                </div>
                                <div className="mb-4 md:flex">
                                    <div className="mb-1 md:mr-2 md:mb-0 md:w-1/2 w-full">
                                        <label className="block mb-2 text-sm font-bold text-gray-700"
                                               htmlFor="city">
                                            City <span className="text-primary">*</span>
                                        </label>
                                        <input type="text" id="city" placeholder={'Ex: Dhaka'}
                                               className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                    focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                    px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                    </div>
                                    <div className="md:ml-2 md:w-1/2 w-full">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="country">
                                           Country
                                        </label>
                                        <input type="text" id="country" placeholder={"Ex: Bangladesh"}
                                               className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                    focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                    px-3
                                                    leading-8 transition-colors duration-200 ease-in-out"/>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="address">
                                        Address <span className="text-primary">*</span>
                                    </label>
                                    <input type="text" id="address"
                                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                    focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                    px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                </div>
                                <div className="mb-4 md:flex">
                                    <div className="mb-1 md:mr-2 md:mb-0 md:w-1/2 w-full">
                                        <label className="block mb-2 text-sm font-bold text-gray-700"
                                               htmlFor="password">
                                            Password <span className="text-primary">*</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type={showPass?"text": 'password'}
                                                placeholder={'**********'} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                    focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                    px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                                <span className={classnames(showPass? 'hidden':'',"material-icons cursor-pointer")}
                                                    onClick={()=> {
                                                        setShowPass(true)
                                                    }}
                                                >
                                                    visibility
                                                </span>
                                                <span
                                                    onClick={()=>{
                                                        setShowPass(false)
                                                    }
                                                    }
                                                    className={classnames(!showPass? 'hidden': '', "material-icons cursor-pointer")}>
                                                    visibility_off
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="md:ml-2 md:w-1/2 w-full">
                                        <label className="block mb-2 text-sm font-bold text-gray-700"
                                               htmlFor="password2">
                                            Confirm Password <span className="text-primary">*</span>
                                        </label>
                                        <input  type={showPass?"text": 'password'} id="password2" placeholder={'**********'}
                                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                            focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                            px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                    </div>
                                </div>
                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                        type="button">
                                        Register Account
                                    </button>
                                </div>
                                <hr className="mb-6 border-t"/>
                                <div className="text-center">
                                    <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                       href="#">
                                        Forgot Password?
                                    </a>
                                </div>
                                <div className="text-center">
                                    <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                       href="./index.html">
                                        Already have an account? Login!
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;