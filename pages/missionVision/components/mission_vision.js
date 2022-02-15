import React from 'react';
import {useSelector} from 'react-redux'
import Skeleton from '@mui/material/Skeleton';
import _ from 'lodash';

const MissionVision = () => {
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
                            <div>
                                {/*banner*/}
                                <section className="w-full bg-center bg-cover h-64 md:h-140 relative"
                                         style={{backgroundImage: "url(static/image/mission&vision1.jpg)"}}>
                                    <div
                                        className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                                        <div className="text-center hidden sm:block">
                                            <h1 className="text-2xl font-semibold text-white uppercase text-primary lg:text-3xl">
                                                Mission Vision & Value
                                            </h1>

                                        </div>
                                    </div>
                                    <div className={'absolute w-full h-max -bottom-0 md:-bottom-1'}>
                                        <img src="static/image/wave.svg" alt=""/>
                                    </div>
                                </section>
                                {/*banner end*/}
                                {/*Vision start*/}
                                <section className={'w-full flex flex-wrap  mt-20'}>
                                    <div
                                        className={' w-full sm:w-1/2 p-10 text-center flex flex-col justify-center items-center  text-primary'}>

                                        <span className="material-icons text-6xl lg:text-8xl"> {website.data[0].visionIcon} </span>
                                        <span className={'text-2xl lg:text-4xl flex justify-center items-center'}>
                                            <span className={'w-10 lg:w-2 h-1 bg-primary mr-3'}/>
                                                Vision
                                            <span className={'w-10 lg:w-2 h-1 bg-primary ml-3'}/>
                                        </span>
                                        <p>
                                            {website.data[0].vision}
                                        </p>

                                    </div>
                                    <div className={'w-full sm:w-1/2'}>
                                        {/*<img src="static/image/vission1.jpg" alt=""/>*/}
                                        <img src={website.data[0].visionImage} alt=""/>
                                    </div>
                                </section>
                                {/*Vision end*/}
                                {/* Mission start*/}
                                <section className={'w-full flex sm:flex-wrap flex-wrap-reverse  mb-20 '}>
                                    <div className={' w-full sm:w-1/2'}>
                                        {/*<img src="static/image/missssss.jpg" alt=""/>*/}
                                        <img src={website.data[0].missionImage} alt=""/>
                                    </div>
                                    <div
                                        className={' w-full sm:w-1/2 p-10 text-center flex flex-col justify-center items-center text-primary'}>
                                        <span className="material-icons text-6xl lg:text-8xl">{website.data[0].missionIcon} </span>
                                        <span className={'text-2xl lg:text-4xl flex justify-center items-center'}>
                                            <span className={'w-10 lg:w-2 h-1 bg-primary mr-3'}/>
                                            Mission
                                            <span className={'w-10 lg:w-2 h-1 bg-primary ml-3'}/>
                                        </span>
                                        <p>
                                            {website.data[0].mission}
                                        </p>
                                    </div>
                                </section>
                                {/* Mission end*/}
                                {/* Value section start*/}
                                <section>
                                    <div className="text-gray-600 body-font">
                                        <div className="w-11/12 sm:3/4 px-5 py-24 text-primary mx-auto">
                                            <div className="flex flex-col text-center text-primary w-full mb-20">
                                                <span className="material-icons text-8xl">visibility</span>
                                                <span className={'text-4xl flex justify-center items-center'}>
                                                    <span className={'w-40 h-1 bg-primary mr-3'}/>
                                                    Value
                                                    <span className={'w-40 h-1 bg-primary ml-3'}/>
                                                </span>
                                            </div>
                                            <div
                                                className="flex flex-wrap w-full lg:w-3/4 mx-auto -m-4 justify-center text-center">

                                                {
                                                    !_.isEmpty(website.data[0].values)?
                                                        website.data[0].values.map((v,i)=>(
                                                            <div key={i} className="p-4 md:w-1/3 xl:w-1/5 sm:w-1/2 w-full">
                                                                <div className="border-2 border-primary px-4 py-6 rounded-lg">
                                                                    <span className="material-icons">{v.icon}</span>
                                                                    <p className="leading-relaxed">{v.title}</p>
                                                                </div>
                                                            </div>
                                                        ))
                                                        :<></>
                                                }

                                            </div>
                                        </div>
                                    </div>

                                </section>
                                {/* Value section end*/}

                            </div>
                            :
                            <></>
                    }
                </>
            }

        </div>
    );
};

export default MissionVision;