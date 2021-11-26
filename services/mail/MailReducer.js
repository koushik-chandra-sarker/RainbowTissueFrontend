import {MAIL_ERROR,MAIL_LOADING,MAIL_SUCCESS} from "./MailType";

const initialState = {
    loading: false,
    data: [],
    error: ""
}

const MailReducer = (state = initialState, action) => {
    switch (action.type) {
        case MAIL_LOADING:
            return {
                ...state,
                loading: true
            }
        case MAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case MAIL_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get MAIL"
            }
        default:
            return state;
    }
}

export default MailReducer;