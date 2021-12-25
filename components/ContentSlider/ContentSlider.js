import React, {Fragment, useEffect, useState} from 'react';
import _ from 'lodash'
import styles from './ContentSlider.module.scss'
import classnames from "classnames"
import {Splide, SplideSlide} from 'splide-nextjs/react-splide';

import 'splide-nextjs/splide/dist/css/themes/splide-skyblue.min.css';
import {createSlides} from "splide-nextjs/react-splide/dist/js/utils/slides";
import {useDispatch, useSelector} from "react-redux";
import {Popover, Transition} from '@headlessui/react'
import {ChevronDownIcon} from '@heroicons/react/solid'
import {getProductList, getSimilarProductList} from "../../services/store/product/ProductAction";
import {store_base_url} from "../../constants";
import Link from "next/link";

const ContentSlider = () => {
    const productCat = useSelector(state => state.category);
    const [activePanel, setActivePanel] = useState(0)
    const dispatch = useDispatch()
    useEffect(() => {
        let initialCatId = null
        if (!_.isEmpty(productCat.data)) {
            initialCatId = productCat.data[0].id
        }
        dispatch(getProductList(`${store_base_url}/product/?&active=true&category=${initialCatId}`));
        dispatch(getSimilarProductList())
        console.log("call")
    }, [])
    const products = useSelector(state => state.products);
    const similarProducts = useSelector(state => state.similarProducts);
    console.log(products)

    function handleTab(catId, i) {
        setActivePanel(i)
        getProducts(catId)
    }

    const getProducts = (catId) => {
        dispatch(getProductList(`${store_base_url}/product/?active=true&category=${catId}`))

    }
    return (
        <div>
            <section className={classnames(styles.tabs, '')}>
                {
                    !_.isEmpty(productCat.data) ?
                        productCat.data.map((item, i) => (
                            <span
                                key={`cat-${i}`}
                                onClick={() => handleTab(item.id, i)}
                                className={classnames(styles.tab, activePanel === i ? "opacity-100" : "bg-opacity-50", 'bg-primary transition ease-linear hover:bg-opacity-80 cursor-pointer')}
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
                    !_.isEmpty(productCat.data) ?
                        productCat.data.map((item, i) => (
                            <div key={`product-${i}`}
                                 className={classnames(styles.panel_item, 'animate__animated ', activePanel === i ? `${styles.active} ` : " ")}
                            >
                                <div className={'flex flex-row justify-between items-center py-8'}>
                                    <h4 className={classnames('text-gray-900 h-auto text-center uppercase text-2xl sm:text-4xl')}>{item.name}</h4>
                                    <img className={classnames('h-16')} src="static/image/rain-logo.png" alt=""/>
                                </div>
                                <div className={'bg-primary p-8'} dangerouslySetInnerHTML={{__html: item.description}}/>
                                <img className={'-mt-0.5'} src="static/image/wave-small-height.svg" alt=""/>
                                {/*category description section:start*/}
                                <section className="text-gray-600 body-font">
                                    <div className="container px-5 py-24 mx-auto">
                                        <div className="flex flex-wrap -m-4 text-center">
                                            <div className="p-4 sm:w-1/4 w-1/2 leading-8">
                                                <Popover className="relative">
                                                    {({open}) => (
                                                        <>
                                                            <Popover.Button>
                                                                    <span
                                                                        className="material-icons text-6xl text-primary">emoji_events</span>
                                                                <p className="leading-relaxed uppercase font-bold text-primary">Milestone</p>
                                                            </Popover.Button>
                                                            <Transition
                                                                as={Fragment}
                                                                enter="transition ease-out duration-200"
                                                                enterFrom="opacity-0 translate-y-1"
                                                                enterTo="opacity-100 translate-y-0"
                                                                leave="transition ease-in duration-150"
                                                                leaveFrom="opacity-100 translate-y-0"
                                                                leaveTo="opacity-0 translate-y-1"
                                                            >

                                                                {
                                                                    !_.isEmpty(item.milestone) ?
                                                                        <Popover.Panel
                                                                            className="absolute z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/4 sm:-translate-x-0 left-1/2 sm ">
                                                                            <ul
                                                                                className="overflow-hidden list-outside pl-8 list-disc p-4 text-left  rounded-lg shadow-lg bg-primary ring-1 ring-black ring-opacity-5">
                                                                                {item.milestone.map((item, i) => (
                                                                                    <li key={`milestone-${i}`}
                                                                                        className="text-gray-50 text-sm">
                                                                                        {item.title}
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        </Popover.Panel>
                                                                        :

                                                                        <></>
                                                                }

                                                            </Transition>
                                                        </>
                                                    )}
                                                </Popover>

                                            </div>

                                            <div className="p-4 sm:w-1/4 w-1/2 leading-8">

                                                <Popover className="relative">
                                                    {({open}) => (
                                                        <>
                                                            <Popover.Button>
                                                                   <span
                                                                       className="material-icons text-6xl text-primary">home_repair_service</span>
                                                                <p className="leading-relaxed uppercase font-bold text-primary">
                                                                    UNIQUE FEATURES
                                                                </p>
                                                            </Popover.Button>
                                                            <Transition
                                                                as={Fragment}
                                                                enter="transition ease-out duration-200"
                                                                enterFrom="opacity-0 translate-y-1"
                                                                enterTo="opacity-100 translate-y-0"
                                                                leave="transition ease-in duration-150"
                                                                leaveFrom="opacity-100 translate-y-0"
                                                                leaveTo="opacity-0 translate-y-1"
                                                            >

                                                                {
                                                                    !_.isEmpty(item.uniqueFeature) ?
                                                                        <Popover.Panel
                                                                            className="absolute z-50 w-screen max-w-sm px-4 mt-3 transform -translate-x-3/4 sm:translate-x-0 left-1/2  ">
                                                                            <ul
                                                                                className=" bg-scroll  list-outside pl-8 pb-8 list-disc p-4 text-left  rounded-lg shadow-lg bg-primary ring-1 ring-black ring-opacity-5">
                                                                                {item.uniqueFeature.map((item, i) => (
                                                                                    <li key={`uniqueFeature-${i}`}
                                                                                        className="text-white text-sm">
                                                                                        {item.title}
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        </Popover.Panel>
                                                                        :

                                                                        <></>
                                                                }

                                                            </Transition>
                                                        </>
                                                    )}
                                                </Popover>
                                            </div>
                                            <div className="p-4 sm:w-1/4 w-1/2 leading-8">

                                                <Popover className="relative">
                                                    {({open}) => (
                                                        <>
                                                            <Popover.Button>
                                                                <span
                                                                    className="material-icons text-6xl text-primary">source</span>
                                                                <p className="leading-relaxed uppercase font-bold text-primary">SOURCE
                                                                    OF RAW MATERIAL</p>
                                                            </Popover.Button>
                                                            <Transition
                                                                as={Fragment}
                                                                enter="transition ease-out duration-200"
                                                                enterFrom="opacity-0 translate-y-1"
                                                                enterTo="opacity-100 translate-y-0"
                                                                leave="transition ease-in duration-150"
                                                                leaveFrom="opacity-100 translate-y-0"
                                                                leaveTo="opacity-0 translate-y-1"
                                                            >

                                                                {
                                                                    !_.isEmpty(item.rawMaterial) ?
                                                                        <Popover.Panel
                                                                            className="absolute z-50  max-w-xs px-4 mt-3 transform   ">
                                                                            <ul
                                                                                className=" bg-scroll  list-outside pl-8 pb-8 list-disc p-4 text-left  rounded-lg shadow-lg bg-primary ring-1 ring-black ring-opacity-5">
                                                                                {item.rawMaterial.map((item, i) => (
                                                                                    <li key={`rawMaterial-${i}`}
                                                                                        className="text-white text-sm">
                                                                                        {item.title}
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        </Popover.Panel>
                                                                        :

                                                                        <></>
                                                                }

                                                            </Transition>
                                                        </>
                                                    )}
                                                </Popover>
                                            </div>
                                            <div className="p-4 sm:w-1/4 w-1/2 leading-8">

                                                <Popover className="relative">
                                                    {({open}) => (
                                                        <>
                                                            <Popover.Button>
                                                                     <span
                                                                         className="material-icons text-6xl text-primary">language</span>
                                                                <p className="leading-relaxed uppercase font-bold text-primary ">EXPORT
                                                                    MARKET</p>
                                                            </Popover.Button>
                                                            <Transition
                                                                as={Fragment}
                                                                enter="transition ease-out duration-200"
                                                                enterFrom="opacity-0 translate-y-1"
                                                                enterTo="opacity-100 translate-y-0"
                                                                leave="transition ease-in duration-150"
                                                                leaveFrom="opacity-100 translate-y-0"
                                                                leaveTo="opacity-0 translate-y-1"
                                                            >

                                                                {
                                                                    !_.isEmpty(item.exportMarket) ?
                                                                        <Popover.Panel
                                                                            className="absolute z-50 w-screen max-w-xs px-4 mt-3 transform -translate-x-3/4 sm:transform-x-0 left-1/2  ">
                                                                            <ul
                                                                                className=" bg-scroll  list-outside pl-8 pb-8 list-disc p-4 text-left  rounded-lg shadow-lg bg-primary ring-1 ring-black ring-opacity-5">
                                                                                {item.exportMarket.map((item, i) => (
                                                                                    <li key={`exportMarket-${i}`}
                                                                                        className="text-white text-sm">
                                                                                        {item.title}
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        </Popover.Panel>
                                                                        :

                                                                        <></>
                                                                }

                                                            </Transition>
                                                        </>
                                                    )}
                                                </Popover>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/*category description section:end*/}
                                {/*product  section:start*/}
                                <section className={classnames('product_slider flex-col-reverse md:flex mb-8')}>
                                    <section className={'flex flex-col-reverse md:flex-row'}>
                                        {/*left section:start*/}
                                        <div
                                            className={classnames(' w-full md:w-3/12 p-3 md:px-8 md:border-r  border-primary')}>
                                            <h3 className={'uppercase text-xl text-gray-50 md:text-sm text-center md:text-left text-primary font-bold mb-2'}>Related
                                                Products</h3>
                                            <Splide
                                                // className={"splide_hide_arrow"}
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
                                                {
                                                    !_.isEmpty(similarProducts.data.results) ?
                                                        similarProducts.data.results.map((slide, i) => (
                                                            <SplideSlide key={`slide!!-${i}`}>
                                                                <img src={slide.thumbnail} />
                                                            </SplideSlide>
                                                        )) :
                                                        <div className={'text-primary h-40 -ml-64 flex justify-center items-center'}> Product Not Available</div>
                                                }
                                            </Splide>
                                        </div>
                                        {/*left section:end*/}
                                        {/*right section:start*/}
                                        <div className={classnames('w-full md:w-9/12 p-3')}>
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
                                                {
                                                    !_.isEmpty(products.data) ?
                                                        products.data.map((product, i) => (
                                                            <SplideSlide key={`slide@@-${i}`}>
                                                                <img className={classnames('cursor-pointer')}
                                                                     src={product.thumbnail} alt={product.name}/>
                                                                <div
                                                                    className={classnames('w-full h-full flex flex-col items-center slider_content justify-center bg-primary bg-opacity-70')}>
                                                                    <h5 className={'text-white  text-center mt-2 '}>
                                                                        {product.name}
                                                                    </h5>
                                                                    <Link href={`/shop/product/${product.id}`}>
                                                                        <a className={'text-center py-2 px-3 mt-1 bg-primary transition ease-linear hover:bg-secondary'}
                                                                           href="#">
                                                                            <button>Details</button>
                                                                        </a>
                                                                    </Link>
                                                                </div>

                                                            </SplideSlide>
                                                        ))
                                                        :
                                                        <div className={'text-primary h-40 flex justify-center items-center'}> Product Not Available</div>
                                                }

                                            </Splide>


                                        </div>
                                        {/*right section:end*/}

                                    </section>
                                </section>
                                {/*product  section:start*/}

                            </div>
                        )) :
                        <></>
                }
            </section>
        </div>
    );
};

export default ContentSlider;