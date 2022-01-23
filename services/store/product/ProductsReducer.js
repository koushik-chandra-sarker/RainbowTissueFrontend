import {
    PRODUCTS_ERROR,
    PRODUCTS_LOADING,
    PRODUCTS_SUCCESS,
    PRODUCTS_TOP_BANNER_ERROR,
    PRODUCTS_TOP_BANNER_LOADING,
    PRODUCTS_TOP_BANNER_SUCCESS,
    PRODUCTS_TOP_BOTTOM_BANNER_ERROR,
    PRODUCTS_TOP_BOTTOM_BANNER_LOADING,
    PRODUCTS_TOP_BOTTOM_BANNER_SUCCESS
} from "./ProductType";

const initialState = {
    loading: false,
    data: [],
    error: ""
}

const ProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCTS_LOADING:
            return {
                ...state,
                loading: true,
            }
        case PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case PRODUCTS_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get products"
            }
        default:
            return state;
    }
}

export default ProductsReducer;

const topBottomBannerState = {
    loading: false,
    data: [],
    error: ""
}
export const ProductTopBottomBannerReducer = (state = topBottomBannerState, action)=>{
    switch (action.type) {
        case PRODUCTS_TOP_BOTTOM_BANNER_LOADING:
            return {
                ...state,
                loading: true,
            }
        case PRODUCTS_TOP_BOTTOM_BANNER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case PRODUCTS_TOP_BOTTOM_BANNER_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get Product top bottom banner"
            }
        default:
            return state;
    }
}