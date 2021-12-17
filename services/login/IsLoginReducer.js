import {IS_LOGIN} from "./Type";

const initialState = false

const IsLoginReducer = (state = initialState, action) => {

    switch (action.type) {
        case IS_LOGIN:
            state=action.payload
            return state
        default:
            return state
    }
}

export default IsLoginReducer;