import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getJob} from "../../../services/job/JobAction";
import Skeleton from "@mui/material/Skeleton";
import {useRouter} from "next/router";
import classnames from 'classnames';
import styles from './Job.module.scss'
import _ from "lodash"
import Link from "next/link";
const JobDescription = () => {
    const router = useRouter();
    let id = router.query.id
    const dispatch = useDispatch()
    const job = useSelector(s => s.jobSingle)
    useEffect(() => {
        dispatch(getJob(id))
    }, [id])
    return (
        <div>


            <div className="my-11 w-full style_init">
                <div
                    className="w-full sm:w-3/4 p-20 leading-8  border-white-400 pt-10 mx-auto bg-gray-50  md:grid-cols-2 lg:grid-cols-3">

                    {
                        job.loading ?
                            <>
                                <Skeleton key={1} variant={"rect"} height={200} width="100%"/>
                                <br/>
                                <Skeleton key={2} variant={"rect"} height={600} width="100%"/>
                            </>

                            :
                            !_.isEmpty(job.data) ?
                                <>
                                    <div className={"pb-8 border-b-4 pr-14"}>
                                        <span className={"w-full font-bold text-4xl"}> {job.data.title }</span><br/>
                                        <h4 className={"w-full text-x font-semibold"}> {job.data.company_name}</h4>
                                        <div className="text-left  text-left flex flex-wrap justify-between -m-2 ">
                                            <p className=" p-2 "><span className={'font-semibold'}>Job Type: </span>
                                                {job.data.type}
                                            </p>
                                            <p className=" p-2 "><span
                                                className={'font-semibold'}>Department: </span>
                                                {job.data.department}
                                            </p>
                                            <p className=" p-2"><span
                                                className={'font-semibold'}>Deadline:  </span>  {job.data.deadline}</p>
                                        </div>
                                        <div className="text-left  -m-2 ">
                                            <p className=" p-2 "><span
                                                className={'font-semibold'}>Address: </span>
                                                {
                                                    !_.isNull(job.data.location)?
                                                        job.data.location.address:''
                                                }

                                            </p>

                                        </div>
                                    </div>

                                    <div className={classnames(styles.style_init, "pr-14")}>
                                        <div className={"mt-14"} dangerouslySetInnerHTML={{__html: job.data.description}}/>
                                    </div>
                                    <div className="p-2 ">
                                        <Link href={`/career/job/apply/${job.data.id}`}>
                                            <button
                                                className=" mt-5 flex justify-left  text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                                Apply Now
                                            </button>
                                        </Link>

                                    </div>
                                </>
                                :
                                <section className="text-gray-600 body-font">
                                    <div className="container px-5 py-24 mx-auto">
                                        <div className=" text-center w-full mb-12">
                                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"> Data Not Found</h1>
                                        </div>
                                    </div>
                                </section>
                    }


                </div>

            </div>
        </div>
    );
};

export default JobDescription;