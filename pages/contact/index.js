import React, {useState} from 'react';
import classnames from 'classnames'
import {useSelector} from "react-redux";
import Skeleton from "@mui/material/Skeleton";
import _ from "lodash";
import {toast} from "react-toastify";
import {sendMail} from "../../services/mail/MailAction";
import {CircularProgress} from "@mui/material";
import Head from "next/head";

const Contact = () => {
    const website = useSelector(state => state.website);
    const [mail, setMail] = useState({
        name: "", email: "", message: "",
    });

    const [loading, setLoading] = useState(false);

    function handleSendEmail(e) {
        e.preventDefault()
        setLoading(true)
        const mail = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        }
        sendMail(mail).then(r => {
            setLoading(false)
            if (r.status === 200) {
                toast.success(r.data.message, {theme: "colored"});
                setMail({...mail, name: "", email: "", message: "",})
            } else {
                toast.error("Something went wrong!", {theme: "colored"});
            }
        }).catch(reason => {
                setLoading(false)
                toast("Something went wrong!" + reason)
            }
        )
    }

    return (
        <>
            <Head>
                <title>
                    Rainbow | Contact
                </title>
                <meta
                    name="description"
                    content="Contact us for any query. We are always ready to help you."
                    key="desc"
                />

            </Head>

            {website.loading ?
                <>
                    <Skeleton variant="rectangular" height={600} animation="wave"/>
                    <div className="container  1/12 sm:w-3/4 mx-auto md:px-0 px-8 my-12 mx-auto text-center">
                        <div className={'flex justify-center'}>
                            <Skeleton variant="rectangular" width={300} height={50} animation="wave"/>
                        </div>
                        <br/>
                        <div className="flex flex-wrap -m-4">
                            <div className="p-4 md:w-1/3">
                                <Skeleton variant="rectangular" height={200} animation="wave"/>
                            </div>
                            <div className="p-4 md:w-1/3">
                                <Skeleton variant="rectangular" height={200} animation="wave"/>
                            </div>
                            <div className="p-4 md:w-1/3">
                                <Skeleton variant="rectangular" height={200} animation="wave"/>
                            </div>

                        </div>
                    </div>
                </>
                :
                !_.isEmpty(website.data) ?
                    <>
                        <section className="text-gray-600 body-font relative">
                            <div className={classnames("contact_map lg:absolute inset-0 bg-primary bg-opacity-20")}>
                                <iframe width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0"
                                        title="map"
                                        scrolling="no"
                                    // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.5410265202772!2d90.4217473153853!3d23.79935299282049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c760a96fcb05%3A0x5dd5c60221aedf5c!2sRainbow%20Tissue%20Paper%20Corporate%20Office!5e0!3m2!1sen!2sbd!4v1631774435189!5m2!1sen!2sbd"
                                        src={website.data[0].contactPageMap}
                                />
                            </div>
                            <div className="container px-5 py-12 mx-auto flex">
                                <form onSubmit={handleSendEmail}
                                      className="xl:w-1/3 lg:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Leave Your
                                        Query</h2>
                                    <p className="leading-relaxed mb-5 text-gray-600">We will contact with you.</p>
                                    <div className="relative mb-4">
                                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                        <input type="text" id="name" name="name" required value={mail.name}
                                               onChange={(e) => setMail({...mail, name: e.target.value})}
                                               className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                    </div>
                                    <div className="relative mb-4">
                                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                        <input type="email" id="email" name="email" value={mail.email} required
                                               onChange={(e) => setMail({...mail, email: e.target.value})}
                                               className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                    </div>
                                    <div className="relative mb-4">
                                        <label htmlFor="message"
                                               className="leading-7 text-sm text-gray-600">Message</label>
                                        <textarea id="message" name="message" value={mail.message} required
                                                  onChange={(e) => setMail({...mail, message: e.target.value})}
                                                  className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary h-16 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"/>
                                    </div>
                                    <button type={"submit"}
                                            className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-opacity-80 rounded text-lg flex items-center justify-center">
                                        Submit
                                        {
                                            loading?
                                                <CircularProgress className={'ml-2'} color={"inherit"} size={20}/>:false
                                        }

                                    </button>
                                    <p className="text-xs text-gray-500 mt-3">A falsis, zeta alter liberi.</p>
                                </form>
                            </div>
                        </section>
                        <section className="text-gray-600 body-font">
                            <div className="container px-5 py-24 mx-auto">
                                <div className="flex flex-col text-center w-full mb-20">

                                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-primary">Our Office
                                        &
                                        Locations</h1>
                                </div>


                                <div className="flex flex-wrap -m-4">
                                    {
                                        !_.isEmpty(website.data[0].offices) ?
                                            website.data[0].offices.map((v, i) => (
                                                <div key={i} className="p-4 md:w-1/3">
                                                    <div className="flex rounded-lg h-full bg-primary p-8 flex-col">
                                                        <div className="flex items-center mb-3">
                                                            <span
                                                                className="material-icons text-white">location_on</span>
                                                            <h2 className="uppercase  text-lg title-font font-medium text-white">
                                                                {v.title}
                                                            </h2>
                                                        </div>
                                                        <div className="flex-grow text-white leading-7">
                                                            {v.address} <br/>
                                                            {v.phone} <br/>
                                                            {v.email}
                                                        </div>

                                                    </div>
                                                </div>
                                            ))
                                            : <></>
                                    }

                                </div>
                            </div>
                        </section>
                    </>
                    :

                    <>
                    </>

            }

        </>
    );
};

export default Contact;