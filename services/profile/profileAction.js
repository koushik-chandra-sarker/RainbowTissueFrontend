import axios from "axios";
import {base_static_url, site_base_url} from "../../constants";
import {
    PROFILE_ERROR,
    PROFILE_LOADING,
    PROFILE_SUCCESS,
} from "./profileType";


export const createProfile = (profile) => {
    return axios.post(`${base_static_url}/account/api/profile/`, profile,
        {
            headers: {
                "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
            }
        }).then(value => {
        return value
    }).catch(reason => {
        return reason
    })
}
export const updateProfile = (profile, id) => {
    const token = localStorage.getItem("accessToken")
    return axios.put(`${base_static_url}/account/api/profile/${id}/`, profile,
        {
            headers: {
                "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
                'Authorization': `Bearer ${token}`
            }
        }).then(value => {
        return value
    }).catch(reason => {
        return reason
    })
}


export const getProfile = (id)=> async dispatch =>{
    const token = localStorage.getItem("accessToken")
    try {
        dispatch({
            type:PROFILE_LOADING
        })
        const response =  await axios.get(`${base_static_url}/account/api/profile/${id}/`,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        dispatch({
            type:PROFILE_SUCCESS,
            payload:response.data
        })
    }catch (e) {
        dispatch({
            type:PROFILE_ERROR
        })
    }
}