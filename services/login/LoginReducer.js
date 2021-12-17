import {LOGIN_ERROR,LOGIN_LOADING,LOGIN_SUCCESS} from "./Type";

const initialState = {
    loading: false,
    data: [],
    error: ""
}

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_LOADING:
            return {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                error: "Error"
            }
        default:
            return state;
    }
}

export default LoginReducer;