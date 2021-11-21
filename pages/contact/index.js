import React from 'react';
import classnames from 'classnames'

const Contact = () => {
    return (
        <>
            <section className="text-gray-600 body-font relative">
                <div className={classnames("contact_map absolute inset-0 bg-primary bg-opacity-20")}>
                    <iframe width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="map"
                            scrolling="no"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.5410265202772!2d90.4217473153853!3d23.79935299282049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c760a96fcb05%3A0x5dd5c60221aedf5c!2sRainbow%20Tissue%20Paper%20Corporate%20Office!5e0!3m2!1sen!2sbd!4v1631774435189!5m2!1sen!2sbd"
                    />
                </div>
                <div className="container px-5 py-12 mx-auto flex">
                    <div
                        className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Leave Your Query</h2>
                        <p className="leading-relaxed mb-5 text-gray-600">We will contact with you.</p>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" name="name"
                                   className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email"
                                   className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message"
                                      className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary h-16 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <button
                            className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-opacity-80 rounded text-lg">Button
                        </button>
                        <p className="text-xs text-gray-500 mt-3">A falsis, zeta alter liberi.</p>
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">

                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-primary">Our Office&apos
                            Locations</h1>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-primary p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <span className="material-icons text-white">location_on</span>
                                    <h2 className="uppercase  text-lg title-font font-medium text-white">Main
                                        Office</h2>
                                </div>
                                <div className="flex-grow text-white leading-7">
                                    House: 6, Road: 3 Baridhara J Block, Dhaka 1212 <br/>
                                    09602666735-8,01987707707, 01987707706 <br/>
                                    info@rainbowtissuepaper.com
                                </div>

                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-primary p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <span className="material-icons text-white">location_on</span>
                                    <h2 className="uppercase  text-lg title-font font-medium text-white">Corporate
                                        office</h2>
                                </div>
                                 <div className="flex-grow text-white leading-7">
                                    House: 6, Road: 3 Baridhara J Block, Dhaka 1212 <br/>
                                    09602666735-8,01987707707, 01987707706 <br/>
                                    info@rainbowtissuepaper.com
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-primary p-8 flex-col">
                                <div className="flex items-center mb-3 ">
                                    <span className="material-icons text-white">location_on</span>
                                    <h2 className="uppercase text-lg title-font font-medium text-white">Other
                                        Office</h2>
                                </div>
                                 <div className="flex-grow text-white leading-7">
                                    House: 6, Road: 3 Baridhara J Block, Dhaka 1212 <br/>
                                    09602666735-8,01987707707, 01987707706 <br/>
                                    info@rainbowtissuepaper.com
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;