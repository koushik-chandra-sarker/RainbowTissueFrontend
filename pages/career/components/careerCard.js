import React from 'react';
import _ from "lodash";

const CareerCard = (props) => {
    return (
        <div className="w-full border-l-8 shadow border-blue-400 ">
            <div className=" px-2 bg-gray-50 h-full p-5 pl-6">
                <span className={"text-xl no-underline "}>{props.title}</span><br/>
                <div className={"mt-2"}>
                    <span className="material-icons color-primary text-sm">
                        place
                    </span>
                    {
                        !_.isEmpty(props.location) ?
                            <span
                                className={"pl-2 text-base"}> {i18n.language === 'en' ? props.location.address : props.location.bn_address}</span> : <></>
                    }
                </div>
            </div>
        </div>
    );
};

export default CareerCard;