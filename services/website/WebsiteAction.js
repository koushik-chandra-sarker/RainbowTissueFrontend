import {WEBSITE_ERROR,WEBSITE_LOADING,WEBSITE_SUCCESS} from "./WebsiteType";
import axios from "axios";
import {site_base_url} from '../../constants';

export const getWebsiteDetails = ()=> async dispatch =>{
    try {
        dispatch({
            type:WEBSITE_LOADING
        })
        const response = await axios.get(`${site_base_url}/site`)
        // const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        dispatch({
            type:WEBSITE_SUCCESS,
            payload:response.data
        })
    }catch (e) {
        dispatch({
            type:WEBSITE_ERROR
        })
    }
}