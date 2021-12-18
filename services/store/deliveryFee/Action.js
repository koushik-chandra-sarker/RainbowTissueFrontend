import axios from "axios";
import {store_base_url} from "../../../constants";


export const getDeliveryFee = (quantity) => {
    return axios.get(`${store_base_url}/delivery-fee/?max-quantity=${quantity}`)
        .then(value => {
            return value
        }).catch(reason => {
            return reason.message
        })
}
