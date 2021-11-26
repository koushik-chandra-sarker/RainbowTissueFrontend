import {WEBSITE_ERROR,WEBSITE_LOADING,WEBSITE_SUCCESS} from "./WebsiteType";

const initialState = {
    loading: false,
    data: [],
    error: ""
}

const WebsiteReducer = (state = initialState, action) => {
    switch (action.type) {
        case WEBSITE_LOADING:
            return {
                ...state,
                loading: true
            }
        case WEBSITE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case WEBSITE_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get Website"
            }
        default:
            return state;
    }
}

export default WebsiteReducer;