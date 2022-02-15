import React from 'react';
import Link from "next/link"
import ReviewCard from "../profile/components/ReviewCard";
const SearchedProductCard = ({product}) => {
    return (
        <Link href={"#"}>
        <div className=" grid grid-cols-10 gap-4 cursor-pointer border border-gray-200 rounded">
            <img src={product.thumbnail} className="col-span-2 "/>
            <div className="break-words text-xs sm:text-base col-span-8 p-2">
                <p>{product.name}</p>
                <p className={"text-sm text-primary"}>{product.currency} {product.price}</p>
            </div>
        </div>
        </Link>
    );
};
SearchedProductCard.getInitialProps = async ({query}) => {
    const {product} = query
    return {
        props: {
            product: product
        },
    }
}

export default SearchedProductCard;