import axios from "axios";

export async function clientInfo() {
    return await axios.get('https://geolocation-db.com/json/').then(res=>{
        return res.data
    })
}
export function getUserFromLocalStorage(){
    if(typeof window !== "undefined") {
        const user = localStorage.getItem('user')
        if (user !== null){
            return JSON.parse(user)
        }
    }

    return null
}
export function getUserProfileFromLocalStorage(){
    if(typeof window !== "undefined") {
        const profile = localStorage.getItem('profile')
        if (profile !== null){
            return JSON.parse(profile)
        }
    }

    return null
}