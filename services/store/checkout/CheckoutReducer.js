import {CHECKOUT_ERROR, CHECKOUT_LOADING, CHECKOUT_SUCCESS} from "./Type";


const initialState = {
    loading: false,
    data: [],
    error: ""
}

const CheckoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECKOUT_LOADING:
            return {
                ...state,
                loading: true
            }
        case CHECKOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case CHECKOUT_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get Order"
            }
        default:
            return state;
    }
}

export default CheckoutReducer;