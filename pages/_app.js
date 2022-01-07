import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'
import '../styles/preloader.scss'
import "animate.css"
import Layout from "../components/layout/Layout";
import 'splide-nextjs/splide/dist/css/themes/splide-skyblue.min.css';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import store from "../services/Store";
import {getWebsiteDetails} from "../services/website/WebsiteAction";
import {useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {getCategoryList} from "../services/store/category/CategoryAction";
import 'sweetalert2/src/sweetalert2.scss'
import {verifyToken} from "../services/login/Action";


function MyApp({Component, pageProps, theme}) {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getWebsiteDetails());
        dispatch(getCategoryList());
        verifyToken()
    },[dispatch])
    return (
        <Layout>
            <Component {...pageProps} />
            <ToastContainer />
        </Layout>
    )
}
export default store.withRedux(MyApp)
