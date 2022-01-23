import React from 'react';
import {Rating} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const ReviewCard = ({review}) => {

    return (
        <div>
            <div className="flex   gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap mb-2">
                <div className="w-20 flex-shrink-0">
                    <img src={review.product.thumbnail} className="w-full"/>
                </div>
                <div className="w-full">
                    <p>{review.product.name}</p>
                    <Rating
                        name="simple-controlled"
                        size="large"
                        value={review.rating}
                        readOnly={true}
                        // onChange={(event, newValue) => {
                        //     setValue(newValue);
                        // }}
                    />
                    <p className={'text-sm'}>{review.comment}</p>
                </div>
                <div className="flex">
                    <EditIcon className={"mr-4 cursor-pointer"}/>
                    <DeleteIcon className={'cursor-pointer'}/>
                </div>
            </div>
        </div>
    );
};
ReviewCard.getInitialProps = async ({query}) => {
    const {review} = query
    return {
        props: {
            review: review
        },
    }
}


export default ReviewCard;