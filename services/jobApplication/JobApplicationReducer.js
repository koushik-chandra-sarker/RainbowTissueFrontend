import {JOBAPPLICATION_ERROR,JOBAPPLICATION_LOADING,JOBAPPLICATION_SUCCESS} from "./JobApplicationType";

const initialState = {
    loading: false,
    data: [],
    error: ""
}

const JobApplicationReducer = (state = initialState, action) => {
    switch (action.type) {
        case JOBAPPLICATION_LOADING:
            return {
                ...state,
                loading: true
            }
        case JOBAPPLICATION_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case JOBAPPLICATION_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get jobApplication"
            }
        default:
            return state;
    }
}

export default JobApplicationReducer;