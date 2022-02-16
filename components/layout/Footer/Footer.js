import React from 'react';
import Link from 'next/link';
import {useSelector} from "react-redux";
import _ from "lodash";

const Footer = () => {
    const website = useSelector(state => state.website);
    console.log(website);
    return (
        <footer>
            <svg id="wave" style={{transform: 'rotate(0deg)', transition: '0.3s'}} viewBox="0 0 1440 110"
                 version="1.1"
                 xmlns="http://www.w3.org/2000/svg">
                <path style={{transform: "translate(0, 0px)", opacity: "1"}} fill="#1993e7"
                      d="M0,84L80,91C160,98,320,112,480,100.3C640,89,800,51,960,32.7C1120,14,1280,14,1440,23.3C1600,33,1760,51,1920,65.3C2080,79,2240,89,2400,91C2560,93,2720,89,2880,91C3040,93,3200,103,3360,93.3C3520,84,3680,56,3840,58.3C4000,61,4160,93,4320,95.7C4480,98,4640,70,4800,63C4960,56,5120,70,5280,72.3C5440,75,5600,65,5760,51.3C5920,37,6080,19,6240,14C6400,9,6560,19,6720,37.3C6880,56,7040,84,7200,86.3C7360,89,7520,65,7680,51.3C7840,37,8000,33,8160,39.7C8320,47,8480,65,8640,63C8800,61,8960,37,9120,28C9280,19,9440,23,9600,37.3C9760,51,9920,75,10080,86.3C10240,98,10400,98,10560,84C10720,70,10880,42,11040,28C11200,14,11360,14,11440,14L11520,14L11520,140L11440,140C11360,140,11200,140,11040,140C10880,140,10720,140,10560,140C10400,140,10240,140,10080,140C9920,140,9760,140,9600,140C9440,140,9280,140,9120,140C8960,140,8800,140,8640,140C8480,140,8320,140,8160,140C8000,140,7840,140,7680,140C7520,140,7360,140,7200,140C7040,140,6880,140,6720,140C6560,140,6400,140,6240,140C6080,140,5920,140,5760,140C5600,140,5440,140,5280,140C5120,140,4960,140,4800,140C4640,140,4480,140,4320,140C4160,140,4000,140,3840,140C3680,140,3520,140,3360,140C3200,140,3040,140,2880,140C2720,140,2560,140,2400,140C2240,140,2080,140,1920,140C1760,140,1600,140,1440,140C1280,140,1120,140,960,140C800,140,640,140,480,140C320,140,160,140,80,140L0,140Z"/>
            </svg>
            <div className={'bg-primary'}>
                <div className="w-11/12 sm:w-3/4 py-12 mx-auto">
                    <div className={'flex flex-wrap  md:text-left text-center'}>
                        <div className={'lg:w-1/3 md:w-1/2 w-full md:text-center mb-4'}>

                            <h3 className={'text-white text-xl text-center md:text-left font-bold uppercase'}>Contact</h3>
                            <p className={'mt-2 text-white text-center md:text-left leading-10 '}>
                                {!_.isEmpty(website.data) ? website.data[0].footerAddress : ""}

                                <br/>
                                {!_.isEmpty(website.data) ? website.data[0].footerPhone : ""}
                                <br/>
                                {!_.isEmpty(website.data) ? website.data[0].footerEmail : ""}
                                {!_.isEmpty(website.data) ?
                                    <p className={'mt-3 text-white leading-7'}>
                                        <i className="fab fa-whatsapp text-white mr-2"/>
                                        {website.data[0].whatsapp}
                                    </p> : <></>
                                }
                            </p>
                        </div>
                        <div className={'lg:w-1/3  md:w-1/2 mb-4 w-full flex flex-col items-center'}>
                            <div className={'w-max'}>
                                <h3 className={'text-white  text-xl font-bold uppercase'}>Quick Link</h3>
                                <ul className={'mt-2'}>
                                    <li className={'border-b border-black border-opacity-20 text-white pr-4 py-2'}>
                                        <Link href={"/"}><a>Home</a></Link>
                                    </li>
                                    <li className={'border-b border-black border-opacity-20 text-white pr-4 py-2'}>
                                        <Link href={"/about"}><a>About</a></Link>
                                    </li>
                                    <li className={'border-b border-black border-opacity-20 text-white pr-4 py-2'}>
                                        <Link href={"/career"}><a>Career</a></Link>
                                    </li>
                                    <li className={'border-b border-black border-opacity-20 text-white pr-4 py-2'}>
                                        <Link href={"/contact"}><a>Contact</a></Link>
                                    </li>
                                </ul>
                            </div>


                        </div>
                        <div className={'lg:w-1/3  w-full  '}>
                            <a className="flex flex-col justify-center lg:flex-row  title-font font-medium items-center md:justify-start justify-center text-gray-900 cursor-pointer">
                                <img className={'h-16'} src="static/image/rain-logo.png" alt="#"/>
                                <h3 className={'text-center text-sm lg:text-lg text-white italic'}>
                                    Rainbow Group of Industries
                                </h3>

                            </a>
                            <p className={'mt-3 text-center text-white leading-7'}>
                                {!_.isEmpty(website.data) ? website.data[0].footerText : ""}
                            </p>


                        </div>

                    </div>
                </div>

                <div className={'w-11/12 sm:w-3/4 mx-auto border-t border-black border-opacity-20'}>
                    <div className="py-4 flex flex-wrap items-center sm:flex-row flex-col">
                        <div
                            className={'md:w-1/2 w-full flex flex-wrap items-center justify-center sm:justify-start mt-4 '}>
                            <a className="flex title-font font-medium items-center justify-center sm:justify-start text-gray-900 cursor-pointer">
                                <img className={'h-16'} src="static/image/rainbow_group_logo-1.png" alt="#"/>
                                <span className="ml-3 text-sm text-white"> <i
                                    className="far fa-copyright"/> 2021 </span>
                            </a>
                            <a href="#" className={'ml-1 text-gray-200'}> <span className={'sm:hidden'}>|</span> Develop
                                by
                                Waysis-IT Solution</a>
                        </div>

                        <span className="inline-flex  sm:ml-auto   mt-4 items-center justify-center sm:justify-start">
                        <a href={!_.isEmpty(website.data) ? website.data[0].facebook : ""} target={"_blank"} rel={'noreferrer'}
                           className=" h-8 w-8 border rounded-full flex justify-center items-center  cursor-pointer">
                            <i className="fab fa-facebook-f text-white"/>
                        </a>
                        <a href={!_.isEmpty(website.data) ? website.data[0].instagram : ""} target={"_blank"} rel={'noreferrer'}
                           className="ml-3 h-8 w-8 border rounded-full flex justify-center items-center cursor-pointer">
                            <i className="fab fa-instagram text-white"/>
                        </a>
                        <a href={!_.isEmpty(website.data) ? website.data[0].twitter : ""} target={'_blank'} rel={'noreferrer'}
                           className="ml-3 h-8 w-8 border rounded-full flex justify-center items-center cursor-pointer ">
                            <i className="fab fa-twitter text-white"/>
                        </a>
                        <a href={!_.isEmpty(website.data) ? website.data[0].linkedin : ""} target={"_blank"} rel={'noreferrer'}
                           className="ml-3 h-8 w-8 border rounded-full flex justify-center items-center cursor-pointer">
                            <i className="fab fa-linkedin-in text-white"/>
                        </a>
                    </span>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;