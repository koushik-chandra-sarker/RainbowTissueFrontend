import {GOOGLEMAPAPI_ERROR,GOOGLEMAPAPI_LOADING,GOOGLEMAPAPI_SUCCESS} from "./GoogleMapApiType";
import axios from "axios";
import {base_url} from "../../constants";

export const getGoogleMapApi = ()=> async dispatch =>{
    try {
        dispatch({
            type:GOOGLEMAPAPI_LOADING
        })
        const response =  await axios.get(`${base_url}/googlemapapikey`)
        dispatch({
            type:GOOGLEMAPAPI_SUCCESS,
            payload:response.data
        })
    }catch (e) {
        dispatch({
            type:GOOGLEMAPAPI_ERROR
        })
    }
}