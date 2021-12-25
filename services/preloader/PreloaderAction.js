export const isPreloaderActive = (action) => async dispatch => {
    dispatch(
        {
            type:"PRELOADER",
            payload: action
        }
    )
}