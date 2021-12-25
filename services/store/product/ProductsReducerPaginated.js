import {PAGINATED_PRODUCTS_ERROR, PAGINATED_PRODUCTS_LOADING, PAGINATED_PRODUCTS_SUCCESS} from "./ProductType";

const initialState = {
    loading: false,
    data: [],
    error: ""
}

const ProductsReducerPaginated = (state = initialState, action) => {
    switch (action.type) {
        case PAGINATED_PRODUCTS_LOADING:
            return {
                ...state,
                loading: true,
            }
        case PAGINATED_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case PAGINATED_PRODUCTS_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get products"
            }
        default:
            return state;
    }
}

export default ProductsReducerPaginated;