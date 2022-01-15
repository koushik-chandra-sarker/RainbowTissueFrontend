import React, {useState} from 'react';
import {Button, IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import classnames from 'classnames'
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Card from "../cart/components/Card";
import {
    deleteAddress,
    getProfile,
    saveAddress,
    updateAddress,
    validateNewAddress
} from "../../../services/profile/profileAction";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";

const Address = ({
                     title,
                     first_name,
                     last_name,
                     id,
                     userId,
                     phone,
                     email,
                     city,
                     country,
                     zipCode,
                     address,
                     disableDeleteButton,
                     profileId, handleShippingAddress
                 }) => {
    const [open, setOpen] = useState(false);
    const [editedAddress, setEditedAddress] = useState({
        id: id,
        user: userId,
        phone: phone,
        email: email,
        city: city,
        country: country,
        zipCode: zipCode,
        address: address,
        default: false
    })
    const [error, setError] = useState({valid: true})
    const dispatch = useDispatch()

    function handleUpdateAddress() {
        const error = validateNewAddress(editedAddress)
        setError(error)
        if (!error.valid) return
        updateAddress(editedAddress).then(response => {
            if (response.status === 200) {
                toast.success("Address Save Successful.")
                setOpen(false)
                dispatch(getProfile(profileId))
            } else toast.error("Something went wrong!")
        })

    }

    function handleDelete() {
        deleteAddress(id).then(function(response){
            if (response.status===204){
                toast.success("Address Deleted.")
                dispatch(getProfile(profileId))
            }
            else {
                toast.success("Something went wrong !", {theme:"colored"})
            }
        }).catch(reason => toast.error(reason, {theme:"colored"}))
    }

    return (
        <div
            className={'text-xs leading-6 font-light border border-gray-200 p-4'}>
            <p className={'underline font-semibold'}>{title}</p>
            <p>{phone}</p>
            <p>{first_name} {last_name}</p>
            <p>{email}</p>
            <p>{address}, {city}-{zipCode}, {country}</p>
            <div className={"mt-2 flex gap-4"}>
                <Button onClick={()=>handleShippingAddress(id)} variant={"contained"} size={'small'}> Use This
                    Address</Button>
                <Button onClick={() => setOpen(true)}
                        className={classnames(open ? "hidden" : "")}
                        variant={"outlined"} size={'small'}
                        startIcon={<EditIcon/>}> Edit </Button>
                <Button
                    onClick={handleDelete}
                    variant={"outlined"} size={'small'} className={classnames(disableDeleteButton ? "hidden" : "")}
                        startIcon={<DeleteIcon/>}> Delete</Button>
            </div>
            <div className={'overflow-hidden'}>
                <div
                    className={classnames(open ? "" : "hidden", "w-full flex")}>
                    {/* Col */}
                    <div
                        className="w-full h-full bg-white rounded-lg lg:rounded-l-none p-8 pt-0">
                        <div className="pt-6 mb-4 bg-white rounded">
                            <div className="h-full w-full flex justify-end">
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => {
                                        setOpen(false);
                                    }}
                                >
                                    <CloseIcon fontSize="inherit"/>
                                </IconButton>
                            </div>
                            <div className="mb-4 md:flex">
                                <div
                                    className="mb-1 md:mr-2 md:mb-0 md:w-1/2 w-full">
                                    <label
                                        className="block mb-2 text-sm font-bold text-gray-700 disable"
                                        htmlFor="phone">
                                        Phone
                                    </label>
                                    <input type="number" id="phone"
                                           defaultValue={phone}
                                           placeholder={'Enter Your Phone'}
                                        // value={profile.data.phone}
                                           onChange={e => setEditedAddress({...editedAddress, phone: e.target.value})}
                                           className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                                                focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                                                px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                                <div className="md:ml-2 md:w-1/2 w-full">
                                    <label
                                        className="block mb-2 text-sm font-bold text-gray-700"
                                        htmlFor="email">
                                        Email
                                    </label>
                                    <input type="email" id="email"
                                           defaultValue={email}
                                           placeholder={'example@gmail.com'}
                                        // defaultValue={profile.data.user.email}
                                           onChange={e => setEditedAddress({...editedAddress, email: e.target.value})}
                                           className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                                            focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                                            px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                </div>
                            </div>


                            <div className="mb-4 md:flex">
                                <div
                                    className="mb-1 md:mr-2 md:mb-0 md:w-1/2 w-full">
                                    <label
                                        className="block mb-2 text-sm font-bold text-gray-700"
                                        htmlFor="city">
                                        City
                                    </label>
                                    {/*<input type="text" id={'addressId'} hidden value={getDefaultAddressId(profile.data.user.address)}/>*/}
                                    <input type="text" id="city"
                                           defaultValue={city}
                                           placeholder={'Ex: Dhaka'}
                                           onChange={e => setEditedAddress({...editedAddress, city: e.target.value})}
                                        // defaultValue={getDefaultAddressCity(profile.data.user.address)}
                                           className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                                            focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                                            px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                </div>
                                <div className="md:ml-2 md:w-1/2 w-full">
                                    <label
                                        className="block mb-2 text-sm font-bold text-gray-700"
                                        htmlFor="country">
                                        Country
                                    </label>
                                    <input type="text" id="country"
                                           defaultValue={country}
                                           placeholder={"Ex: Bangladesh"}
                                           onChange={e => setEditedAddress({...editedAddress, country: e.target.value})}
                                           required
                                        // defaultValue={getDefaultAddressCountry(profile.data.user.address)}
                                           className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                                                    focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                                                    px-3
                                                                                    leading-8 transition-colors duration-200 ease-in-out"/>
                                </div>
                            </div>
                            <div className="mb-4 md:flex">
                                <div className="md:ml-2 md:w-1/2 w-full">
                                    <label
                                        className="block mb-2 text-sm font-bold text-gray-700"
                                        htmlFor="zipCode">
                                        Zip Code
                                    </label>
                                    <input type="text" id="zipCode" required
                                           defaultValue={zipCode}
                                           onChange={e => setEditedAddress({...editedAddress, zipCode: e.target.value})}
                                           placeholder={"Enter Your Zip Code"}
                                           className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                                                    focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                                                    px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                </div>

                                <div className="md:ml-2 md:w-1/2 w-full">
                                    <label
                                        className="block mb-2 text-sm font-bold text-gray-700"
                                        htmlFor="address">
                                        Address
                                    </label>
                                    <input type="text" id="address" required
                                           defaultValue={address}
                                           onChange={e => setEditedAddress({...editedAddress, address: e.target.value})}
                                           placeholder={"Enter Your Address"}
                                        // defaultValue={getDefaultAddressAddress(profile.data.user.address)}
                                           className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
                                                                                    focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1
                                                                                    px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                </div>

                            </div>


                            <div className="mb-6 text-center">
                                <button
                                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                    onClick={handleUpdateAddress}
                                >
                                    Save
                                </button>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


Address.getInitialProps = async ({query}) => {
    const {
        title,
        first_name,
        last_name,
        phone,
        id,
        userId,
        email,
        city,
        country,
        zipCode,
        address,
        disableDeleteButton,
        profileId,
        handleShippingAddress
    } = query
    return {
        props: {
            title: title,
            first_name: first_name,
            last_name: last_name,
            id: id,
            userId: userId,
            phone: phone,
            email: email,
            city: city,
            country: country,
            zipCode: zipCode,
            address: address,
            disableDeleteButton: disableDeleteButton,
            profileId:profileId,
            handleShippingAddress: handleShippingAddress
        },
    }
}
export default Address;