import {CART_LIST_ERROR,CART_LIST_LOADING,CART_LIST_SUCCESS} from "./Type";

const initialState = {
    loading: false,
    data: [],
    error: ""
}

const CartListReducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_LIST_LOADING:
            return {
                ...state,
                loading: true
            }
        case CART_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case CART_LIST_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get CART_LIST"
            }
        default:
            return state;
    }
}

export default CartListReducer;