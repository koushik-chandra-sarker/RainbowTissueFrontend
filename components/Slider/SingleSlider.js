import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import customCss from './SingleSlider.module.scss'
// import 'react-animated-slider/build/horizontal.css';
// import styles from './SingleSlider.module.scss'
const SingleSlider = ({slider}) => {
    return (
        < Slider
            autoplay={3000}
            classNames={customCss}
        >

            {slider.map((item, index) => (
                < div
                    key={index}
                    className={customCss.sliderContent}
                    style={{background: `url( '${item.image}') no-repeat  center  center `}}
                >
                    {
                        item.title &&
                        < div className={customCss.inner}>
                            <h1> {item.title} </ h1>
                            <p> {item.subTitle} </ p>
                        </ div>
                    }

                < / div>
            ))}
        </ Slider>
    );
};

SingleSlider.getInitialProps = async ({query}) => {
    const {slider} = query
    return {
        props: {
            slider: slider
        }
    }
}

export default SingleSlider;