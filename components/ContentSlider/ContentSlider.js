import React, {useState} from 'react';
import _ from 'lodash'
import styles from './ContentSlider.module.scss'
import classnames from "classnames"
import {Splide, SplideSlide} from 'splide-nextjs/react-splide';

import 'splide-nextjs/splide/dist/css/themes/splide-skyblue.min.css';
import {createSlides} from "splide-nextjs/react-splide/dist/js/utils/slides";
const products = [
    {
        src: "static/image/product/2-2-2.jpg",
        title: 'Rainbow 200 Sheet Facial Tissue Box',
        price: '40',
        category: 'Facial Tissue'
    },

    {
        src: "static/image/product/2_2.jpg",
        title: 'Rainbow 200 Sheet Facial Tissue Box',
        price: '40',
        category: 'Facial Tissue'
    },
    {
        src: "static/image/product/2_1.jpg",
        title: 'Rainbow 200 Sheet Facial Tissue Box',
        price: '40',
        category: 'Facial Tissue'
    },
    {
        src: "static/image/product/3_2.jpg",
        title: 'Rainbow 200 Sheet Facial Tissue Box',
        price: '40',
        category: 'Facial Tissue'
    },
    {
        src: "static/image/product/3_2.jpg",
        title: 'Rainbow 200 Sheet Facial Tissue Box',
        price: '40',
        category: 'Facial Tissue'
    },
    {
        src: "static/image/product/4_1.jpg",
        title: 'Rainbow 200 Sheet Facial Tissue Box',
        price: '40',
        category: 'Facial Tissue'
    },
    {
        src: "static/image/product/3_2.jpg",
        title: 'Rainbow 200 Sheet Facial Tissue Box',
        price: '40',
        category: 'Facial Tissue'
    },
    {
        src: "static/image/product/4-2.jpg",
        title: 'Rainbow 200 Sheet Facial Tissue Box',
        price: '40',
        category: 'Facial Tissue'
    },
    {
        src: "static/image/product/4-1.jpg",
        title: 'Rainbow 200 Sheet Facial Tissue Box',
        price: '40',
        category: 'Facial Tissue'
    },
    {
        src: "static/image/product/4_2.jpg",
        title: 'Rainbow 200 Sheet Facial Tissue Box',
        price: '40',
        category: 'Facial Tissue'
    },
    {
        src: "static/image/product/4-1.jpg",
        title: 'Rainbow 200 Sheet Facial Tissue Box',
        price: '40',
        category: 'Facial Tissue'
    },
    {
        src: "static/image/product/5_1.jpg",
        title: 'Rainbow 200 Sheet Facial Tissue Box',
        price: '40',
        category: 'Facial Tissue'
    },
    {
        src: "static/image/product/5_2.jpg",
        title: 'Rainbow 200 Sheet Facial Tissue Box',
        price: '40',
        category: 'Facial Tissue'
    },
    {
        src: "static/image/product/6_1.jpg",
        title: 'Rainbow 200 Sheet Facial Tissue Box',
        price: '40',
        category: 'Facial Tissue'
    },
    {
        src: "static/image/product/6_2.jpg",
        title: 'Rainbow 200 Sheet Facial Tissue Box',
        price: '40',
        category: 'Facial Tissue'
    },
    {
        src: "static/image/product/7_1.jpg",
        title: 'Rainbow 200 Sheet Facial Tissue Box',
        price: '40',
        category: 'Facial Tissue'
    },
    {
        src: "static/image/product/7_2.jpg",
        title: 'Rainbow 200 Sheet Facial Tissue Box',
        price: '40',
        category: 'Facial Tissue'
    },
    {
        src: "static/image/product/8_1.jpg",
        title: 'Rainbow 200 Sheet Facial Tissue Box',
        price: '40',
        category: 'Facial Tissue'
    },
    {
        src: "static/image/product/9_1.jpg",
        title: 'Rainbow 200 Sheet Facial Tissue Box',
        price: '40',
        category: 'Facial Tissue'
    },
    {
        src: "static/image/product/9_2.jpg",
        title: 'Rainbow 200 Sheet Facial Tissue Box',
        price: '40',
        category: 'Facial Tissue'
    },
    {
        src: "static/image/product/10_1.jpg",
        title: 'Rainbow 200 Sheet Facial Tissue Box',
        price: '40',
        category: 'Facial Tissue'
    },
    {
        src: "static/image/product/10_2.jpg",
        title: 'Rainbow 200 Sheet Facial Tissue Box',
        price: '40',
        category: 'Facial Tissue'
    },
    {
        src: "static/image/product/11_1.jpg",
        title: 'Rainbow 200 Sheet Facial Tissue Box',
        price: '40',
        category: 'Facial Tissue'
    },
    {
        src: "static/image/product/11_2.jpg",
        title: 'Rainbow 200 Sheet Facial Tissue Box',
        price: '40',
        category: 'Facial Tissue'
    },

]

const tabs = [
    {
        name: "All Products",
        active: true,
        contents: [
            {
                title: ""
            },
            {
                title: ""
            }
        ]
    },
    {
        name: "Hand Towel",
        active: false,
        contents: [
            {
                title: ""
            }
        ]
    },
    {
        name: "Kitchen Roll",
        active: false,
        contents: [
            {
                title: ""
            }
        ]
    },
    {
        name: "Paper Napkin",
        active: false,
        contents: [
            {
                title: ""
            }
        ]
    },
    {
        name: "Pocket Tissue",
        active: false,
        contents: [
            {
                title: ""
            }
        ]
    },
    {
        name: "Toilet Roll",
        active: false,
        contents: [
            {
                title: ""
            }
        ]
    },

    {
        name: "WALLET TISSUE",
        active: false,
        contents: [
            {
                title: ""
            }
        ]
    },

    {
        name: "Pocket Tissue",
        active: false,
        contents: [
            {
                title: ""
            }
        ]
    },

    {
        name: "Kitchen Roll",
        active: false,
        contents: [
            {
                title: ""
            }
        ]
    },


]


const ContentSlider = () => {

    const [activePanel, setActivePanel] = useState(0)

    function handleTab(i) {
        setActivePanel(i)
    }

    return (
        <div>
            <section className={classnames(styles.tabs, '')}>
                {
                    !_.isEmpty(tabs) ?
                        tabs.map((item, i) => (
                            <span
                                key={i}
                                onClick={() => handleTab(i)}
                                className={classnames(styles.tab, activePanel === i ? "opacity-100" : "bg-opacity-50", 'bg-primary transition ease-linear hover:bg-opacity-80 ')}
                                data-target={`tab_panel${i}`}
                            >
                                {item.name}
                                </span>
                        )) :
                        <></>
                }
            </section>
            <section className={classnames(styles.tab_panel, 'mt-8')}>
                {
                    !_.isEmpty(tabs) ?
                        tabs.map((item, i) => (
                            <>
                                <div key={i}
                                     className={classnames(styles.panel_item, 'animate__animated ', activePanel === i ? `${styles.active} ` : " ")}
                                >
                                    <div className={'flex flex-row justify-between items-center py-8'}>
                                        <h4 className={classnames('text-gray-900 h-auto text-center uppercase text-4xl')}>Tissue
                                            Paper {i}</h4>
                                        <img className={classnames('h-16')} src="static/image/rain-logo.png" alt=""/>
                                    </div>
                                    <p className={'bg-primary p-8'}>
                                        The most desired features in facial tissues are comfort and softness. Fresh
                                        facial
                                        tissue ensures these at the best value. Fresh facial tissue is made in fully
                                        automated machines at our state-of-the-art factory that ensures maximum quality
                                        and
                                        zero environmental impact.
                                    </p>
                                    <img className={'-mt-0.5'} src="static/image/wave-small-height.svg" alt=""/>
                                    <section className="text-gray-600 body-font">
                                        <div className="container px-5 py-24 mx-auto">
                                            <div className="flex flex-wrap -m-4 text-center">
                                                <div className="p-4 sm:w-1/4 w-1/2 leading-8">
                                                    <span
                                                        className="material-icons text-6xl text-primary">emoji_events</span>
                                                    <p className="leading-relaxed uppercase font-bold text-primary">Milestone</p>
                                                </div>
                                                <div className="p-4 sm:w-1/4 w-1/2 leading-8">
                                                    <span
                                                        className="material-icons text-6xl text-primary">home_repair_service</span>
                                                    <p className="leading-relaxed uppercase font-bold text-primary">
                                                        UNIQUE FEATURES
                                                    </p>
                                                </div>
                                                <div className="p-4 sm:w-1/4 w-1/2 leading-8">
                                                    <span className="material-icons text-6xl text-primary">source</span>
                                                    <p className="leading-relaxed uppercase font-bold text-primary">SOURCE
                                                        OF RAW MATERIAL</p>
                                                </div>
                                                <div className="p-4 sm:w-1/4 w-1/2 leading-8">
                                                    <span
                                                        className="material-icons text-6xl text-primary">language</span>
                                                    <p className="leading-relaxed uppercase font-bold text-primary ">EXPORT
                                                        MARKET</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section className={'flex-col-reverse md:flex mb-8'}>
                                        <section className={'flex flex-col-reverse md:flex-row'}>
                                            <div className={' w-full md:w-3/12 p-3 md:px-8 md:border-r  border-primary'}>
                                                <h3 className={'uppercase text-xl text-gray-50 md:text-sm text-center md:text-left text-primary font-bold mb-2'}>Related
                                                    Products</h3>
                                                <Splide
                                                    options={{
                                                        type: 'loop',
                                                        autoplay: true,
                                                        rewind: true,
                                                        // width: 800,
                                                        speed: '300',
                                                        interval: 3000,
                                                        gap: '0.75rem',
                                                        pagination: false,
                                                        pauseOnHover: true,
                                                        // fixedWidth: 200,
                                                        width: "100rem",
                                                        height: '12rem',
                                                        perPage: 1,
                                                        cover: true,
                                                        focus: 'left',
                                                        isNavigation: true,
                                                        updateOnMove: true,
                                                        breakpoints: {
                                                            767: {
                                                                perPage: 2,
                                                                height: '12rem',

                                                            },
                                                            640: {
                                                                perPage: 1,
                                                                height: '15rem',
                                                            },
                                                        },
                                                    }}

                                                    hasSliderWrapper
                                                    // hasAutoplayControls
                                                    // hasAutoplayProgress
                                                >
                                                    {products.map(slide => (
                                                        <SplideSlide key={slide.src}>
                                                            <img src={slide.src} alt={slide.alt}/>
                                                        </SplideSlide>
                                                    ))}
                                                </Splide>
                                            </div>
                                            <div className={'w-full md:w-9/12 p-3'}>
                                                <h3 className={'uppercase  text-primary font-bold text-xl md:text-sm text-center md:text-left  mb-2'}>Products</h3>
                                                <Splide
                                                    options={{
                                                        type: 'loop',
                                                        autoplay: true,
                                                        rewind: true,
                                                        // width: 800,
                                                        speed: '500',
                                                        interval: 4000,
                                                        gap: '0.75rem',
                                                        pagination: false,
                                                        pauseOnHover: true,
                                                        // fixedWidth: 200,
                                                        // width: "100rem",
                                                        height: '12rem',
                                                        perPage: 4,
                                                        cover: true,
                                                        focus: 'left',
                                                        isNavigation: true,
                                                        updateOnMove: true,
                                                        breakpoints: {
                                                            1024: {
                                                                perPage: 3,

                                                            },
                                                            767: {
                                                                perPage: 2,
                                                                // height: '12rem',

                                                            },
                                                            640: {
                                                                perPage: 1,
                                                                // height: '15rem',

                                                            },
                                                        },
                                                    }}

                                                    hasSliderWrapper
                                                    // hasAutoplayControls
                                                    // hasAutoplayProgress
                                                >
                                                    {products.map(slide => (
                                                        <SplideSlide key={slide.src}>
                                                            <img className={classnames('cursor-pointer ')} src={slide.src} alt={slide.alt}/>
                                                            <div className={classnames( 'w-full h-full flex flex-col items-center slider_content justify-center bg-primary bg-opacity-70')}>
                                                                <h5 className={'text-white  text-center mt-2 '}> Cum
                                                                    secula velum, </h5>
                                                                <a className={'text-center py-2 px-3 mt-1 bg-primary transition ease-linear hover:bg-secondary'} href="#">
                                                                    <button>Details</button>
                                                                </a>
                                                            </div>

                                                        </SplideSlide>
                                                    ))}
                                                </Splide>


                                            </div>

                                        </section>
                                    </section>

                                </div>

                            </>
                        )) :
                        <></>
                }
            </section>
        </div>
    );
};

export default ContentSlider;