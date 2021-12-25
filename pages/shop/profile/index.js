import React, {useEffect, useState} from 'react';
import Link from "next/link";
import classnames from 'classnames'
import {useRouter} from "next/router";
import {isLoggedIn} from "../../../services/login/Action";
import {useDispatch, useSelector} from "react-redux";
import {CircularProgress} from "@mui/material";
import ProfileInfoCart from "./components/profileInfoCart";

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
const tab = [
    {
        name: "Profile"
    },
    {
        name: "Password"
    },
    {
        name: "Order"
    },
    {
        name: "Review"
    },

]

const Index = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    useEffect(() => {
        dispatch(isLoggedIn())
    },[dispatch])
    const loggedIn = useSelector(store => store.IsLoggedIn)

    const [activeTabIndex, setActiveTabIndex] = useState(0)
    const [user,setUser] = useState({})
    const [profile,setProfile] = useState({})
    useEffect(()=>{
        if (!loggedIn){
            router.push("/shop/login")
            return
        }else {
            setUser(JSON.parse(localStorage.getItem("user")))
            setProfile(JSON.parse(localStorage.getItem("profile")))
        }
    },[loggedIn])
    console.log(user)
    console.log(profile)
    if (!loggedIn){
        return (<CircularProgress color={"info"}/>)
    }
    else
    return (
        <div>
            <section className={'sm:w-7/12 mx-auto  border-2 rounded-2xl mt-16'}>

                <div
                    className="flex border-b-2 border-gray-100 rounded-t-2xl justify-content-start px-4 pt-4 text-gray-500 profile bg-gray-50">
                    {
                        tab.map((v, i) => (
                            <div
                                onClick={() => setActiveTabIndex(i)}
                                key={`profile-tab-${i}`}
                                className={classnames(activeTabIndex === i ? "active" : "", "mx-8 pb-4")}>{v.name}</div>
                        ))
                    }


                </div>

                <div className={classnames(activeTabIndex === 0 ? "" : "hidden", ' flex flex-wrap')}>
                    {/*<ProfileInfoCart
                        pictureUrl={profile.fields.profilePicture}
                        fName={user.fields.first_name}
                        lName={user.fields.last_name}
                        title={'Edit Profile info'}
                        subtitle={'Set up your Information if you needs'}
                    />*/}
                    <div className={'sm:w-3/4  px-4'}>

                        <div className="w-full flex">
                            {/* Col */}
                            <div className="w-full bg-white rounded-lg lg:rounded-l-none p-8">
                                <form className="pt-6 pb-8 mb-4 bg-white rounded">
                                    <div className="mb-1 md:flex">
                                        <div className="mb-4 md:mr-2 md:mb-0 md:w-1/2 w-full">
                                            <label className="block mb-2 text-sm font-bold text-gray-700"
                                                   htmlFor="firstName">
                                                First Name
                                            </label>
                                            <input type="text" id="firstName" placeholder={'Enter Your First Name'}
                                                   required value={user.fields.first_name}
                                                   className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                    focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                    px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                        </div>
                                        <div className="md:ml-2 md:w-1/2 w-full">
                                            <label className="block mb-2 text-sm font-bold text-gray-700"
                                                   htmlFor="lastName">
                                                Last Name <span className="text-gray-400">(optional)</span>
                                            </label>
                                            <input type="text" id="lastName" placeholder={'Enter Your Last Name'} value={user.fields.last_name}
                                                   className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                    focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                    px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                        </div>
                                    </div>
                                    <div className="mb-4 md:flex">
                                        <div className="mb-1 md:mr-2 md:mb-0 md:w-1/2 w-full">
                                            <label className="block mb-2 text-sm font-bold text-gray-700 disable"
                                                   htmlFor="phone">
                                                Phone
                                            </label>
                                            <input type="number" id="phone"  placeholder={'Enter Your Phone'} required value={profile.fields.phone}
                                                   className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                    focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                    px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                        </div>
                                        <div className="md:ml-2 md:w-1/2 w-full">
                                            <label className="block mb-2 text-sm font-bold text-gray-700"
                                                   htmlFor="email">
                                                Email
                                            </label>
                                            <input type="email" id="email" placeholder={'example@gmail.com'} value={user.fields.email}
                                                   className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                    focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                    px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                        </div>
                                    </div>


                                    <div className="mb-4 md:flex">
                                        <div className="mb-1 md:mr-2 md:mb-0 md:w-1/2 w-full">
                                            <label className="block mb-2 text-sm font-bold text-gray-700"
                                                   htmlFor="city">
                                                City
                                            </label>
                                            <input type="text" id="city" placeholder={'Ex: Dhaka'} value={profile.fields.city}
                                                   className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                    focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                    px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                        </div>
                                        <div className="md:ml-2 md:w-1/2 w-full">
                                            <label className="block mb-2 text-sm font-bold text-gray-700"
                                                   htmlFor="country">
                                                Country
                                            </label>
                                            <input type="text" id="country" placeholder={"Ex: Bangladesh"} required value={profile.fields.country}
                                                   className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                    focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                    px-3
                                                    leading-8 transition-colors duration-200 ease-in-out"/>
                                        </div>
                                    </div>
                                    <div className="mb-4 md:flex">


                                        <div className="md:ml-2 w-full">
                                            <label className="block mb-2 text-sm font-bold text-gray-700"
                                                   htmlFor="address">
                                                Address
                                            </label>
                                            <input type="text" id="address" required value={profile.fields.address}
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
                <div className={classnames(activeTabIndex === 1 ? "" : "hidden", '', 'flex flex-wrap')}>
                    <div className={'sm:w-1/4 sm:border-r-2 border-stone-700 sm:pl-0 pl-16'}>
                        <div className={'flex justify-content-center mt-4 '}>
                            <img
                                className={'rounded-full object-contain h-36 w-36 align-items-center border-2 border-blue-900'}
                                src={'/static/image/img_14.png'}/>
                        </div>

                        <h2 className={'text-center pt-8'}>Michael Andreuzza</h2>
                        <div
                            className={'justify-content-center border-2 border-gray-100 rounded-lg align-items-center  p-4 m-4'}>
                            <p className={'pl-4 text-sm'}><span className={'text-blue-900'}>Change Password</span><br/>Manage
                                your password</p>
                        </div>
                    </div>
                    <div className={'sm:w-3/4  px-4'}>
                        <form className="pt-6 pb-8 mb-4 bg-white rounded">
                            <div className="mb-1 md:flex">
                                <div className="mb-4  w-full">
                                    <label className="block mb-2 text-sm font-semibold text-gray-700"
                                           htmlFor="firstName">
                                        Old Password
                                    </label>
                                    <input type="password" id="firstName" placeholder={'Enter Your Old Password'}
                                           required
                                           className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                    focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                    px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                </div>

                            </div>
                            <div className="w-full mb-4">
                                <label className="block mb-2 text-sm font-semibold text-gray-700"
                                       htmlFor="lastName">
                                    New Password
                                </label>
                                <input type="password" id="lastName" placeholder={'Enter Your New Password'}
                                       className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                    focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                    px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                            <div className="w-full">
                                <label className="block mb-2 text-sm font-semibold text-gray-700"
                                       htmlFor="lastName">
                                    Confarm Password
                                </label>
                                <input type="password" id="lastName" placeholder={'Enter Your New Password'}
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
                <div className={classnames(activeTabIndex === 2 ? "" : "hidden", '')}>order</div>
                <div className={classnames(activeTabIndex === 3 ? "" : "hidden", '')}>review</div>

            </section>

        </div>


    );
};

export default Index;