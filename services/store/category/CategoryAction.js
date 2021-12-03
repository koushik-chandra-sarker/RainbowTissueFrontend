import {CATEGORY_ERROR, CATEGORY_LOADING, CATEGORY_SUCCESS} from "./CategoryType";
import axios from "axios";
import {store_base_url} from "../../../constants";

export const getCategoryList = ()=> async dispatch =>{
    try {
        dispatch({
            type:CATEGORY_LOADING
        })
        const response =  await axios.get(`${store_base_url}/category/`)
        dispatch({
            type:CATEGORY_SUCCESS,
            payload:response.data
        })
    }catch (e) {
        dispatch({
            type:CATEGORY_ERROR
        })
    }
}
