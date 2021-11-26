import axios from "axios";
import {base_url} from "../../constants";
// import Cookies from 'js-cookie';
/* TODO: check hare*/
// let csrftoken = Cookies.get('csrftoken')

export const apply = (application) => {

    return axios.post(`${base_url}/job-application/`, application,
        {
            headers: {
                "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
            }
        })
        .
    then(value => {
        return value
    }).catch(reason => {
        return reason.message
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
