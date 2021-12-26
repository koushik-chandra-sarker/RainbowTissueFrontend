import React from 'react';
const Preloader = () => {
    return (
        <div className={'preloader'}>
            <div className={'content_main'}>
                 <div className={'content'}>
                <img src={'/static/image/rain-logo.png'} alt="Rainbow Logo"/>
                <div className="loading">
                    <div className="yellow"/>
                    <div className="red"/>
                    <div className="blue"/>
                    <div className="violet"/>
                </div>
            </div>
            </div>

        </div>
    );
};

export default Preloader;
