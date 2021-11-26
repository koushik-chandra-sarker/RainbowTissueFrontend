import {GOOGLEMAPAPI_ERROR,GOOGLEMAPAPI_LOADING,GOOGLEMAPAPI_SUCCESS} from "./GoogleMapApiType";

const initialState = {
    loading: false,
    data: [],
    error: ""
}

const GoogleMapApiReducer = (state = initialState, action) => {
    switch (action.type) {
        case GOOGLEMAPAPI_LOADING:
            return {
                ...state,
                loading: true
            }
        case GOOGLEMAPAPI_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case GOOGLEMAPAPI_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get GoogleMapApi"
            }
        default:
            return state;
    }
}

export default GoogleMapApiReducer;