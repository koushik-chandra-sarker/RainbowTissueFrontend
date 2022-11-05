import React from 'react';
import About from "./component/about";
import {frontend_static_url} from "../../constants";
import Head from "next/head";

const Index = () => {
    return (
        <>
            <About/>
        </>
    );
};

export default Index;