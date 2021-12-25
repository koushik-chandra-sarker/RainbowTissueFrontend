
const initialState = {
    active : false
}

const PreloaderReducer = (state = initialState, action) => {
    if (action.type === "PRELOADER"){
        return { ...state, active:action.payload }
    }
    else {
        return state
    }

}
export default PreloaderReducer;