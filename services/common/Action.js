import axios from "axios";

export async function clientInfo() {
    return await axios.get('https://geolocation-db.com/json/').then(res=>{
        return res.data
    })
}