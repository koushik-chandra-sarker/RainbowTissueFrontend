import React from 'react';
import {Splide, SplideSlide} from "splide-nextjs/react-splide";
import 'splide-nextjs/splide/dist/css/themes/splide-skyblue.min.css';

const sliderImage = [
    {
        img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
        img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
        img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
        img: 'https://images.unsplash.com/photo-1598257006626-48b0c252070d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },

]

const Career = () => {
    return (
        <>
            <section className="w-full bg-center bg-cover relative h-128"
                     style={{backgroundImage: "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}}>
                <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">Build Your new <span
                            className="text-primary underline">Career</span></h1>
                        <button
                            className="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-primary rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Start
                            Search Job
                        </button>
                    </div>
                </div>
                <div className={'absolute w-full h-max -bottom-1'}>
                    <img src="static/image/wave.svg" alt=""/>
                </div>

            </section>
            {/*------------------------------------------------------*/}
            <section className="flex flex-col text-center w-full mt-12 mb-20">

                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-primary">
                    Reimagining commerce for all.
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-description">
                    We’re working to find new and better ways to help businesses succeed, and we’re looking for people
                    like you to help shape tomorrow at Square.
                </p>
            </section>
            {/*------------------------------------------------------*/}
            <section className={'w-full mx-auto'}>
                <Splide
                    className={'w-full'}
                    options={{
                        type: 'loop',
                        autoplay: true,
                        rewind: true,
                        width: '150rem',
                        height: "30rem",
                        gap: '0.50rem',
                        // pagination: false,
                        cover: true,
                        perPage: 1,
                        perMove: 1,
                        padding: {
                            right: '15rem',
                            left: '15rem',
                        },
                        breakpoints: {
                            556: {
                                height: "15rem",
                                padding: {
                                    right: '5rem',
                                    left: '5rem',
                                },
                            }
                        },
                    }}

                    // hasSliderWrapper
                >
                    {/*{createSlides().map(slide => (*/}
                    {/*    <SplideSlide key={slide.src}>*/}
                    {/*        <img src={slide.src} alt={slide.alt}/>*/}
                    {/*    </SplideSlide>*/}
                    {/*))}*/}
                    {sliderImage.map(slide => (
                        <SplideSlide key={slide.src}>
                            <img src={slide.img} alt={slide.alt}/>
                        </SplideSlide>
                    ))}
                </Splide>
            </section>
            {/*------------------------------------------------------*/}
            <section className="flex flex-col text-center w-full mb-20 mt-20">

                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-primary">
                    Helping local businesses worldwide.
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-description">
                    We started with a little white card reader but haven’t stopped there. Our purpose is economic
                    empowerment, and we’re building tools to help sellers of all sizes succeed on their own terms. Read,
                    watch, and listen to our seller stories in Black Owned, For Every Dream, and Talking Squarely.
                </p>
            </section>
            {/*---------------------------------------------------------*/}
            <section className="text-blueGray-700 ">
                <div className="container items-center px-5 py-8 mx-auto lg:px-24">
                    <div className="flex flex-wrap mb-12 text-left">
                        <div className="w-full mx-auto lg:w-1/3">
                            <div className="p-6 text-center text-primary">
                                <div
                                    className="inline-flex items-center justify-center flex-shrink-0 w-40 h-40 mx-auto mb-5 text-black bg-blueGray-100 rounded-full">
                                    <img src="static/image/interview.png" alt=""/>
                                </div>
                                <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter lg:text-3xl title-font">
                                    Interviewing at Rainbow </h1>
                                <p className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 ">You&apos are
                                    We structure our interviews to be a reflection of our core values. </p>
                                <a className={'mt-2 font-bold hover:opacity-70 flex items-center justify-center'}
                                   href="#">
                                    Our interview process
                                    <span className="material-icons">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                        <div className="w-full mx-auto lg:w-1/3">
                            <div className="p-6 text-center text-primary">
                                <div
                                    className="inline-flex items-center justify-center flex-shrink-0 w-40 h-40 mx-auto mb-5 text-black bg-blueGray-100 rounded-full">
                                    <img src="static/image/globe.png" alt=""/>
                                </div>
                                <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter lg:text-3xl title-font">
                                    Offices across the globe
                                </h1>
                                <p className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 ">
                                    We have Squares in dozens of locations around the world, including 15 offices from
                                    London to Tokyo.
                                </p>
                                <a className={'mt-2 font-bold hover:opacity-70  flex items-center justify-center'}
                                   href="#">
                                    View Square office locations
                                    <span className="material-icons">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                        <div className="w-full mx-auto lg:w-1/3">
                            <div className="p-6 text-center text-primary">
                                <div
                                    className="inline-flex items-center justify-center flex-shrink-0 w-40 h-40 mx-auto mb-5 text-black bg-blueGray-100 rounded-full">
                                    <img src="static/image/university_icon.png" alt=""/>
                                </div>
                                <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter lg:text-3xl title-font">
                                    University opportunities
                                </h1>
                                <p className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 ">
                                    Roles are available for interns and new graduates. Many recent grads launch their
                                    careers at Square.
                                </p>
                                <a className={'mt-2 font-bold hover:opacity-70  flex items-center justify-center'}
                                   href="#">
                                    Our University programs
                                    <span className="material-icons">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                        <div className="w-full mx-auto lg:w-1/3">
                            <div className="p-6 text-center text-primary">
                                <div
                                    className="inline-flex items-center justify-center flex-shrink-0 w-40 h-40 mx-auto mb-5 text-black bg-blueGray-100 rounded-full">
                                    <img src="static/image/life_icon.png" alt=""/>
                                </div>
                                <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter  lg:text-3xl title-font">
                                    Life at Rainbow
                                </h1>
                                <p className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 ">
                                    Enjoy competitive compensation, outstanding benefits, and a supportive culture for
                                    you, in and out of the office.
                                </p>
                                <a className={'mt-2 font-bold hover:opacity-70 flex items-center justify-center'}
                                   href="#">
                                    More on our culture
                                    <span className="material-icons">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
        ;
};

export default Career;


