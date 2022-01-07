import React, {useState} from 'react';
import Link from 'next/link'
import classnames from 'classnames'
import {createProfile} from "../../../services/profile/profileAction";
import Swal from 'sweetalert2'
import Router from 'next/router'
const validatePassword = (p1, p2) => {
    const errors = {};
    errors.valid = true
    if (p1.length < 8) {
        errors.password = 'Password must be 8 character.';
        errors.valid = false
    }
    if (p1 !== p2) {
        errors.password2 = "Confirm Password Doesn't Match";
        errors.valid = false
    }

    return errors;
};

const Register = () => {
    const [error, setError] = useState({})

    const [showPass, setShowPass] = useState(false)

    function handleForm(e) {
        e.preventDefault()
        const formData = new FormData();
        const user = {
            username: e.target.phone.value,
            password: e.target.password.value,
            first_name: e.target.firstName.value,
            last_name: e.target.lastName.value,
            email: e.target.email.value
        }
        formData.append("phone", e.target.phone.value)
        formData.append("address", e.target.address.value)
        formData.append("city", e.target.city.value)
        formData.append("country", e.target.country.value)
        formData.append("profilePic", e.target.profile_pic.files[0])
        formData.append("user", JSON.stringify(user))

        const error = validatePassword(e.target.password.value, e.target.password2.value)
        setError(error)
        if (error.valid) {
            createProfile(formData).then(r => {
                if (r.status === 201) {
                    if (r.data.message === 'success') {
                        e.target.phone.value = ''
                        e.target.city.value = ''
                        e.target.address.value = ''
                        e.target.country.value = ''
                        e.target.password.value = ''
                        e.target.password2.value = ''
                        e.target.firstName.value = ''
                        e.target.lastName.value = ''
                        e.target.email.value = ''
                        e.target.profile_pic.value = null
                        Swal.fire({
                            text: 'Please Login Using your Phone or Email.',
                            icon: 'success',
                            confirmButtonText: 'Login'
                        }).then(value => {
                            if (value.isConfirmed){
                                Router.push('/shop/login')
                            }
                        })
                    }
                    // else toast.error(r.data.message, {autoClose: 10000});
                    else {
                        Swal.fire({
                            text: r.data.message,
                            icon: 'error',
                            confirmButtonText: 'Ok'
                        })
                    }
                }
            }).catch(error => {
            })
        }
        // else toast.error("Please Give your valid Information", {autoClose: 10000})
        else {
            Swal.fire({
                title: 'Error!',
                text: "Please Give your valid Information",
                icon: 'error',phone,
                confirmButtonText: 'Okay'
            })
        }

    }

    return (
        <div>
            <div className="w-11/12 sm:w-2/4  mx-auto">
                <div className="flex justify-center my-12">
                    {/* Row */}
                    <div className="w-full flex">
                        {/* Col */}
                        <div className="w-full bg-white rounded-lg lg:rounded-l-none">
                            <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
                            <form className="pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleForm}>
                                <div className="mb-4 md:flex">
                                    <div className="mb-1 md:mr-2 md:mb-0 md:w-1/2 w-full">
                                        <label className="block mb-2 text-sm font-bold text-gray-700"
                                               htmlFor="phone">
                                            Phone <span className="text-primary">*</span><span
                                            className={"text-xs text-red-500"}>{error.phone}</span>
                                        </label>
                                        <input type="number" id="phone" placeholder={'Ex: 01700000000'} required
                                               className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                    focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                    px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                    </div>
                                    <div className="md:ml-2 md:w-1/2 w-full">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                                            Email <span className="text-gray-400">(optional)</span><span
                                            className={"text-xs text-red-500"}>{error.email}</span>
                                        </label>
                                        <input type="email" id="email" placeholder={'example@gmail.com'}
                                               className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                    focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                    px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                    </div>
                                </div>

                                <div className="mb-1 md:flex">
                                    <div className="mb-4 md:mr-2 md:mb-0 md:w-1/2 w-full">
                                        <label className="block mb-2 text-sm font-bold text-gray-700"
                                               htmlFor="firstName">
                                            First Name <span className="text-primary">*</span><span
                                            className={"text-xs text-red-500"}>{error.name}</span>
                                        </label>
                                        <input type="text" id="firstName" placeholder={'Enter Your First Name'} required
                                               className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                    focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                    px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                    </div>
                                    <div className="md:ml-2 md:w-1/2 w-full">
                                        <label className="block mb-2 text-sm font-bold text-gray-700"
                                               htmlFor="lastName">
                                            Last Name <span className="text-gray-400">(optional)</span>
                                        </label>
                                        <input type="text" id="lastName" placeholder={'Enter Your Last Name'}
                                               className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                    focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                    px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                    </div>
                                </div>
                                <div className="mb-4 md:flex">
                                    <div className="mb-1 md:mr-2 md:mb-0 md:w-1/2 w-full">
                                        <label className="block mb-2 text-sm font-bold text-gray-700"
                                               htmlFor="city">
                                            City <span className="text-primary">*</span><span
                                            className={"text-xs text-red-500"}>{error.city}</span>
                                        </label>
                                        <input type="text" id="city" placeholder={'Ex: Dhaka'}
                                               className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                    focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                    px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                    </div>
                                    <div className="md:ml-2 md:w-1/2 w-full">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="country">
                                            Country <span className="text-primary">*</span><span
                                            className={"text-xs text-red-500"}>{error.country}</span>
                                        </label>
                                        <input type="text" id="country" placeholder={"Ex: Bangladesh"} required
                                               className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                    focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                    px-3
                                                    leading-8 transition-colors duration-200 ease-in-out"/>
                                    </div>
                                </div>
                                <div className="mb-4 md:flex">

                                    <div className="md:ml-2 md:w-1/2 w-full">
                                        <label className="block mb-2 text-sm font-bold text-gray-700"
                                               htmlFor="profile_pic">
                                            Profile Picture <span className="text-gray-400">(optional)</span>
                                        </label>
                                        <input type="file" id="profile_pic"
                                               className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                    focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700
                                                   leading-8 transition-colors duration-200 ease-in-out"/>
                                    </div>
                                    <div className="md:ml-2 md:w-1/2 w-full">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="address">
                                            Address <span className="text-primary">*</span><span
                                            className={"text-xs text-red-500"}>{error.address}</span>
                                        </label>
                                        <input type="text" id="address" required
                                               className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                    focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                    px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                    </div>
                                </div>

                                <div className="mb-4 md:flex">
                                    <div className="mb-1 md:mr-2 md:mb-0 md:w-1/2 w-full">
                                        <label className="block mb-2 text-sm font-bold text-gray-700"
                                               htmlFor="password">
                                            Password <span className="text-primary">*</span><span
                                            className={"text-xs text-red-500"}>{error.password}</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                id={'password'}
                                                type={showPass ? "text" : 'password'} required
                                                placeholder={'**********'} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                    focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                    px-3 leading-8 transition-colors duration-200 ease-in-out"/>

                                            <div
                                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                                <span
                                                    className={classnames(showPass ? 'hidden' : '', "material-icons cursor-pointer")}
                                                    onClick={() => {
                                                        setShowPass(true)
                                                    }}
                                                >
                                                    visibility
                                                </span>
                                                <span
                                                    onClick={() => {
                                                        setShowPass(false)
                                                    }
                                                    }
                                                    className={classnames(!showPass ? 'hidden' : '', "material-icons cursor-pointer")}>
                                                    visibility_off
                                                </span>
                                            </div>
                                        </div>
                                        <span className={'text-xs'}>Password Must be 8 character.</span>

                                    </div>
                                    <div className="md:ml-2 md:w-1/2 w-full">
                                        <label className="block mb-2 text-sm font-bold text-gray-700"
                                               htmlFor="password2">
                                            Confirm Password <span className="text-primary">*</span><span
                                            className={"text-xs text-red-500"}>{error.password2}</span>
                                        </label>
                                        <input type={showPass ? "text" : 'password'} id="password2" required
                                               placeholder={'**********'}
                                               className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                            focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                            px-3 leading-8 transition-colors duration-200 ease-in-out"/>

                                    </div>
                                </div>
                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                        type="submit">
                                        Register Account
                                    </button>
                                </div>
                                <hr className="mb-6 border-t"/>
                                <div className="text-center">
                                    <Link href={'/shop/login'}>
                                        <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                                            Already have an account? Login!
                                        </a>
                                    </Link>
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