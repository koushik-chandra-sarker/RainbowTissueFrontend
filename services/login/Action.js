import axios from "axios";
import {base_static_url} from "../../constants";
import {IS_LOGIN} from "./Type";
// import Cookies from 'js-cookie';
/* TODO: check hare*/
// let csrftoken = Cookies.get('csrftoken')

export const login = (data) => {
    return axios.post(`${base_static_url}/account/api/login/`, data)
        .then(r => {
            if (r.status === 200) {
                localStorage.setItem("accessToken", r.data.access)
                localStorage.setItem("refreshToken", r.data.refresh)
                localStorage.setItem("type", r.data.type)
                localStorage.setItem("user", JSON.stringify(r.data.user[0]))
                localStorage.setItem("profile", JSON.stringify(r.data.profile[0]))
                localStorage.setItem("loggedIn", true)
                return {
                    loggedIn: true,
                    message: "Login Successful"
                }
            }
        }).catch(reason => {
            return {
                loggedIn: false,
                message: "Bad Credentials"
            }
        })
}

export const logout = () => {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
    localStorage.removeItem("loggedIn")
    localStorage.removeItem("user")
    localStorage.removeItem("profile")
    localStorage.removeItem("type")
}

export const isLoggedIn = () => async dispatch => {
    let loggedIn = localStorage.getItem("loggedIn")
    // console.log(loggedIn)
    if (loggedIn === 'true') {
        dispatch({
            type: IS_LOGIN,
            payload: true
        })
    }
    // if (loggedIn!=="true") {
    //     dispatch({
    //         type: IS_LOGIN,
    //         payload: false
    //     })
    // }

}

export const verifyToken = () => {
    const token = localStorage.getItem("accessToken")
    if (token !== null){
        return axios.post(`${base_static_url}/account/api/token/verify/`, {
            "token": token
        }).then(r => {
            console.log("Token Verified")
            return r
        }).catch(reason => {
            console.log("Token Expired")
            logout()
            return {
                message: reason.message
            }
        })
    }
    else {
        console.log("Token Not Found On LocalStorage")
        logout()
    }

}
