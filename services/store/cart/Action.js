import axios from "axios";
import {site_base_url, store_base_url} from "../../../constants";
import {CART_LIST_ERROR, CART_LIST_LOADING, CART_LIST_SUCCESS} from "./Type";


export const addCart = (cart) => {
    const token = localStorage.getItem("accessToken")
    return axios.post(`${store_base_url}/cart/`, cart,
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(value => {
            return value
        }).catch(reason => {
            return reason.message
        })
}
export const getCartList = () => async dispatch => {
    const token = localStorage.getItem("accessToken")
    try {
        dispatch({
            type: CART_LIST_LOADING
        })
        const response = await axios.get(`${store_base_url}/cart/`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        dispatch({
            type: CART_LIST_SUCCESS,
            payload: response.data
        })
    } catch (e) {
        dispatch({
            type: CART_LIST_ERROR
        })
    }
}
export const updateCart = (id,cart) => {
    const token = localStorage.getItem("accessToken")
    return axios.put(`${store_base_url}/cart/${id}/`, cart,
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(value => {
            return value
        }).catch(reason => {
            return reason.message
        })
}