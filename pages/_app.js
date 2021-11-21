import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'
import "animate.css"
import Layout from "../components/layout/Layout";
import 'splide-nextjs/splide/dist/css/themes/splide-skyblue.min.css';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'

function MyApp({Component, pageProps, theme}) {
    return (

        <Layout>
            <Component {...pageProps} />
        </Layout>


    )
}

export default MyApp
