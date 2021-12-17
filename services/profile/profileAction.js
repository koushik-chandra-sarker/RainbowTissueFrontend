import axios from "axios";
import {base_static_url, site_base_url} from "../../constants";
// import Cookies from 'js-cookie';
/* TODO: check hare*/
// let csrftoken = Cookies.get('csrftoken')

export const createProfile = (profile) => {
    return axios.post(`${base_static_url}/account/api/profile/`, profile,
        {
            headers: {
                "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
            }
        }).then(value => {
        return value
    }).catch(reason => {
        return reason
    })
}

/*
{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        }
    }*/
