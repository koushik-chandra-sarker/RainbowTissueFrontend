import React, {Fragment, useEffect, useRef, useState} from 'react';
import {Splide, SplideSlide} from "splide-nextjs/react-splide/dist/js";
import InnerImageZoom from "react-inner-image-zoom";
import classnames from 'classnames'
import Header from "../components/header";
import Router, {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {getAverageRating, getProduct, getSimilarProductList} from "../../../services/store/product/ProductAction";
import _ from "lodash";
import {toast} from "react-toastify";
import {addCart, getTotalCartByRequestedUser} from "../../../services/store/cart/Action";
import {authenticated, getUserFromLocalStorage} from "../../../services/common/Action";
import Swal from 'sweetalert2'
import Link from "next/link";
import styles from "../Index.module.scss";
import {CircularProgress, Pagination, Rating} from "@mui/material";
import {frontend_static_url, store_base_url} from "../../../constants";
import ReviewCard from "./reviewCard";
import {getRatingsByProductId, getRatingsObject, getReview, saveReview} from "../../../services/store/review/Action";
import {isPreloaderActive} from "../../../services/preloader/PreloaderAction";

const limit = 2
const Product = () => {
    const router = useRouter();
    let id = router.query.id
    const dispatch = useDispatch()
    const product = useSelector(store => store.product)
    const similarProducts = useSelector(state => state.similarProducts);
    const reviews = useSelector(store => store.reviews);
    const ratings = useSelector(store => store.ratings);
    const user = getUserFromLocalStorage()
    const auth = authenticated();
    const [review, setReview] = useState({user: null, product: null, comment: "", rating: null})
    const [offset, setOffset] = useState(0)
    const [ratingsCalculated, setRatingsCalculated] = useState({})
    const containerRef = useRef();
    const {current} = containerRef;
    useEffect(() => {
        if (!_.isEmpty(ratings.data)) {
            setRatingsCalculated(getRatingsObject(ratings.data))
        }

    }, [ratings])
    const [cartItem, setCartItem] = useState({
        quantity: 1,
    })
    useEffect(() => {
        if (id !== undefined) {
            dispatch(getProduct(id))
            dispatch(getSimilarProductList(`${store_base_url}/product/?active=true&limit=4&random=true`))
            getReviewPaginated(id)
            dispatch(getRatingsByProductId(id))
        }
    }, [id])
    useEffect(() => {
        if (!_.isEmpty(product.data.images)) {
            setProductBigImage(product.data.images[0].image)
        }
        setCartItem({
            ...cartItem,
            total: product.data.discount_price !== 0 ? product.data.discount_price : product.data.price
        })

    }, [product])
    const [productBigImage, setProductBigImage] = useState('')
    const [activeThumbnail, setActiveThumbnail] = useState(0)

    function handleSliderClick(key, src) {
        setActiveThumbnail(key)
        setProductBigImage(src)
    }

    function handleQuantity(value) {
        let q = Number(cartItem.quantity) + (value)
        if (q > product.data.stock) {
            toast.error(`Product Available ${cartItem.product.stock}`, {autoClose: 10000, theme: "colored"});
            return
        }
        let total = product.data.discount_price !== 0 ? product.data.discount_price * q : product.data.price * q
        if (q > 0) {
            setCartItem({...cartItem, quantity: q, total: total})
        }
    }

    function handleQuantityByInput(value) {
        if (value > product.data.stock) {
            toast.error(`Product Available ${product.data.stock}`, {autoClose: 10000, theme: "colored"});
            return
        }
        if (value > 0) {
            let total = product.data.discount_price !== 0 ? product.data.discount_price * value : product.data.price * value
            setCartItem({...cartItem, quantity: value, total: total})
            // const quantity = value-cartItem.quantity
            // summaryCalc(product.data.discount_price !==0 ? product.data.discount_price*(quantity): product.data.price*(quantity),quantity)
        }
    }


    function handleCart() {
        if(auth){
            const user = getUserFromLocalStorage();
            let cart = cartItem;

            if (user !== null) {
                cart.user = user.pk
                cart.product = product.data.id
                addCart(cart).then(response => {
                    console.log(response)
                    if (response.data.message === 'success') {
                        dispatch(getTotalCartByRequestedUser())
                        Swal.fire({
                            title: "Product Added To Cart",
                            text: 'Are you checkout this product now.',
                            icon: 'success',
                            confirmButtonText: 'Yes',
                            cancelButtonText: "Latter",
                            showCancelButton: true
                        }).then(value => {
                            if (value.isConfirmed) {
                                Router.push('/shop/cart')
                            }
                        })
                    }
                })
            }
        }
        else{
            Swal.fire({
                title: "If you want to add product to cart, Please login first",
                text: 'Are you want to login now.',
                icon: 'info',
                confirmButtonText: 'Yes',
                cancelButtonText: "Latter",
                showCancelButton: true
            }).then(value => {
                if (value.isConfirmed) {
                    Router.push(`/shop/login/?backPrevious=true`)
                }
            })
        }
    }

    useEffect(() => {
        if (user !== null) {
            setReview({...review, user: user.pk, product: Number(id)})
        }

    }, [])

    useEffect(() => {
        dispatch(isPreloaderActive(false))
    }, [current]);

    function handleComment() {
        if (review.rating === null) {
            return toast.error("Please Give Product Rating.", {theme: "colored"})
        }
        if (review.comment === "") {
            return toast.error("Please Leave Your Comment.", {theme: "colored"})
        }
        if (review.user === null) {
            return toast.error("Something went wrong! Please try again.", {theme: "colored"})
        }

        saveReview(review).then(response => {
            if (response.status === 201) {
                getReviewPaginated(id)
                setReview({...review, comment: "", rating: null})
                toast.success("Review successfully posted", {theme: "colored"})
            } else toast.error("Something want wrong!", {theme: "colored"})
        }).catch(reason => {
            toast.error(reason, {theme: "colored"})
        })

    }

    function getReviewPaginated(id) {
        dispatch(getReview(id, limit, offset))
    }

    function handleReviewPagination(e, offset) {
        setOffset(offset - 1)
    }

    useEffect(() => {
        getReviewPaginated(id)
    }, [offset])

    return (
        <>
            <Header/>

            {
                product.loading ?
                    <div className={'flex h-52 items-center justify-center p-4'}><CircularProgress/></div>
                    :
                    <>
                        {
                            !_.isEmpty(product.data) ?
                                <>
                                    {/* product view */}
                                    <div
                                        className="container pt-6 mt-4null md:pb-6 lg:grid lg:grid-cols-2 md:gap-10 single-product">
                                        {/* product image */}
                                        <div>
                                            <div
                                                className={'w-full max-h-100  border border-primary flex  items-center justify-center overflow-hidden'}>
                                                <InnerImageZoom src={productBigImage} zoomSrc={productBigImage}
                                                                zoomPreload={true}/>

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
                                                    {
                                                        !_.isEmpty(product.data.images) ?
                                                            product.data.images.map((slide, key) => (
                                                                <SplideSlide key={`product-slider-${slide.id}`}
                                                                             className={activeThumbnail === key ? "active" : ''}>
                                                                    <div
                                                                        onClick={() => handleSliderClick(key, slide.image)}>
                                                                        <img className={'object-contain'}
                                                                             src={slide.small_image} alt={"thumbnail"}/>
                                                                    </div>
                                                                </SplideSlide>
                                                            )) :
                                                            <></>
                                                    }
                                                </Splide>
                                            </div>
                                        </div>
                                        {/* product image end */}
                                        {/* product content */}
                                        <div>
                                            <h2 className="md:text-3xl text-2xl font-medium uppercase mb-2">{product.data.name}</h2>
                                            <d2iv className="flex items-center mb-4">
                                                <Rating
                                                    className={'col-span-3 sm:col-span-4 xl:col-span-2'}
                                                    name="simple-controlled"
                                                    value={getAverageRating(product.data.reviews)}
                                                    readOnly
                                                    size={"small"}
                                                    // onChange={(event, newValue) => {
                                                    //     setValue(newValue);
                                                    // }}
                                                />
                                                <div className="text-xs text-gray-500 ml-3">({product.data.reviews? product.data.reviews.length:0})</div>
                                            </d2iv>
                                            <div className="space-y-2">
                                                <p className="text-gray-800 font-semibold space-x-2">
                                                    <span>Availability: </span>
                                                    {
                                                        product.data.stock > 0 ?
                                                            <span className="text-green-600">In Stock</span>
                                                            :
                                                            <span className="text-red-600">Out Of Stock</span>
                                                    }

                                                </p>
                                                <p className="space-x-2">
                                                    <span className="text-gray-800 font-semibold">Brand: </span>
                                                    <span className="text-gray-600">Rainbow Tissue</span>
                                                </p>
                                                <p className="space-x-2">
                                                    <span className="text-gray-800 font-semibold">Category: </span>
                                                    <span className="text-gray-600">
                                                        {
                                                            !_.isEmpty(product.data.category) ?
                                                                product.data.category.map((cat, i) => (
                                                                    <Fragment key={`product-view-cat-${i}`}>
                                                                        {
                                                                            i > 0 ? <>, {cat.name}</> : cat.name
                                                                        }
                                                                    </Fragment>

                                                                )) : "Undefine"
                                                        }
                                                    </span>

                                                </p>
                                                {
                                                    product.data.sku &&
                                                    <p className="space-x-2">
                                                        <span className="text-gray-800 font-semibold">SKU: </span>
                                                        <span className="text-gray-600">{product.data.sku}</span>
                                                    </p>
                                                }


                                            </div>
                                            <div className="mt-4 flex items-baseline gap-3">
                                                {
                                                    !(product.data.discount_price === 0) ?
                                                        <>
                                                            <span
                                                                className="text-primary font-semibold text-xl">{product.data.currency} {product.data.discount_price}</span>
                                                            <span
                                                                className="text-gray-500 text-base line-through">{product.data.currency} {product.data.price}</span>
                                                        </>
                                                        : <span
                                                            className="text-gray-500 text-base line-through">{product.data.currency} {product.data.price}</span>
                                                }
                                            </div>
                                            <div className="mt-4"
                                                 dangerouslySetInnerHTML={{__html: product.data.shortDescription}}/>
                                            {/* quantity */}
                                            <div className="mt-4">
                                                <h3 className="text-base text-gray-800 mb-1">Quantity</h3>
                                                <div
                                                    className="flex w-max border border-gray-300 text-gray-600 divide-x divide-gray-300">
                                                    <div
                                                        onClick={() => handleQuantity(-1)}
                                                        className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-
                                                    </div>
                                                    <input
                                                        onChange={(e) => handleQuantityByInput(e.target.value)}
                                                        type={'number'}
                                                        className="h-8 w-16 focus:outline-none text-center flex items-center justify-center cart_quantity"
                                                        value={cartItem.quantity}
                                                        min="1" max={product.data.stock}
                                                        maxLength={product.data.stock.length}
                                                    />
                                                    <div
                                                        onClick={() => handleQuantity(1)}
                                                        className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+
                                                    </div>
                                                </div>
                                            </div>
                                            {/* quantity end */}
                                            {/* add to cart button */}
                                            <div className="flex gap-3 border-b border-gray-200 pb-5 mt-6">
                                                <div
                                                    onClick={handleCart}
                                                    className="cursor-pointer bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase
                                                                     hover:bg-transparent hover:text-primary transition text-sm flex items-center">
                                                    <span className="mr-2"><i
                                                        className="fas fa-shopping-bag"/></span> Add to cart
                                                </div>
                                                {/* <a href="#" className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase
                                                                        hover:bg-transparent hover:text-primary transition text-sm">
                                                    <span className="mr-2"><i className="far fa-heart"/></span> Wishlist
                                                </a>*/}
                                            </div>
                                            {/* add to cart button end */}
                                            {/* product share icons */}
                                            <div className="flex space-x-3 mt-4">
                                                <p className={'flex items-center'}>Share: </p>
                                                <a target={"_blank"}
                                                   href={`https://www.facebook.com/sharer.php?u=${frontend_static_url}/shop/product/${product.data.id}`}
                                                   className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
                                                   rel="noreferrer">
                                                    <i className="fab fa-facebook-f"/>
                                                </a>
                                                <a target={"_blank"}
                                                   href={`https://twitter.com/share?url=${frontend_static_url}/shop/product/${product.data.id}`}
                                                   className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center" rel="noreferrer">
                                                    <i className="fab fa-twitter"/>
                                                </a>
                                                {/*<a href="#"*/}
                                                {/*   className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">*/}
                                                {/*    <i className="fab fa-instagram"/>*/}
                                                {/*</a>*/}
                                            </div>
                                            {/* product share icons end */}
                                        </div>
                                        {/* product content end */}
                                    </div>
                                    {/* product view end */}
                                    {/* product details and review */}
                                    <div className="container pb-16">
                                        {/* detail buttons */}
                                        <h3 className=" text-2xl border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
                                            Product Details
                                        </h3>
                                        {/* details button end */} {/* details content */}
                                        <div className="w-full pt-6">
                                            <div className={' text-base text-gray-600'}
                                                 dangerouslySetInnerHTML={{__html: product.data.description}}/>
                                            {/* details table */}
                                            {/*<table
                                                className="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
                                                <tbody>
                                                <tr>
                                                    <th className="py-2 px-4 border border-gray-300 w-40 font-medium">Color</th>
                                                    <td className="py-2 px-4 border border-gray-300">Black, Brown, Red
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="py-2 px-4 border border-gray-300 w-40 font-medium">Material</th>
                                                    <td className="py-2 px-4 border border-gray-300">Artificial
                                                        Leather
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="py-2 px-4 border border-gray-300 w-40 font-medium">Weight</th>
                                                    <td className="py-2 px-4 border border-gray-300">55kg</td>
                                                </tr>
                                                </tbody>
                                            </table>*/}
                                            {/* details table */}
                                        </div>
                                        {/* details content end */}
                                    </div>
                                    {/* product details and review end */}
                                    <div className="container pb-16">
                                        {/* detail buttons */}
                                        <h3 className="text-xl border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
                                            Ratings & Reviews
                                        </h3>

                                        {
                                            !_.isEmpty(ratingsCalculated) &&
                                            <div className={'flex flex-wrap sm:flex-nowrap sm:pt-10 pt-4 pb-4 border-b'}>
                                                <div className={'sm:w-1/6 pt-4'}>
                                                    <h1 className={'sm:text-4xl text-2xl'}>{ratingsCalculated.avegareRatings}<span
                                                        className={'sm:text-2xl text-xl text-gray-400'}>/5</span></h1>
                                                    <Rating
                                                        name="simple-controlled"
                                                        size="large"
                                                        value={ratingsCalculated.avegareRatings}
                                                        readOnly
                                                        // onChange={(event, newValue) => {
                                                        //     setValue(newValue);
                                                        // }}
                                                    />

                                                    <p className={'text-xs text-gray-400'}>27 Ratings</p>
                                                </div>
                                                <div className={'sm:w-3/6 sm:pl-12 sm:mt-0 mt-2 '}>
                                                    {[5, 4, 3, 2, 1].map((v, i) => (
                                                        <div key={`ratting-${i}`} className={'grid grid-cols-10'}>
                                                            <Rating
                                                                className={'col-span-3 sm:col-span-4 xl:col-span-2'}
                                                                name="simple-controlled"
                                                                value={v}
                                                                readOnly
                                                                size={"small"}
                                                                // onChange={(event, newValue) => {
                                                                //     setValue(newValue);
                                                                // }}
                                                            />
                                                            <div
                                                                className={'product-ratings-range flex pl-0  ml-1 align-items-center col-span-7 sm:col-span-6 xl:col-span-8'}>
                                                                <div className="middle">
                                                                    <div className="bar-container">
                                                                        <div className="bar-5"
                                                                             style={{width: `${ratingsCalculated.ratingsPercentArray[i]}%`}}/>
                                                                    </div>
                                                                </div>
                                                                <h4 className={'text-xs ml-2 text-right'}>{ratingsCalculated.ratingsArray[i]}</h4>

                                                            </div>
                                                        </div>
                                                    ))
                                                    }

                                                </div>
                                            </div>
                                        }

                                        <div className={'border-gray-400 py-4'}>
                                            <h2 className={'text-sm border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium'}>
                                                Product Reviews
                                            </h2>
                                            <section classNauthame={'w-full'}>
                                                {/*comment*/}
                                                {
                                                    auth ?
                                                        <>
                                                            <div className={'flex flex-col items-end py-5'}>
                                                                <Rating
                                                                    value={review.rating}
                                                                    name="simple-controlled"
                                                                    size="large"
                                                                    precision={1}
                                                                    onChange={(event, newValue) => {
                                                                        setReview({...review, rating: newValue})
                                                                    }}
                                                                />
                                                                <p>Rate This Product</p>
                                                            </div>
                                                            <div className={'w-full'}>
                                                                <input onChange={e => setReview({
                                                                    ...review,
                                                                    comment: e.target.value
                                                                })}
                                                                       value={review.comment} id={"product-comment"}
                                                                       type="text"
                                                                       className={'md:text-xl text-sm md:w-5/6 w-9/12 pl-2 border border-r-0 border-primary md:py-3 py-1 md:px-3 rounded-l-md focus:ring-primary focus:border-primary'}
                                                                       placeholder={'Write your review here '}
                                                                       htmlFor="comment"/>
                                                                <button onClick={handleComment}
                                                                        className={'md:text-xl text-sm md:w-1/6 w-3/12 md:py-3 py-1 bg-primary border border-primary text-white md:px-8 font-medium rounded-r-md hover:bg-transparent hover:text-primary transition'}>Submit
                                                                </button>
                                                            </div>

                                                        </>
                                                        : <></>

                                                }
                                            </section>
                                        </div>
                                        {
                                            !_.isEmpty(reviews.data) ?
                                                reviews.data.results.map((v, key) => (
                                                    <ReviewCard
                                                        key={`rating-${key}`}
                                                        review={v.comment}
                                                        username={v.user.username}
                                                        rate={v.rating}/>
                                                ))
                                                :
                                                <></>
                                        }
                                        {/*review pagination*/}
                                        <div className={'flex justify-center mt-4'}>
                                            {
                                                !_.isEmpty(reviews.data) ?
                                                    <Pagination count={reviews.data.count / limit} page={offset + 1}
                                                                onChange={function (event, page) {
                                                                    handleReviewPagination(event, page)

                                                                }}
                                                                color="primary"/> : <></>
                                            }

                                        </div>
                                    </div>


                                    {/* related products */}
                                    <div className="container pb-16">
                                        <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">related
                                            products</h2>
                                        <div className=" flex flex-wrap">
                                            {
                                                !_.isEmpty(similarProducts.data.results) ?
                                                    similarProducts.data.results.map((product, key) => (
                                                        <div key={`product-view-similar-product-${key}`}
                                                             className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full p-1 cursor-pointer animate__animated animate__fadeIn">
                                                            <div className={'border border-primary p-3'}>
                                                                {/* product image */}
                                                                <Link href={`/shop/product/${product.id}`}>
                                                                    <a>
                                                                        <div
                                                                            className="block relative h-48 rounded overflow-hidden transition hover:scale-105">
                                                                            <img alt="ecommerce"
                                                                                 className={classnames(styles.product_img, "object-contain object-center w-full h-full block ")}
                                                                                 src={product.thumbnail}/>
                                                                        </div>
                                                                        {/* product image: end */}

                                                                        <div className="mt-4">
                                                                            {/* product category */}
                                                                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{
                                                                                !_.isEmpty(product.category) ?
                                                                                    product.category.map((cat, i) => (
                                                                                        <Fragment
                                                                                            key={`product-view-similar-product-cat-${key}`}>
                                                                                            {
                                                                                                i > 0 ? <>, {cat.name}</> : cat.name
                                                                                            }
                                                                                        </Fragment>

                                                                                    )) : "Undefine"}</h3>
                                                                            {/* product title */}
                                                                            <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
                                                                            {/* product price */}
                                                                            <div
                                                                                className="flex items-baseline my-1 space-x-2">

                                                                                {
                                                                                    !(product.discount_price === 0) ?
                                                                                        <>
                                                                                            <p className="text-xl text-primary font-roboto font-semibold">{product.currency} {product.discount_price}</p>
                                                                                            <p className="text-sm text-gray-400 font-roboto line-through">{product.currency} {product.price}</p>
                                                                                        </>
                                                                                        :
                                                                                        <p className="text-xl text-primary font-roboto font-semibold">{product.currency} {product.price}</p>
                                                                                }

                                                                            </div>
                                                                            {/* product price:end */}
                                                                            {/* product star */}
                                                                            <div className="flex items-center">
                                                                                <Rating
                                                                                    className={'col-span-3 sm:col-span-4 xl:col-span-2'}
                                                                                    name="simple-controlled"
                                                                                    value={getAverageRating(product.reviews)}
                                                                                    readOnly
                                                                                    size={"small"}
                                                                                />
                                                                                {/*<div*/}
                                                                                {/*    className="text-xs text-gray-500 ml-3">(150)*/}
                                                                                {/*</div>*/}
                                                                            </div>
                                                                            {/* product star: end */}

                                                                        </div>
                                                                        {/* product button */}
                                                                    </a>
                                                                </Link>
                                                                {/*<div onClick={() => handleAddCart(product)}*/}
                                                                {/*     className="block w-full py-1 mt-2 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">*/}
                                                                {/*    Add to Cart*/}
                                                                {/*</div>*/}
                                                                {/* product button end */}

                                                            </div>
                                                        </div>

                                                    ))
                                                    :
                                                    <></>
                                            }
                                        </div>

                                        {/*</div>*/}
                                        {/* product wrapper end */}
                                    </div>
                                    {/* related products end */}
                                </>
                                : <></>
                        }
                    </>
            }

        </>

    );

};

export default Product;

