import React from 'react';
import {Rating} from "@mui/material";
import _ from "lodash";

const ReviewCard = ({username, review, rate}) => {
    function getProtectedUsername(username) {
        if (!_.isEmpty(username)){
            return username.substring(0, 3) + "******" + username.substring(username.length-2,username.length)
        }
        // return "Unknown"
    }

    return (
        <div>
            <div className={'py-4 border-b border-gray-200'}>
                <Rating
                    name="simple-controlled"
                    value={rate}
                />
                <div>
                    <h2 className={'text-xs mb-2'}>by {getProtectedUsername(username)}</h2>
                    <p className={'test-sm text-gray-500'}>{review}</p>
                </div>
            </div>
        </div>
    );
};
ReviewCard.getInitialProps = async ({query}) => {
    const {username, review, rate} = query
    return {
        props: {
            username: username,
            review: review,
            rate: rate
        },
    }
}


export default ReviewCard;