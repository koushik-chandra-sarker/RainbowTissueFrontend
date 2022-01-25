import React, {useState} from 'react';
import {Button, Rating} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import {deleteReviewById} from "../../../../services/store/review/Action";
import {toast} from "react-toastify";
import {blue, pink, yellow} from "@mui/material/colors";

const ReviewCard = ({review}) => {
    const [removeCard, setRemoveCard] = useState(false)
    const [edit, setEdit] = useState(false)

    function handleDeleteReview(id) {
        deleteReviewById(id).then(function (response) {
                if (response.status === 204) {
                    setRemoveCard(true)
                    toast.success("Delete Successful", {theme: 'colored'})
                    return
                } else {
                    setRemoveCard(false)
                    toast.error("Something went wrong! Try Again.", {theme: 'colored'})

                }
            }
        )
    }

    return (
        <div className={removeCard ? "hidden" : ""}>
            <div className="flex   gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap mb-2">
                <div className="w-20 flex-shrink-0">
                    <img src={review.product.thumbnail} className="w-full"/>
                </div>
                <div className="w-full">
                    <p>{review.product.name}</p>
                    <div className={edit?'animate__animated animate__fadeIn':""}>
                        <Rating
                            name="simple-controlled"
                            size={edit?"large":"small"}
                            value={review.rating}
                            readOnly={!edit}
                            // onChange={(event, newValue) => {
                            //     setValue(newValue);
                            // }}
                        />
                    </div>

                    <p className={edit?"hidden":'text-sm'}>{review.comment}</p>
                    <textarea className={!edit?"hidden":`animate__animated animate__fadeIn text-sm form-control block w-full px-3 py-1.5 font-normal text-gray-700
                    bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none `}
                              rows="3"
                              placeholder="Your comment"
                              defaultValue={review.comment}
                    />
                    <div className={edit?"flex justify-end w-full mt-2 animate__animated animate__fadeIn":"hidden"}>
                        <Button variant={"contained"} size={"small"}>Save</Button>
                    </div>
                </div>
                <div className="flex">
                    <EditIcon onClick={()=>setEdit(true)} className={edit?"hidden":"mr-4 cursor-pointer"} sx={{color: blue[500]}}/>
                    <CloseIcon onClick={()=>setEdit(false)} className={!edit?"hidden":"mr-4 cursor-pointer"} sx={{color: blue[500]}}/>
                    <DeleteIcon sx={{color: pink[500]}} onClick={() => handleDeleteReview(review.id)}
                                className={'cursor-pointer'}/>
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