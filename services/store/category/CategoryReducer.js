import {CATEGORY_ERROR, CATEGORY_LOADING, CATEGORY_SUCCESS} from "./CategoryType";

const initialState = {
    loading: false,
    data: [],
    error: ""
}

const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORY_LOADING:
            return {
                ...state,
                loading: true,
            }
        case CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case CATEGORY_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get Category"
            }
        default:
            return state;
    }
}

export default CategoryReducer;