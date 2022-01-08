
import {RATING_LOADING, RATING_SUCCESS, RATING_ERROR} from "./RatingType";

import axios from "axios";
import {store_base_url} from "../../../constants";
import _ from "lodash";

export const getReview= (id) => async dispatch => {
    try {
        await dispatch({
            type: RATING_LOADING,
            payload: []
        })
        const response = await axios.get(`${store_base_url}/review/?productId=${id}`)
        await dispatch({
            type: RATING_SUCCESS,
            payload: response.data
        })
    } catch (e) {
        dispatch({
            type: RATING_ERROR
        })
    }
}

export function getRatingsObject(data){
    let response= {}
    if (!_.isEmpty(data)){
        response.avagareRatings =  data.reduce((v1,v2)=>{
            return v1 + (v2.rating/data.length);
        },0)
        response.one = data.filter(v=>v.rating===1).length
        response.two = data.filter(v=>v.rating===2).length
        response.three = data.filter(v=>v.rating===3).length
        response.four = data.filter(v=>v.rating===4).length
        response.five = data.filter(v=>v.rating===5).length
        response.total = data.length
    }
    return response
}