import axios from "axios";
import {site_base_url, store_base_url} from "../../../constants";
import {CART_LIST_ERROR, CART_LIST_LOADING, CART_LIST_SUCCESS} from "./Type";


export const checkout = (orderDetails) => {
    const token = localStorage.getItem("accessToken")
    return axios.post(`${store_base_url}/checkout/`, orderDetails,
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
