import {JOB_ERROR, JOB_LOADING, JOB_SUCCESS} from "./JobType";

const initialState = {
    loading: false,
    data: [],
    error: ""
}

const JobReducer = (state = initialState, action) => {
    switch (action.type) {
        case JOB_LOADING:
            return {
                ...state,
                loading: true,
            }
        case JOB_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case JOB_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get Job"
            }
        default:
            return state;
    }
}

export default JobReducer;