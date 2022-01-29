import axios from "axios";
import {base_static_url, site_base_url, store_base_url} from "../../constants";
import {
    ORDER_ERROR,
    ORDER_LOADING, ORDER_SUCCESS,
    PROFILE_ERROR,
    PROFILE_LOADING,
    PROFILE_SUCCESS,
} from "./profileType";
import _ from "lodash";
import {toast} from "react-toastify";


export const createProfile = (profile) => {
    return axios.post(`${base_static_url}/account/api/create-profile/`, profile,
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
export const updateProfile = (profile, id) => {
    const token = localStorage.getItem("accessToken")
    return axios.put(`${base_static_url}/account/api/update-profile-by-own/${id}/`, profile,
        {
            headers: {
                "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
                'Authorization': `Bearer ${token}`
            }
        }).then(value => {
        return value
    }).catch(reason => {
        return reason
    })
}

export const updateProfilePicture = (data, profileId) => {
    const token = localStorage.getItem("accessToken")
    return axios.put(`${base_static_url}/account/api/update-profile-pic-by-own/${profileId}/`, data,
        {
            headers: {
                "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
                'Authorization': `Bearer ${token}`
            }
        }).then(value => {
        return value
    }).catch(reason => {
        return reason
    })
}

export const getProfile = (id) => async dispatch => {
    const token = localStorage.getItem("accessToken")
    try {
        dispatch({
            type: PROFILE_LOADING
        })
        const response = await axios.get(`${base_static_url}/account/api/profile/${id}/`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        dispatch({
            type: PROFILE_SUCCESS,
            payload: response.data
        })
    } catch (e) {
        dispatch({
            type: PROFILE_ERROR
        })
    }
}

export const extractDefaultAddress = (addressList) => {
    if (!_.isEmpty(addressList)) {
        const defaultAddress = addressList.find((address) => address.default)
        const otherAddressList = addressList.filter((address) => !address.default)
        return [defaultAddress !== undefined ? defaultAddress : {}, otherAddressList !== undefined ? otherAddressList : []]
    }
    return [{}, []]
}

export const getDefaultAddressId = (addressList) => {
    if (!_.isEmpty(addressList)) {
        const address = addressList.find((address) => address.default)
        return address !== undefined ? address.id : ""
    }
    return ''

}
export const getDefaultAddressCity = (addressList) => {
    if (!_.isEmpty(addressList)) {
        const address = addressList.find((address) => address.default)
        return address !== undefined ? address.city : ""
    }
    return ''

}
export const getDefaultAddressCountry = (addressList) => {
    if (!_.isEmpty(addressList)) {
        const address = addressList.find((address) => address.default)
        return address !== undefined ? address.country : ""
    }
    return ''

}
export const getDefaultAddressZipCode = (addressList) => {
    if (!_.isEmpty(addressList)) {
        const address = addressList.find((address) => address.default)
        return address !== undefined ? address.zipCode : ""
    }
    return ''
}
export const getDefaultAddressAddress = (addressList) => {
    if (!_.isEmpty(addressList)) {
        const address = addressList.find((address) => address.default)
        return address !== undefined ? address.address : ""
    }
    return ''

}
export const getDefaultAddressPhone = (addressList) => {
    if (!_.isEmpty(addressList)) {
        const address = addressList.find((address) => address.default)
        return address !== undefined ? address.address : ""
    }

}


export const saveAddress = (data) => {
    const token = localStorage.getItem("accessToken")
    return axios.post(`${base_static_url}/account/api/address/`, data,
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(value => {
        return value
    }).catch(reason => {
        return reason
    })
}
export const updateAddress = (data) => {
    const token = localStorage.getItem("accessToken")
    return axios.put(`${base_static_url}/account/api/address/${data.id}/`, data,
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(value => {
        return value
    }).catch(reason => {
        return reason
    })
}
export const deleteAddress = (id) => {
    const token = localStorage.getItem("accessToken")
    return axios.delete(`${base_static_url}/account/api/address/${id}/`,
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(value => {
        return value
    }).catch(reason => {
        return reason
    })
}


export const validateNewAddress = (data) => {
    const errors = {};
    errors.valid = true
    if (_.isEmpty(data.phone)) {
        errors.phone = 'Please Enter A Phone Number';
        errors.valid = false
    }
    if (_.isEmpty(data.city)) {
        errors.city = 'Please Enter Your City';
        errors.valid = false
    }
    if (_.isEmpty(data.country)) {
        errors.country = 'Please Enter Your Country';
        errors.valid = false
    }
    if (_.isEmpty(data.zipCode)) {
        errors.zipCode = 'Please Enter Zip Code';
        errors.valid = false
    }
    if (_.isEmpty(data.address)) {
        errors.address = 'Please Enter Your Address';
        errors.valid = false
    }
    return errors;
}


export const getOrder = (limit, offset) => async dispatch => {
    const token = localStorage.getItem("accessToken")
    try {
        dispatch({
            type: ORDER_LOADING
        })
        const response = await axios.get(`${store_base_url}/orderByUser/?limit=${limit}&offset=${offset}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        dispatch({
            type: ORDER_SUCCESS,
            payload: response.data
        })
    } catch (e) {
        dispatch({
            type: ORDER_ERROR
        })
    }
}

export const updatePassword = (data) => {
    const token = localStorage.getItem("accessToken")
    return axios.put(`${base_static_url}/account/api/change-password/`, data,
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(value => {
        return value
    }).catch(reason => {
        return reason
    })
}