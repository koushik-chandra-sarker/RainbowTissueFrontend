import {JOBSINGLE_ERROR, JOBSINGLE_LOADING, JOBSINGLE_SUCCESS} from "./JobType";

const initialState = {
    loading: false,
    data: {},
    error: ""
}

const JobSingleReducer = (state = initialState, action) => {
    switch (action.type) {
        case JOBSINGLE_LOADING:
            return {
                ...state,
                loading: true,
            }
        case JOBSINGLE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case JOBSINGLE_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get Job"
            }
        default:
            return state;
    }
}

export default JobSingleReducer;