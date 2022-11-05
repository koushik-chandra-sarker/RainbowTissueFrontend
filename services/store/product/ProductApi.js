
import axios from "axios";
import {store_base_url} from "../../../constants";
import {SIMILAR_PRODUCTS_ERROR, SIMILAR_PRODUCTS_LOADING, SIMILAR_PRODUCTS_SUCCESS} from "./ProductType";

export const getProduct = (id) => {
    return axios.get(`${store_base_url}/product/${id}/`)
}
export const getSimilarProductList = (url = `${store_base_url}/product/?active=true&limit=8&random=true`) =>{
        return axios.get(url)
}
