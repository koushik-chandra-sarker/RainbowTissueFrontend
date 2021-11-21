import React from 'react';
import 'splide-nextjs/splide/dist/css/themes/splide-skyblue.min.css';
import Header from "./components/header";
import Banner from "./components/banner";
import CategoryFilter from "./components/categoryFilter";

const Index = () => {

    return (
        <div>
            <Header/>
            <Banner/>
            <CategoryFilter/>
        </div>
    );
};

export default Index;