import axios from "axios";
import {base_url} from "../../constants";
// import Cookies from 'js-cookie';
/* TODO: check hare*/
// let csrftoken = Cookies.get('csrftoken')

export const sendMail = (mail) => {
    return axios.post(`${base_url}/mail/`, mail)
        .then(value => {
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
