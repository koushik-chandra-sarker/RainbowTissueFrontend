import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {getProfile} from "../services/profile/profileAction";
import {isLoggedIn} from "../services/login/Action";
import {authenticated, getUserProfileFromLocalStorage} from "../services/common/Action";

const useProfile = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    // const loggedIn = useSelector(store => store.IsLoggedIn)
    const loggedIn = authenticated()
    const profile = useSelector(store => store.profile);
    // const [activeTabIndex, setActiveTabIndex] = useState(0)
    const [profileId, setProfileId] = useState(-1)
    useEffect(() => {
        if (profileId !== -1) {
            dispatch(getProfile(profileId))
        }
    }, [profileId])
    useEffect(() => {
        dispatch(isLoggedIn())
    }, [])

    useEffect(() => {
        if (!loggedIn) {
            router.push("/shop/login")
            return
        } else {
            const profile = getUserProfileFromLocalStorage()
            if (profile !== null) {
                setProfileId(profile.pk)

            }
        }
    }, [loggedIn])

    return [profile, profileId, loggedIn]
};

export default useProfile;