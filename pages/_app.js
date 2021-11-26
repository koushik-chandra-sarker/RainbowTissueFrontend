import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'
import "animate.css"
import Layout from "../components/layout/Layout";
import 'splide-nextjs/splide/dist/css/themes/splide-skyblue.min.css';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import {Provider} from 'react-redux'
import store from "../services/Store";
import withRedux from "next-redux-wrapper"
import {getWebsiteDetails} from "../services/website/WebsiteAction";
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react'

function MyApp({Component, pageProps, theme}) {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getWebsiteDetails());
    },[dispatch])
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
export default store.withRedux(MyApp)
