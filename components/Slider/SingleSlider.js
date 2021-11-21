import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import customCss from './SingleSlider.module.scss'
// import 'react-animated-slider/build/horizontal.css';
// import styles from './SingleSlider.module.scss'
// import classnames from 'classnames';

const content = [
    {image: "static/image/slider-1.jpg", title: 'First item', description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum', button:"See More"},
    {image: 'static/image/slider-2.jpg', title: 'Second item', description: 'Lorem ipsum', button:"See More"},
    {image: 'static/image/slider-3.jpg', title: 'Third item', description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum', button:"See More"}
];
const SingleSlider = () => {
    return (
        < Slider
            autoplay={3000}
            classNames={customCss}
        >
            {content.map((item, index) => (
                < div
                    key={index}
                    className={customCss.sliderContent}
                    style={{background: `url( '${item.image}') no-repeat  center  center `}}
                >
                    < div className={customCss.inner}>
                        <h1> {item.title} </ h1>
                        <p> {item.description} </ p>
                        <button> {item.button} </ button>
                    </ div>
                < / div>
            ))}
        </ Slider>
    );
};

export default SingleSlider;