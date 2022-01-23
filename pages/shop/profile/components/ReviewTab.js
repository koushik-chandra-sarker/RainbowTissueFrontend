import React from 'react';
import ReviewCard from "./ReviewCard";

const ReviewTab = ({reviews}) => {

    return (
        <div>
            {reviews.map((review, keys)=>(
                <ReviewCard review={review} key={`profile-review-card-${keys}`}/>
            ))}
        </div>
    );
};
ReviewTab.getInitialProps = async ({query}) => {
    const {reviews} = query
    return {
        props: {
            reviews: reviews
        },
    }
}


export default ReviewTab;