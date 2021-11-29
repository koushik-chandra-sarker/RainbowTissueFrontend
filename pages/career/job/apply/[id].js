import React, {useEffect, useState} from 'react';

import {toast} from "react-toastify";
import _ from "lodash"
import {apply} from "../../../../services/jobApplication/JobApplicationAction";
import {useRouter} from "next/router";
const validateData = data => {
    const errors = {};
    errors.valid = true
    if (_.isEmpty(data.name)) {
        errors.name = 'Please Enter Name';
        errors.valid = false
    }

    if (_.isEmpty(data.email)) {
        errors.email = 'Please Enter Your Email';
        errors.valid = false
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
        errors.email = 'Invalid email address';
        errors.valid = false
    }
    if (_.isEmpty(data.phone)) {
        errors.phone = 'Please Enter Your Phone No';
        errors.valid = false
    }

    if (data.cv == null) {
        errors.cv = 'Please give your cv';
        errors.valid = false
    }
    else if (data.cv.type != "application/pdf"){
        errors.cv = 'Give your cv in pdf format';
        errors.valid = false
    }


    return errors;
};

const Application = () => {
    const router = useRouter();
    let id = router.query.id
    const [application, setApplication] = useState({
        job: null,
        name: "",
        email: "",
        phone: "",
        cv: null,
        coverLetter: "",

    })
    useEffect(() => {
        setApplication({...application, job: id})
    },[id])
    const [error, setError] = useState({})

    function handleSubmit(e) {

        const error = validateData(application)
        setError(error)
        if (error.valid){
            const formdata = new FormData();
            formdata.append("name", application.name)
            formdata.append("email", application.email)
            formdata.append("phone", application.phone)
            formdata.append("cv", application.cv)
            formdata.append("coverLetter", application.coverLetter)
            formdata.append("job", application.job)
            console.log(application)
            apply(formdata).then(r => {
                if (r.status === 201) {
                    toast("Message sent Successful");
                    setApplication({...application, name: "", email: "", phone: "", cv: "", coverLetter: "",})
                }
            }).catch(error =>{
            })
        }
        else toast.error("Please Give your valid Information")
    }

    return (
        <div>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Application</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Please give your information below</p>


                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-full sm:w-1/2">
                                <div className="relative">
                                    <label htmlFor="name"
                                           className="leading-7 text-sm text-gray-600">Name <span className={"text-xs text-red-500"}>{error.name}</span></label>
                                    <input
                                        onChange={e => {
                                            setApplication({...application, name: e.target.value})
                                        }}
                                        value={application.name}
                                        type="text" id="name" name="name"
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                </div>
                            </div>
                            <div className="p-2 w-full sm:w-1/2">
                                <div className="relative">
                                    <label htmlFor="email"
                                           className="leading-7 text-sm text-gray-600">Email <span className={"text-xs text-red-500"}>{error.email}</span></label>
                                    <input
                                        onChange={e => {
                                            setApplication({...application, email: e.target.value})
                                        }}
                                        value={application.email}
                                        type="email" id="email" name="email"
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                </div>
                            </div>
                            <div className="p-2 w-full sm:w-1/2">
                                <div className="relative">
                                    <label htmlFor="phone"
                                           className="leading-7 text-sm text-gray-600">Phone <span className={"text-xs text-red-500"}>{error.phone}</span></label>
                                    <input
                                        onChange={e => {
                                            setApplication({...application, phone: e.target.value})
                                        }}
                                        value={application.phone}
                                        type="text" id="phone" name="phone"
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                </div>
                            </div>

                            <div className="p-2 w-full sm:w-1/2">
                                <div className="relative">
                                    <label htmlFor="cv" className="leading-7 text-sm text-gray-600">CV
                                        <span> (File must be .pdf) </span> </label>
                                    <label htmlFor="cv"><span className={"text-xs text-red-500"}>{error.cv}</span></label>
                                    <input
                                        onChange={e => {
                                            setApplication({...application, cv: e.target.files[0]})
                                        }}
                                        // value={application.cv}
                                        type="file" id="cv" name="cv"
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  pr-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                </div>
                            </div>


                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="message"
                                           className="leading-7 text-sm text-gray-600">Cover Letter</label>
                                    <textarea
                                        onChange={e => {
                                            setApplication({...application, coverLetter: e.target.value})
                                        }}
                                        value={application.coverLetter}
                                        id="message" name="message"
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                        defaultValue={""}/>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button
                                    onClick={handleSubmit}
                                    className="w-full sm:w-3/6 mt-5 flex justify-center mx-auto text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Application;