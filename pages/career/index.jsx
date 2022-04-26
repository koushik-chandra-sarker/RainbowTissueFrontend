import React, {useEffect} from 'react';
import {Splide, SplideSlide} from "splide-nextjs/react-splide";
import 'splide-nextjs/splide/dist/css/themes/splide-skyblue.min.css';
import Skeleton from "@mui/material/Skeleton";
import {useDispatch, useSelector} from "react-redux";
import _ from "lodash";
import {getJobList} from "../../services/job/JobAction";
import Link from "next/link";
import CareerCard from "./components/careerCard";
const Career = () => {
    const website = useSelector(state => state.website);
    const job = useSelector(s => s.job)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getJobList());
    },[dispatch])
    return (
        <>
            {
                website.loading ?
                    <>
                        <Skeleton variant="rectangular" height={600} animation="wave"/>
                        <div className="container  1/12 sm:w-3/4 mx-auto md:px-0 px-8 my-12 mx-auto text-center">
                            <div className={'flex justify-center'}>
                                <Skeleton variant="rectangular" width={200} height={50} animation="wave"/>
                            </div>

                            <br/>
                            <Skeleton/>
                            <Skeleton animation="wave"/>
                            <Skeleton animation={false}/>
                            <br/><br/>
                            <Skeleton variant="rectangular" height={100} animation="wave"/>
                            <br/> <br/>
                            <Skeleton variant="rectangular" height={600} animation="wave"/>
                        </div>
                    </>
                    :
                    <>
                        {
                            !_.isEmpty(website.data) ?
                                <>
                                    <section className="w-full bg-center bg-cover relative sm:h-128 h-72"
                                             style={{backgroundImage: "url(/static/image/careerBanner.jpeg"}}>
                                        <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                                            <div className="text-center">
                                                <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">Build Your
                                                    new <span
                                                        className="text-primary underline">Career</span></h1>
                                               {/* <button
                                                    className="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-primary rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Start
                                                    Search Job
                                                </button>*/}
                                            </div>
                                        </div>
                                        <div className={'absolute w-full h-max sm:-bottom-1 -bottom-0'}>
                                            <img src="/static/image/wave.svg" alt=""/>
                                        </div>

                                    </section>
                                    {/*------------------------------------------------------*/}
                                    <section className="flex flex-col text-center w-full mt-12 mb-20">

                                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-primary">
                                            {website.data[0].careerTitle1}
                                        </h1>
                                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-description">
                                            {website.data[0].careerSubTitle1}
                                        </p>
                                    </section>
                                    {/*------------------------------------------------------*/}
                                    {
                                        !_.isEmpty(website.data[0].careerSliders)?

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
                                                    {website.data[0].careerSliders.map(slide => (
                                                        <SplideSlide key={slide.src}>
                                                            <img src={slide.image} alt={"career_slider_image"}/>
                                                        </SplideSlide>
                                                    ))}
                                                </Splide>
                                            </section>
                                             :<></>
                                    }

                                    {/*------------------------------------------------------*/}
                                    <section className="flex flex-col text-center w-full mb-20 mt-20">

                                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-primary">
                                            {website.data[0].careerTitle2}
                                        </h1>
                                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-description">
                                            {website.data[0].careerSubTitle2}
                                        </p>
                                    </section>
                                    <div className="my-11 w-full  ">
                                        <div className="w-11/12 sm:w-3/4 mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                    {
                                        job.loading ?
                                            [1, 2, 3].map((v, i) => (
                                                <div key={i} className="flex-1">
                                                    <Skeleton key={i} variant={"rect"} height={150} width="100%"/>
                                                </div>
                                            )) :
                                            job.data.map((v, i) => (
                                                <Link key={i} href={`/career/job/${v.id}`} className={'no-underline'}>
                                                    <a  className="flex-1 no-underline">
                                                        <CareerCard title={v.title} location={v.location}/>
                                                    </a>
                                                </Link>
                                            ))

                                    }
                                        </div>
                                    </div>
                                </>
                                :
                                <></>
                        }
                    </>
            }




            {/*---------------------------------------------------------*/}
         {/*   <section className="text-blueGray-700 ">
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
                                <p className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 ">You&apos
                                    are
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
                                    We have Squares in dozens of locations around the world, including 15
                                    offices from
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
                                    Roles are available for interns and new graduates. Many recent grads launch
                                    their
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
                                    Enjoy competitive compensation, outstanding benefits, and a supportive
                                    culture for
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
*/}

        </>
    );
};

export default Career;


