import {PRODUCTS_ERROR, PRODUCTS_LOADING, PRODUCTS_SUCCESS} from "./ProductType";

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