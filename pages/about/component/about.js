import React from 'react';
import {useSelector} from 'react-redux'
import Skeleton from '@mui/material/Skeleton';
import _ from 'lodash';

const About = () => {
    const website = useSelector(state => state.website);
    return (
        <div>
            {website.loading ?
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
                                <section className="w-full bg-center bg-cover h-64 md:h-128 relative"
                                         style={{backgroundImage: `url(${!_.isEmpty(website.data[0].aboutCoverPhoto)?website.data[0].aboutCoverPhoto:"/static/image/about.jpg"})`}}>
                                    <div
                                        className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                                        <div className="text-center">
                                            <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">About <span
                                                className="text-primary underline">Rainbow Tissue</span></h1>

                                        </div>
                                    </div>
                                    <div className={'absolute w-full h-max -bottom-0 md:-bottom-1'}>
                                        <img src="static/image/wave.svg" alt=""/>
                                    </div>
                                </section>


                                <section className={'w-11/12 sm:w-3/4 mt-20 mx-auto text-justify'}>
                                    <div className={'text-primary'}
                                         dangerouslySetInnerHTML={{__html: website.data[0].aboutContent}}/>
                                    {
                                        !_.isEmpty(website.data[0].about_video) ?
                                            <video className={"my-20 w-full"} autoPlay controls muted loop width="800"
                                                   height="600"
                                                   preload="auto">
                                                <source src={website.data[0].about_video}
                                                        type="video/mp4"/>
                                            </video> : <></>
                                    }
                                </section>

                            </>

                            :
                            <></>
                    }

                </>
            }
        </div>
    );
};

export default About;