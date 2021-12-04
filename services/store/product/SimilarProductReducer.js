import {SIMILAR_PRODUCTS_ERROR, SIMILAR_PRODUCTS_LOADING, SIMILAR_PRODUCTS_SUCCESS} from "./ProductType";

const initialState = {
    loading: false,
    data: [],
    error: ""
}

const SimilarProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIMILAR_PRODUCTS_LOADING:
            return {
                ...state,
                loading: true,
            }
        case SIMILAR_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case SIMILAR_PRODUCTS_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get Similar Product"
            }
        default:
            return state;
    }
}

export default SimilarProductReducer;