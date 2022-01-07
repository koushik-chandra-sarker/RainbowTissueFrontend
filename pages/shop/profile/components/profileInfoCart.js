import React from 'react';
import _ from "lodash";
import {base_static_url} from "../../../../constants";

const ProfileInfoCart = ({pictureUrl, fName, lName, title, subtitle}) => {
    return (

            <div className={'sm:w-1/4 sm:border-r-2 border-stone-700 sm:pl-0 pl-16'}>
                <div className={'flex justify-content-center mt-4 wrapper'}>
                    <img className={'rounded-full object-contain h-36 w-36 align-items-center border-2 border-blue-900'}
                         src={!_.isEmpty(pictureUrl) ? pictureUrl : "/static/image/img_14.png"}/>
                    <div className={'file-upload relative'}>
                        <input id="profile_pic" type="file" className={'hidden'}/>
                        <label htmlFor={"profile_pic"}
                               className={'flex justify-content-center align-items-center w-9 h-9 bg-primary absolute bottom-0 -right-6 cursor-pointer  rounded-full border-5 border-primary  text-gray-50'}>
                            <div className="material-icons">
                                add_a_photo
                            </div>
                        </label>

                    </div>
                </div>

                <h2 className={'text-center pt-8'}>{fName} {lName}</h2>
                <div
                    className={'justify-content-center border-2 border-gray-100 rounded-lg align-items-center  p-4 m-4'}>
                    <p className={'pl-4 text-sm'}>
                        <span className={'text-blue-900'}>{title}</span>
                        <br/>
                        {subtitle}
                    </p>
                </div>
            </div>
    );
};

export default ProfileInfoCart;