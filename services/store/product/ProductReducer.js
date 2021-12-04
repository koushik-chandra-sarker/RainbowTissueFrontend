import {PRODUCT_ERROR, PRODUCT_LOADING, PRODUCT_SUCCESS} from "./ProductType";

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