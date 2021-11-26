import {LANGUAGE_ERROR,LANGUAGE_LOADING,LANGUAGE_SUCCESS} from "./LanguageType";

const initialState = {
    loading: false,
    data: 'en',
    error: ""
}

const LanguageReducer = (state = initialState, action) => {
    switch (action.type) {
        case LANGUAGE_LOADING:
            return {
                ...state,
                loading: true
            }
        case LANGUAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case LANGUAGE_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get language"
            }
        default:
            return state;
    }
}

export default LanguageReducer;