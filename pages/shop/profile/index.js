import React from 'react';
import Link from "next/link";


const Index = () => {

    return (
        <div>
            <section className={'sm:w-7/12 mx-auto  border-2'}>
                <div className={'border-2 border-slate-300'}>
                    <div className="flex border-2 border-slate-300 mb-4 text-center align-items-center">

                            <div className="w-1/4 bg-gray-500 h-12 pt-2">Profile</div>
                            <div className="w-1/4 bg-gray-400 h-12 pt-2">Billing</div>
                            <div className="w-1/4 bg-gray-500 h-12 pt-2">Settings</div>
                            <div className="w-1/4 bg-gray-400 h-12 pt-2">Notifications</div>
                            <div className="w-1/4 bg-gray-400 h-12 pt-2">Password</div>
                            <div className="w-1/4 bg-gray-400 h-12 pt-2">Sessions</div>
                            <div className="w-1/4 bg-gray-400 h-12 pt-2">Applications</div>
                            <div className="w-1/4 bg-gray-400 h-12 pt-2">Calender</div>


                    </div>
                </div>
                <div className={'flex flex-wrap'}>
                    <div className={'sm:w-1/4 border-2 border-stone-700 '}>
                        <div className={'flex justify-content-center mt-4'}>
                            <img className={'rounded-full h-32 w-32 align-items-center object-fit-content'} src={'/static/image/profile.jpg'}/>
                        </div>

                        <h2 className={'text-center pt-4'}>Michael Andreuzza</h2>
                    </div>
                    <div className={'sm:w-3/4  px-4'}>
                        <div className={'flex flex-wrap'}>
                        {/*    <div lassName={'sm:w-2/7 bg-blue-900'}>*/}
                        {/*        <h2>Bishajit </h2>*/}
                        {/*    </div>*/}
                        {/*    <div className={'sm:w-5/7 bg-blue-600'}>*/}
                        {/*        <h2>Bishajit </h2>*/}
                        {/*    </div>*/}
                        </div>
                        <div className="w-full flex">
                            {/* Col */}
                            <div className="w-full bg-white rounded-lg lg:rounded-l-none">
                                <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
                                <form className="pt-6 pb-8 mb-4 bg-white rounded" >
                                    <div className="mb-1 md:flex">
                                        <div className="mb-4 md:mr-2 md:mb-0 md:w-1/2 w-full">
                                            <label className="block mb-2 text-sm font-bold text-gray-700"
                                                   htmlFor="firstName">
                                                First Name
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
                                                   htmlFor="phone">
                                                Phone
                                            </label>
                                            <input type="number" id="phone" placeholder={'Ex: 01700000000'} required
                                                   className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                    focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                    px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                        </div>
                                        <div className="md:ml-2 md:w-1/2 w-full">
                                            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                                                Email
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
                                                   htmlFor="city">
                                                City
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
                                                Address
                                            </label>
                                            <input type="text" id="address" required
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
                                    <hr className="mb-6 border-t"/>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </div>







    );
};

export default Index;