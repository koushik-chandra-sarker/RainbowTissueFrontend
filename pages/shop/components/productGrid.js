import React from 'react';
import styles from '../Index.module.scss'
import classnames from 'classnames'

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

const ProductGrid = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto">
                <div className="flex flex-wrap -m-4">
                    {
                        products.map((product, i) => (
                            <div key={i} className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full p-1 cursor-pointer">
                                <div className={'border border-primary p-3'}>
                                    {/* product image */}
                                    <a className="block relative h-48 rounded overflow-hidden transition hover:scale-105">
                                        <img alt="ecommerce"
                                             className={classnames(styles.product_img, "object-cover object-center w-full h-full block ")}
                                             src={product.src}/>
                                    </a>
                                    {/* product image: end */}

                                    <div className="mt-4">
                                        {/* product category */}
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category}</h3>
                                        {/* product title */}
                                        <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
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
                                        {/* product button */}
                                        <a href="#"
                                           className="block w-full py-1 mt-2 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
                                            Add to Cart
                                        </a> {/* product button end */}
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;