import {
    PRODUCT_ERROR,
    PRODUCT_LOADING,
    PRODUCT_SUCCESS,
    PRODUCTS_ERROR,
    PRODUCTS_LOADING,
    PRODUCTS_SUCCESS,
    SIMILAR_PRODUCTS_LOADING,
    SIMILAR_PRODUCTS_SUCCESS,
    SIMILAR_PRODUCTS_ERROR,
    PAGINATED_PRODUCTS_LOADING, PAGINATED_PRODUCTS_SUCCESS, PAGINATED_PRODUCTS_ERROR
} from "./ProductType";
import axios from "axios";
import {store_base_url} from "../../../constants";

export const getProductList = (url) => async dispatch => {
    try {
        dispatch({
            type: PRODUCTS_LOADING
        })
        const response = await axios.get(url)
        dispatch({
            type: PRODUCTS_SUCCESS,
            payload: response.data
        })
    } catch (e) {
        dispatch({
            type: PRODUCTS_ERROR
        })
    }
}
export const getProductListPaginated = (url) => async dispatch => {
    try {
        dispatch({
            type: PAGINATED_PRODUCTS_LOADING
        })
        const response = await axios.get(url)
        dispatch({
            type: PAGINATED_PRODUCTS_SUCCESS,
            payload: response.data
        })
    } catch (e) {
        dispatch({
            type: PAGINATED_PRODUCTS_ERROR
        })
    }
}
export const getSimilarProductList = (url = `${store_base_url}/product/?active=true&limit=8&random=true`) => async dispatch => {
    try {
        dispatch({
            type: SIMILAR_PRODUCTS_LOADING
        })
        const response = await axios.get(url)
        dispatch({
            type: SIMILAR_PRODUCTS_SUCCESS,
            payload: response.data
        })
    } catch (e) {
        dispatch({
            type: SIMILAR_PRODUCTS_ERROR
        })
    }
}
export const getProduct= (id) => async dispatch => {
    try {
        await dispatch({
            type: PRODUCT_LOADING,
            payload: []
        })
        const response = await axios.get(`${store_base_url}/product/${id}/`)
        await dispatch({
            type: PRODUCT_SUCCESS,
            payload: response.data
        })
    } catch (e) {
        dispatch({
            type: PRODUCT_ERROR
        })
    }
}
export const getProductByCategory= (id) => async dispatch => {
    try {
        dispatch({
            type: PRODUCT_LOADING,
            payload: []
        })
        const response = await axios.get(`${store_base_url}/product?category=${id}`)
        dispatch({
            type: PRODUCT_SUCCESS,
            payload: response.data
        })
    } catch (e) {
        dispatch({
            type: PRODUCT_ERROR,
            payload: []
        })
    }
}