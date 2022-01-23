import axios from "axios";
import {store_base_url} from "../../../constants";
import {
    CART_LIST_ERROR,
    CART_LIST_LOADING,
    CART_LIST_SUCCESS,
    TOTAL_CART_ERROR,
    TOTAL_CART_LOADING,
    TOTAL_CART_SUCCESS
} from "./Type";
import {authenticated} from "../../common/Action";


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
export const updateCart = (id, cart) => {
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

export const deleteCart = (cartId) => {
    const token = localStorage.getItem("accessToken")
    return axios.delete(`${store_base_url}/cart/${cartId}/`,
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

export const getTotalCartByRequestedUser = () => async dispatch => {
    const token = localStorage.getItem("accessToken")
    try {
        dispatch({
            type: TOTAL_CART_LOADING
        })
        const auth = authenticated()
        if (auth) {
            const response = await axios.get(`${store_base_url}/totalCart/`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            dispatch({
                type: TOTAL_CART_SUCCESS,
                payload: response.data
            })
        } else {
            dispatch({
                type: TOTAL_CART_SUCCESS,
                payload: 0
            })
        }

    } catch (e) {
        dispatch({
            type: TOTAL_CART_ERROR
        })
    }
}