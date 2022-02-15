import {RATING_LOADING, RATING_SUCCESS, RATING_ERROR, REVIEW_LOADING, REVIEW_SUCCESS, REVIEW_ERROR} from "./Type";
import {REVIEW_FOR_PROFILE_ERROR, REVIEW_FOR_PROFILE_LOADING, REVIEW_FOR_PROFILE_SUCCESS} from "./Type";

const initialState = {
    loading: false,
    data: [],
    error: ""
}

export const ReviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case REVIEW_LOADING:
            return {
                ...state,
                loading: true,
            }
        case REVIEW_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case REVIEW_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get review by productId"
            }
        default:
            return state;
    }
}

const reviewStateForProfile = {
    loading: false,
    data: [],
    error: ""
}

export const ReviewReducerForUserId = (state = reviewStateForProfile, action) => {
    switch (action.type) {
        case REVIEW_FOR_PROFILE_LOADING:
            return {
                ...state,
                loading: true,
            }
        case REVIEW_FOR_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case REVIEW_FOR_PROFILE_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get review by userId"
            }
        default:
            return state;
    }
}
const ratingsState = {
    loading: false,
    data: [],
    error: ""
}

export const RatingsReducer = (state = ratingsState, action) => {
    switch (action.type) {
        case RATING_LOADING:
            return {
                ...state,
                loading: true,
            }
        case RATING_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case RATING_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get review by productId"
            }
        default:
            return state;
    }
}

