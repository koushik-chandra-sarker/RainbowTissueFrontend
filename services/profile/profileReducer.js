import {
    ORDER_ERROR,
    ORDER_LOADING,
    ORDER_SUCCESS,
    PROFILE_ERROR,
    PROFILE_LOADING,
    PROFILE_SUCCESS
} from "./profileType";

const initialState = {
    loading: false,
    data: [],
    error: ""
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_LOADING:
            return {
                ...state,
                loading: true
            }
        case PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case PROFILE_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get profile"
            }
        default:
            return state;
    }
}

export default ProfileReducer;

const orderState = {
    loading: false,
    data: [],
    error: ""
}
export const OrderForProfile = (state = orderState, action)=>{
    switch (action.type) {
        case ORDER_LOADING:
            return {
                ...state,
                loading: true
            }
        case ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case ORDER_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get order"
            }
        default:
            return state;
    }
}