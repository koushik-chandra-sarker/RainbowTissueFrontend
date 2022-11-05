import React from 'react';
import MissionVision from "./components/mission_vision";
import Head from "next/head";

const Index = () => {
    return (
        <div>
            <Head>
                <title>
                    Rainbow | Mission & Vision
                </title>
                <meta
                    name="description"
                    content="Our mission is to provide the best quality products and services to our customers. We are committed to provide the best quality products and services to our customers."
                    key="desc"
                />

            </Head>
             <MissionVision/>
        </div>
    );
};

export default Index;