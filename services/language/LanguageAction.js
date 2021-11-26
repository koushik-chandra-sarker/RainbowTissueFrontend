import {LANGUAGE_ERROR,LANGUAGE_LOADING,LANGUAGE_SUCCESS} from "./LanguageType";

export const getLanguage = (language)=> async dispatch =>{
    try {
        dispatch({
            type:LANGUAGE_LOADING
        })
        const response =  language
        dispatch({
            type:LANGUAGE_SUCCESS,
            payload:response
        })
    }catch (e) {
        dispatch({
            type:LANGUAGE_ERROR
        })
    }
}