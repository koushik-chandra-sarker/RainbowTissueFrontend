import {JOB_ERROR, JOB_LOADING, JOB_SUCCESS, JOBSINGLE_ERROR, JOBSINGLE_LOADING, JOBSINGLE_SUCCESS} from "./JobType";
import axios from "axios";
import {site_base_url} from "../../constants";

export const getJobList = ()=> async dispatch =>{
    try {
        dispatch({
            type:JOB_LOADING
        })
        const response =  await axios.get(`${site_base_url}/job/`)
        dispatch({
            type:JOB_SUCCESS,
            payload:response.data
        })
    }catch (e) {
        dispatch({
            type:JOB_ERROR
        })
    }
}

export const getJob = (id)=> async dispatch =>{
    try {
        dispatch({
            type:JOBSINGLE_LOADING
        })
        const response =  await axios.get(`${site_base_url}/job/${id}/`)
        dispatch({
            type:JOBSINGLE_SUCCESS,
            payload:response.data
        })
    }catch (e) {
        dispatch({
            type:JOBSINGLE_ERROR
        })
    }
}