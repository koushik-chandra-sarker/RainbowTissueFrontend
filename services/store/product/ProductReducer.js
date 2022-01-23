import {
    PRODUCT_ERROR,
    PRODUCT_LOADING,
    PRODUCT_SUCCESS, PRODUCTS_TOP_BANNER_ERROR,
    PRODUCTS_TOP_BANNER_LOADING,
    PRODUCTS_TOP_BANNER_SUCCESS
} from "./ProductType";

const initialState = {
    loading: false,
    data: [],
    error: ""
}

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_LOADING:
            return {
                ...state,
                loading: true,
            }
        case PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case PRODUCT_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get Product"
            }
        default:
            return state;
    }
}

export default ProductReducer;
const topBannerState = {
    loading: false,
    data: {},
    error: ""
}
export const ProductTopBannerReducer = (state = topBannerState, action)=>{
    switch (action.type) {
        case PRODUCTS_TOP_BANNER_LOADING:
            return {
                ...state,
                loading: true,
            }
        case PRODUCTS_TOP_BANNER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload[0],
                error: ""
            }
        case PRODUCTS_TOP_BANNER_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get Product top banner"
            }
        default:
            return state;
    }
}