import React, {useEffect, useState} from 'react';
import classnames from 'classnames'
import {useDispatch, useSelector} from "react-redux";
import {CircularProgress, Pagination} from "@mui/material";
import ProfileInfoCart from "./components/profileInfoCart";
import _ from 'lodash'
import Header from "../components/header";
import {
    getDefaultAddressAddress,
    getDefaultAddressCity,
    getDefaultAddressCountry, getDefaultAddressId, getDefaultAddressZipCode,
    getProfile, updatePassword,
    updateProfile
} from "../../../services/profile/profileAction";
import Swal from "sweetalert2";
import useProfile from "../../../hooks/useProfile";
import {getReviewByUserId} from "../../../services/store/review/Action";

import {Router, useRouter} from "next/router";
import OrderTab from "./components/OrderTab";
import ReviewCard from "./components/ReviewCard";
import {toast} from "react-toastify";
import {logout} from "../../../services/login/Action";

const tab = [{name: "Profile"}, {name: "Password"}, {name: "Order"}, {name: "Review"}]
const validatePassword = (p1, p2) => {
    const errors = {};
    errors.valid = true
    if (p1.length < 8) {
        errors.password1 = 'Password must be 8 character.';
        errors.valid = false
    }
    if (p1 !== p2) {
        errors.password2 = "Confirm Password Doesn't Match";
        errors.valid = false
    }

    return errors;
};

const limit = 5
const Index = () => {
    const dispatch = useDispatch()
    const [activeTabIndex, setActiveTabIndex] = useState(0)
    const [reviewPage, setReviewPage] = useState(1)
    const [reviewOffset, setReviewOffset] = useState(0)
    const [error, setError] = useState({})

    const [profile, profileId, loggedIn] = useProfile()
    const router = useRouter();
    const profileTab = router.query.tab
    const reviews = useSelector(store => store.reviewByUserId);
    useEffect(() => {
        if (profileTab === "order") {
            setActiveTabIndex(2)
        }
    }, [profileTab])

    // useEffect(() => {
    //     if (!_.isEmpty(reviews.data)) {
    //         if (!_.isEmpty(reviews.data.results)){
    //             getRatingsObject(reviews.data)
    //         }
    //     }
    // }, [reviews])

    useEffect(() => {
        getReviewPaginated()
    }, [profile, reviewOffset])

    function getReviewPaginated() {
        if (loggedIn) {
            if (profile.data.user) {
                dispatch(getReviewByUserId(profile.data.user.id, limit, reviewOffset))
            }
        }
    }

    function handleEdit(e) {
        e.preventDefault()
        const formData = new FormData();
        const user = {
            username: e.target.phone.value,
            first_name: e.target.firstName.value,
            last_name: e.target.lastName.value,
            email: e.target.email.value
        }
        const address = {
            id: e.target.addressId.value,
            phone: e.target.phone.value,
            email: e.target.email.value,
            address: e.target.address.value,
            city: e.target.city.value,
            country: e.target.country.value,
            zipCode: e.target.zipCode.value
        }
        formData.append("address", JSON.stringify(address))
        formData.append("user", JSON.stringify(user))
        updateProfile(formData, e.target.id.value).then(r => {
            if (r.status === 200) {
                if (r.data.message === 'success') {
                    if (profileId !== -1) {
                        dispatch(getProfile(profileId))
                        window.scrollTo(0, 900);
                    }
                    Swal.fire({
                        text: 'Update Successful',
                        icon: 'success',
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
            console.log(error)
        })
    }

    function handleReviewPaginate(e, page) {
        setReviewPage(page)
        setReviewOffset(limit * (page - 1))
    }

    function handleChangePassword(e) {
        e.preventDefault()
        const password = {
            old_password: e.target.old_password.value,
            new_password1: e.target.password1.value,
            new_password2: e.target.password2.value
        }
        const error = validatePassword(password.new_password1, password.new_password2)
        setError(error)
        if (error.valid){
            updatePassword(password).then(function (response){
                if (response.status===200){
                    logout()
                    router.push('/shop/login')
                    toast.success(response.data.message, {theme:"colored"})
                }else if (response.status===400){
                    toast.error(response.data.old_password[0], { autoClose: false,theme:"colored"})
                }
            })
        }

    }

    if (!loggedIn) {
        return (<CircularProgress color={"info"}/>)
    } else {
        return (
            <div>
                {profile.loading ?
                    <>

                    </> :
                    <>
                        <Header/>
                        <section className={'xl:w-7/12 lg:w-10/12 w-11/12 mx-auto  border-2 rounded-2xl my-16'}>

                            <div
                                className="flex flex-wrap md:text-base text-sm border-b-2 border-gray-100 rounded-t-2xl justify-content-start px-4 pt-4 text-gray-500 profile bg-gray-50">
                                {
                                    tab.map((v, i) => (
                                        <div

                                            onClick={() => setActiveTabIndex(i)}
                                            key={`profile-tab-${i}`}
                                            className={classnames(activeTabIndex === i ? "active" : "", "md:mx-8 mx-2 pb-4")}>{v.name}</div>
                                    ))
                                }

                            </div>

                            {

                                !_.isEmpty(profile.data) ?
                                    <>
                                        <div
                                            className={classnames(activeTabIndex === 0 ? "" : "hidden", ' flex flex-wrap')}>
                                            <ProfileInfoCart
                                                profileId={profileId}
                                                pictureUrl={profile.data.profilePicture}
                                                fName={profile.data.user.first_name}
                                                lName={profile.data.user.last_name}
                                                // lName={user.fields.last_name}
                                                title={'Edit Profile info'}
                                                subtitle={'Set up your Information if you needs'}
                                            />
                                            <div className={'sm:w-3/4 w-full  px-4'}>

                                                <div className="w-full flex">
                                                    {/* Col */}
                                                    <div
                                                        className="w-full bg-white rounded-lg lg:rounded-l-none sm:p-8">
                                                        <form className="pt-6 pb-8 mb-4 bg-white rounded"
                                                              onSubmit={handleEdit}>
                                                            <div className="mb-1 md:flex">
                                                                <input type="text" id={"id"} value={profileId} hidden/>
                                                                <div className="mb-4 md:mr-2 md:mb-0 md:w-1/2 w-full">
                                                                    <label
                                                                        className="block mb-2 text-sm font-bold text-gray-700"
                                                                        htmlFor="firstName">
                                                                        First Name
                                                                    </label>
                                                                    <input type="text" id="firstName"
                                                                           placeholder={'Enter Your First Name'}
                                                                           required
                                                                           defaultValue={profile.data.user.first_name}
                                                                           className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                    focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                    px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                                                </div>
                                                                <div className="md:ml-2 md:w-1/2 w-full">
                                                                    <label
                                                                        className="block mb-2 text-sm font-bold text-gray-700"
                                                                        htmlFor="lastName">
                                                                        Last Name <span
                                                                        className="text-gray-400">(optional)</span>
                                                                    </label>
                                                                    <input type="text" id="lastName"
                                                                           placeholder={'Enter Your Last Name'}
                                                                           defaultValue={profile.data.user.last_name}
                                                                           className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                    focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                    px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                                                </div>
                                                            </div>
                                                            <div className="mb-4 md:flex">
                                                                <div className="mb-1 md:mr-2 md:mb-0 md:w-1/2 w-full">
                                                                    <label
                                                                        className="block mb-2 text-sm font-bold text-gray-700 disable"
                                                                        htmlFor="phone">
                                                                        Phone
                                                                    </label>
                                                                    <input type="number" id="phone"
                                                                           readOnly
                                                                           placeholder={'Enter Your Phone'}
                                                                           value={profile.data.phone}
                                                                           className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                                                focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                                                px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                                    />
                                                                </div>
                                                                <div className="md:ml-2 md:w-1/2 w-full">
                                                                    <label
                                                                        className="block mb-2 text-sm font-bold text-gray-700"
                                                                        htmlFor="email">
                                                                        Email
                                                                    </label>
                                                                    <input type="email" id="email"
                                                                           placeholder={'example@gmail.com'}
                                                                           defaultValue={profile.data.user.email}
                                                                           className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                                            focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                                            px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                                                </div>
                                                            </div>


                                                            <div className="mb-4 md:flex">
                                                                <div className="mb-1 md:mr-2 md:mb-0 md:w-1/2 w-full">
                                                                    <label
                                                                        className="block mb-2 text-sm font-bold text-gray-700"
                                                                        htmlFor="city">
                                                                        City
                                                                    </label>
                                                                    <input type="text" id={'addressId'} hidden
                                                                           value={getDefaultAddressId(profile.data.user.address)}/>
                                                                    <input type="text" id="city"
                                                                           placeholder={'Ex: Dhaka'}
                                                                           defaultValue={getDefaultAddressCity(profile.data.user.address)}
                                                                           className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                                            focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                                            px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                                                </div>
                                                                <div className="md:ml-2 md:w-1/2 w-full">
                                                                    <label
                                                                        className="block mb-2 text-sm font-bold text-gray-700"
                                                                        htmlFor="country">
                                                                        Country
                                                                    </label>
                                                                    <input type="text" id="country"
                                                                           placeholder={"Ex: Bangladesh"} required
                                                                           defaultValue={getDefaultAddressCountry(profile.data.user.address)}
                                                                           className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                                                    focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                                                    px-3
                                                                                    leading-8 transition-colors duration-200 ease-in-out"/>
                                                                </div>
                                                            </div>
                                                            <div className="mb-4 md:flex">
                                                                <div className="md:ml-2 md:w-1/2 w-full">
                                                                    <label
                                                                        className="block mb-2 text-sm font-bold text-gray-700"
                                                                        htmlFor="zipCode">
                                                                        Zip Code
                                                                    </label>
                                                                    <input type="text" id="zipCode" required
                                                                           placeholder={"Enter Your Zip Code"}
                                                                           defaultValue={getDefaultAddressZipCode(profile.data.user.address)}
                                                                           className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                                                    focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                                                    px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                                                </div>

                                                                <div className="md:ml-2 md:w-1/2 w-full">
                                                                    <label
                                                                        className="block mb-2 text-sm font-bold text-gray-700"
                                                                        htmlFor="address">
                                                                        Address
                                                                    </label>
                                                                    <input type="text" id="address" required
                                                                           placeholder={"Enter Your Address"}
                                                                           defaultValue={getDefaultAddressAddress(profile.data.user.address)}
                                                                           className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                                                    focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                                                    px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                                                </div>

                                                            </div>


                                                            <div className="mb-6 text-center">
                                                                <button
                                                                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                                                    type="submit">
                                                                    Save Profile
                                                                </button>
                                                            </div>


                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*Password Change:start*/}
                                        <div
                                            className={classnames(activeTabIndex === 1 ? "" : "hidden", '', 'flex flex-wrap')}>

                                            <ProfileInfoCart
                                                pictureUrl={profile.data.profilePicture}
                                                fName={profile.data.user.first_name}
                                                lName={profile.data.user.last_name}
                                                title={'Change Password'}
                                                subtitle={'Manage your password'}
                                            />
                                            <div className={'sm:w-3/4 w-full  px-4'}>
                                                <form onSubmit={handleChangePassword}
                                                      className="pt-6 pb-8 mb-4 bg-white rounded">
                                                    <div className="mb-1 md:flex">
                                                        <div className="mb-4  w-full">
                                                            <label
                                                                className="block mb-2 text-sm font-semibold text-gray-700"
                                                                htmlFor="old_password">
                                                                Old Password
                                                            </label>
                                                            <input type="password" id="old_password"
                                                                   placeholder={'Enter Your Old Password'}
                                                                   required
                                                                   className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                                            focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                                            px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                                        </div>

                                                    </div>
                                                    <div className="w-full mb-4">
                                                        <label
                                                            className="block mb-2 text-sm font-semibold text-gray-700"
                                                            htmlFor="password1">
                                                            New Password
                                                            <span
                                                                className={"text-xs text-red-500"}> {error.password1}</span>
                                                        </label>
                                                        <input type="password" id="password1"
                                                               placeholder={'Enter Your New Password'}
                                                               className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                    focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                    px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                                        <span className={'text-xs text-gray-600'}>Password at least 8 character.</span>
                                                    </div>
                                                    <div className="w-full">
                                                        <label
                                                            className="block mb-2 text-sm font-semibold text-gray-700"
                                                            htmlFor="password2">
                                                            Confirm Password
                                                            <span
                                                                className={"text-xs text-red-500"}> {error.password2}</span>
                                                        </label>
                                                        <input type="password" id="password2"
                                                               placeholder={'Enter Your New Password'}
                                                               className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                    focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                    px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                                    </div>
                                                    <div className="mt-6 text-left">
                                                        <button
                                                            className="  px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                                            type="submit">
                                                            Change Password
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>

                                        </div>
                                        {/*Password Change:end*/}
                                        {/*OrderTab:start*/}
                                        <div
                                            className={classnames(activeTabIndex === 2 ? "" : "hidden", 'bg-gray-100 p-5')}>
                                            <OrderTab/>
                                        </div>
                                        {/*OrderTab:end*/}
                                        {/*Review:start*/}

                                        <div className={classnames(activeTabIndex === 3 ? "" : "hidden", 'p-4')}>
                                            {
                                                reviews.loading ?
                                                    <div className={"flex h-40 justify-center items-center"}>
                                                        <CircularProgress/>
                                                    </div>
                                                    :
                                                    reviews.data.count > 0 ?
                                                        <>
                                                            {
                                                                reviews.data.results.map((review, keys) => (
                                                                    <ReviewCard review={review}
                                                                                getReview={getReviewPaginated}
                                                                                key={`profile-review-card-${keys}`}/>

                                                                ))
                                                            }
                                                            <div
                                                                className={'flex justify-center items-center mt-2 w-full'}>
                                                                {
                                                                    reviews.data.count > limit ?
                                                                        <Pagination
                                                                            count={Math.ceil(reviews.data.count / limit)}
                                                                            page={reviewPage}
                                                                            onChange={handleReviewPaginate}
                                                                            color="primary"/>
                                                                        : <></>
                                                                }
                                                            </div>
                                                        </>
                                                        :
                                                        <div className={"flex h-40 justify-center items-center"}>
                                                            Review not Found
                                                        </div>
                                            }

                                        </div>
                                        {/*Review:end*/}
                                    </> :
                                    <></>
                            }


                        </section>
                    </>

                }
            </div>
        );
    }

};

export default Index;