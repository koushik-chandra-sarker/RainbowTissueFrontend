import React, {useState} from 'react';
import {Splide, SplideSlide} from "splide-nextjs/react-splide/dist/js";
import InnerImageZoom from "react-inner-image-zoom";
import classnames from 'classnames'
import Header from "../components/header";

const productImage = [
    {
        src: "/static/image/product/1_1.jpg",
        url: "#"
    },
    {
        src: "/static/image/product/1_2.jpg",
        url: "#"
    },
    {
        src: "/static/image/product/5_2.jpg",
        url: "#"
    },
    {
        src: "/static/image/product/6_2.jpg",
        url: "#"
    },
    {
        src: "/static/image/product/10_2.jpg",
        url: "#"
    },
    {
        src: "/static/image/banner/square/01-01.jpg",
        url: "#"
    },

]
const Index = () => {

    const [productBigImage, setProductBigImage] = useState(productImage[0].src)
    const [activeThumbnail, setActiveThumbnail] = useState(0)

    function handleSliderClick(key, src) {
        // e.target.parentElement.parentElement.classList.add('is-active')
        setActiveThumbnail(key)
        setProductBigImage(src)
    }

    return (
        <>
            <Header/>
            {/* product view */}
            <div className="container pt-6 mt-4 md:pb-6 lg:grid lg:grid-cols-2 md:gap-10">
                {/* product image */}
                <div>
                    <div
                        className={'w-full  border border-primary flex  items-center justify-center overflow-hidden'}>
                        {/*<img id="main-img" src={productBigImage}/>*/}
                        <InnerImageZoom src={productBigImage} zoomSrc={productBigImage} zoomScale={1} hasSpacer={true}/>
                        {/*<img id="main-img" src="/static/image/product/1_1.jpg"/>*/}
                    </div>
                    <div className="mt-4 mb-6 product_details">
                        <Splide
                            options={{
                                gap: '0.75rem',
                                pagination: false,
                                width: "100rem",
                                perPage: 5,
                                cover: true,
                                focus: 'left',
                                isNavigation: true,
                                updateOnMove: true,
                                classes: {
                                    arrows: 'splide__arrows text-primary',
                                    arrow: 'splide__arrow text-primary',
                                    prev: 'splide__arrow--prev text-primary bg-primary',
                                    next: 'splide__arrow--next text-primary',
                                },
                                breakpoints: {
                                    640: {
                                        perPage: 4,
                                    },
                                },
                            }}


                        >
                            {productImage.map((slide, key) => (
                                <SplideSlide key={slide.src} className={activeThumbnail === key ? "active" : ''}>
                                    <div onClick={(e) => handleSliderClick(key, slide.src)}>
                                        <img src={slide.src} alt={slide.alt}/>
                                    </div>
                                </SplideSlide>
                            ))}
                        </Splide>
                    </div>
                </div>
                {/* product image end */}
                {/* product content */}
                <div>
                    <h2 className="md:text-3xl text-2xl font-medium uppercase mb-2">Rainbow 200 Sheet Facial Tissue Box</h2>
                    <div className="flex items-center mb-4">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span><i className="fas fa-star"/></span>
                            <span><i className="fas fa-star"/></span>
                            <span><i className="fas fa-star"/></span>
                            <span><i className="fas fa-star"/></span>
                            <span><i className="fas fa-star"/></span>
                        </div>
                        <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
                    </div>
                    <div className="space-y-2">
                        <p className="text-gray-800 font-semibold space-x-2">
                            <span>Availability: </span>
                            <span className="text-green-600">In Stock</span>
                        </p>
                        <p className="space-x-2">
                            <span className="text-gray-800 font-semibold">Brand: </span>
                            <span className="text-gray-600">Facial Tissue</span>
                        </p>
                        <p className="space-x-2">
                            <span className="text-gray-800 font-semibold">Category: </span>
                            <span className="text-gray-600">Sofa</span>
                        </p>
                        <p className="space-x-2">
                            <span className="text-gray-800 font-semibold">SKU: </span>
                            <span className="text-gray-600">BE45VGRT</span>
                        </p>
                    </div>
                    <div className="mt-4 flex items-baseline gap-3">
                        <span className="text-primary font-semibold text-xl">$450.00</span>
                        <span className="text-gray-500 text-base line-through">$500.00</span>
                    </div>
                    <p className="mt-4 text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem quaerat
                        excepturi labore blanditiis
                    </p>
                    {/* size */}
                    <div className="mt-4">
                        <h3 className="text-base text-gray-800 mb-1">Size</h3>
                        <div className="flex items-center gap-2">
                            {/* single size */}
                            <div className="size-selector">
                                <input type="radio" name="size" className="hidden" id="size-xs"/>
                                <label htmlFor="size-xs"
                                       className="text-xs p-1 border border-gray-200 rounded-sm  flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                                    50 pcs
                                </label>
                            </div>
                            {/* single size end */} {/* single size */}
                            <div className="size-selector">
                                <input type="radio" name="size" className="hidden" id="size-s"/>
                                <label htmlFor="size-s"
                                       className="text-xs p-1 border-2 border-primary rounded-sm  flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                                   100 pcs
                                </label>
                            </div>
                            {/* single size end */} {/* single size */}
                            <div className="size-selector">
                                <input type="radio" name="size" className="hidden" id="size-m" defaultChecked/>
                                <label htmlFor="size-m"
                                       className="text-xs p-1 border border-gray-200 rounded-sm  flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                                   150 pcs
                                </label>
                            </div>
                            {/* single size end */}
                        </div>
                    </div>
                    {/* size end */} {/* color */}
                    <div className="mt-4">
                        <h3 className="text-base text-gray-800 mb-1">Color</h3>
                        <div className="flex items-center gap-2">
                            {/* single color */}
                            <div className="color-selector">
                                <input type="radio" name="color" className="hidden" id="color-red" defaultChecked/>
                                <label htmlFor="color-red" style={{backgroundColor: '#a6e3ff'}}
                                       className="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm">
                                </label>
                            </div>
                            {/* single color end */} {/* single color */}
                            <div className="color-selector">
                                <input type="radio" name="color" className="hidden" id="color-white"/>
                                <label htmlFor="color-white" style={{backgroundColor: '#fff'}}
                                       className="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm">
                                </label>
                            </div>
                            {/* single color end */} {/* single color */}
                            <div className="color-selector">
                                <input type="radio" name="color" className="hidden" id="color-black"/>
                                <label htmlFor="color-black" style={{backgroundColor: '#f00d51'}}
                                       className="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm">
                                </label>
                            </div>
                            {/* single color end */}
                        </div>
                    </div>
                    {/* color end */} {/* quantity */}
                    <div className="mt-4">
                        <h3 className="text-base text-gray-800 mb-1">Quantity</h3>
                        <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                            <div
                                className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-
                            </div>
                            <div className="h-8 w-10 flex items-center justify-center">4</div>
                            <div
                                className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+
                            </div>
                        </div>
                    </div>
                    {/* color end */} {/* add to cart button */}
                    <div className="flex gap-3 border-b border-gray-200 pb-5 mt-6">
                        <a href="#" className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase
                                hover:bg-transparent hover:text-primary transition text-sm flex items-center">
                            <span className="mr-2"><i className="fas fa-shopping-bag"/></span> Add to cart
                        </a>
                        <a href="#" className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase
                                hover:bg-transparent hover:text-primary transition text-sm">
                            <span className="mr-2"><i className="far fa-heart"/></span> Wishlist
                        </a>
                    </div>
                    {/* add to cart button end */} {/* product share icons */}
                    <div className="flex space-x-3 mt-4">
                        <a href="#"
                           className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                            <i className="fab fa-facebook-f"/>
                        </a>
                        <a href="#"
                           className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                            <i className="fab fa-twitter"/>
                        </a>
                        <a href="#"
                           className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    {/* product share icons end */}
                </div>
                {/* product content end */}
            </div>
            {/* product view end */}
            {/* product details and review */}
            <div className="container pb-16">
                {/* detail buttons */}
                <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
                    Product Details
                </h3>
                {/* details button end */} {/* details content */}
                <div className="lg:w-4/5 xl:w-3/5 pt-6">
                    <div className="space-y-3 text-gray-600">
                        <p>
                            Incredible graphics performanceMacBook Air can take on more graphics-intensive projects
                            than ever. For the first time, content creators can edit and seamlessly play back
                            multiple streams of full‑quality 4K video without dropping a frame.
                        </p>
                        <p>
                            Incredible graphics performanceMacBook Air can take on more graphics-intensive projects
                            than ever. For the first time, content creators can edit and seamlessly play back
                            multiple streams of full‑quality 4K video without dropping a frame.
                        </p>
                        <p>
                            Apps on MacBook Air can use machine learning (ML) to automatically retouch photos like a
                            pro, make smart tools such as magic wands and audio filters more accurate at
                            auto‑detection, and so much more. That’s not just brain power — that’s the power of a
                            full stack of ML technologies.
                        </p>
                    </div>
                    {/* details table */}
                    <table className="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
                        <tbody>
                        <tr>
                            <th className="py-2 px-4 border border-gray-300 w-40 font-medium">Color</th>
                            <td className="py-2 px-4 border border-gray-300">Black, Brown, Red</td>
                        </tr>
                        <tr>
                            <th className="py-2 px-4 border border-gray-300 w-40 font-medium">Material</th>
                            <td className="py-2 px-4 border border-gray-300">Artificial Leather</td>
                        </tr>
                        <tr>
                            <th className="py-2 px-4 border border-gray-300 w-40 font-medium">Weight</th>
                            <td className="py-2 px-4 border border-gray-300">55kg</td>
                        </tr>
                        </tbody>
                    </table>
                    {/* details table */}
                </div>
                {/* details content end */}
            </div>
            {/* product details and review end */}
            {/* related products */}
            <div className="container pb-16">
                <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">related products</h2>
                {/* product wrapper */}
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
                    {
                        [1, 2, 3, 4].map((v,key) => (
                            <div key={key} className="group rounded bg-white shadow overflow-hidden">
                                {/* product image */}
                                <div className="relative">
                                    {/* product image */}
                                    <a className="block relative h-48 rounded overflow-hidden transition hover:scale-105">
                                        <img alt="ecommerce"
                                             className={classnames("object-cover object-center w-full h-full block ")}
                                             src='/static/image/product/2-2-2.jpg'/>
                                    </a>
                                    {/* product image: end */}
                                    <div
                                        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                        <a href="view.html"
                                           className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center">
                                            <i className="fas fa-search"/>
                                        </a>
                                        <a href="#"
                                           className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center">
                                            <i className="far fa-heart"/>
                                        </a>
                                    </div>
                                </div>
                                {/* product image end */}
                                {/* product content */}
                                <div className="mt-4 px-4">
                                    {/* product category */}
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Facial
                                        Tissue</h3>
                                    {/* product title */}
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Rainbow 200 Sheet
                                        Facial Tissue Box</h2>
                                    {/* product price */}
                                    <div className="flex items-baseline my-1 space-x-2">
                                        <p className="text-xl text-primary font-roboto font-semibold">$45.00</p>
                                        <p className="text-sm text-gray-400 font-roboto line-through">$55.00</p>
                                    </div>
                                    {/* product price:end */}
                                    {/* product star */}
                                    <div className="flex items-center">
                                        <div className="flex gap-1 text-sm text-yellow-400">
                                            <span><i className="fas fa-star"/></span>
                                            <span><i className="fas fa-star"/></span>
                                            <span><i className="fas fa-star"/></span>
                                            <span><i className="fas fa-star"/></span>
                                            <span><i className="fas fa-star"/></span>
                                        </div>
                                        <div className="text-xs text-gray-500 ml-3">(150)</div>
                                    </div>
                                    {/* product star: end */}
                                </div>
                                {/* product button */}
                                <a href="#"
                                   className="block w-full py-1 mt-2 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
                                    Add to Cart
                                </a> {/* product button end */}
                            </div>
                        ))
                    }

                </div>
                {/* product wrapper end */}
            </div>
            {/* related products end */}
        </>

    )
        ;
};

export default Index;