import React, {useEffect} from 'react';
import 'splide-nextjs/splide/dist/css/themes/splide-skyblue.min.css';
import Header from "./components/header";
import Banner from "./components/banner";
import CategoryFilter from "./components/categoryFilter";
import {isLoggedIn} from "../../services/login/Action";
import {useDispatch} from "react-redux";
import {isPreloaderActive} from "../../services/preloader/PreloaderAction";

const Index = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(isLoggedIn())
        dispatch(isPreloaderActive(true))
        setTimeout(()=>{
            dispatch(isPreloaderActive(false))
        },1000)
    },[dispatch])

    return (
        <div>
            <Header/>
            <Banner/>
            <CategoryFilter/>
        </div>
    );
};

export default Index;