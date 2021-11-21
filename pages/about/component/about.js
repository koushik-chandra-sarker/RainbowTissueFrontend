import React from 'react';

const About = () => {
    return (
        <div>
            <section className="w-full bg-center bg-cover h-64 md:h-128 relative"
                     style={{backgroundImage: "url(static/image/about.jpg)"}}>
                <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">About <span
                            className="text-primary underline">Rainbow Tissue</span></h1>

                    </div>
                </div>
                <div className={'absolute w-full h-max -bottom-0.5 md:-bottom-1'}>
                    <img src="static/image/wave.svg" alt=""/>
                </div>
            </section>
            <section className={'w-11/12 sm:w-3/4 mt-20 mx-auto text-justify'}>
                <p className={'text-primary'}>
                    Rainbow Tissue & Paper Industries Ltd. Established in 2014, is a reputed manufacturer in the tissue
                    industry. We are a leading brand of Tissue Paper with products like paper napkins, toilet rolls,
                    kitchen rolls, facial tissues, and V-fold napkins. Rainbow as a brand is well-reputed in the market
                    due to its premium quality products and customer services.We also customize our products as per
                    client requirement for different occasions. We take pride in constantly enhancing the quality of
                    each of our products. Technologically driven, we strive to be better and at each level and surpass
                    the existing standard of the tissue industry. We have been the trend-setters in our industry, having
                    many first’s to our name.Our mission is to provide premium quality of tissue products, with proper
                    packaging to our customers. With our distribution planning on a national basis, we believe in
                    ethical ways of conducting business, creating and maintaining a reliable name in the industry and
                    winning the trust of the end user.Md. Mominul Islam Mojumderâ€“MD, Rainbow Tissue & Paper Industries
                    Ltd. represented Bangladesh in the “TISSUE WORLD” exhibition and conference held at Nice, France. He
                    has also been the first Bangladeshi to contribute more than 4 articles on the Bangladeshi tissue
                    industry in the only Tissue Magazine circulated worldwide and published in Belgium.
                </p>
                <video className={"my-20 w-full"} autoPlay controls muted loop width="800" height="600"
                        preload="auto" >
                    <source src="static/videos/Rainbow Tissue – Renowned Tissue Brand.mp4" type="video/mp4"/>
                </video>
            </section>
        </div>
    );
};

export default About;