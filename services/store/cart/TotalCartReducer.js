import {
    TOTAL_CART_ERROR,
    TOTAL_CART_LOADING,
    TOTAL_CART_SUCCESS
} from "./Type";

const initialState = {
    loading: false,
    data: 0,
    error: ""
}

const TotalCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOTAL_CART_LOADING:
            return {
                ...state,
                loading: true
            }
        case TOTAL_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.data,
                error: ""
            }
        case TOTAL_CART_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get Total Cart"
            }
        default:
            return state;
    }
}

export default TotalCartReducer;