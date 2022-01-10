import React from 'react';

const Index = () => {
    return (
        <div>
            <div >
                <i className={" absolute w-10 h-10 border-8 border-blue-700  rounded-full -bottom-2 left-60"}/>
                <i className={" absolute w-24 h-24 border-8 border-blue-700  rounded-full top-72 right-72"}/>
                <i className={" absolute w-10 h-10  bg-blue-700 rounded-lg top-40 right-140"}/>
                <i/>
            </div>
            <div className={'mx-auto pb-4  sm:h-screen h-auto flex justify-content-center align-items-center'}  style={{backgroundColor: '#045de9',
               backgroundImage: 'linear-gradient(315deg, #045de9 0%, #09c6f9 74%)'}}>
               <div className={"why-choose-inner sm:mt-0 mt-20 sm:w-4/6 w-4/5 mx-auto relative"}>
                    <div className={' text-white h-auto  '} style={{backgroundColor: '#ff4e00',
                        backgroundImage: 'linear-gradient(315deg, #ec9f05 0%, #ff4e00 74%)'}}>
                        <div className={'w-3/4 sm:pl-10 pl-2 sm:pt-16 pt-20 '}>
                            <div className={'w-full'}>
                                <h2 className={' sm:text-4xl text-xl pb-10 font-semibold border-white'}>
                                    <span className={'border-b-4 border-white '}>Why</span>
                                    <span className={'pl-4'}>Choose Orange Properties Ltd.</span>
                                </h2>
                            </div>
                        </div>
                        <div className={'w-full sm:pl-10 pl-2 max-height-600 h-auto'}>
                            <div >
                                <img className={'sm:float-right w-96  mt-44 -4'} style={{shapeOutside:"circle()"}} src={'whyChoose.svg'}/>
                                <ul className={"list-disc leading-loose ml-5"}>
                                    <li>We believe and practice Customer centric approach.</li>
                                    <li>
                                        We are one stop solution center for regulatory approvals, Civil, Architectural, Electrical
                                        engineering, property management, and asset management along with general suppliers. We will
                                        connect
                                        you to a brilliant team of architects, site engineers, senior project managers and engineers
                                        who
                                        will create landmark designs keeping in mind your taste and style.
                                    </li>
                                    <li>
                                        We value your time and money. We are very comfort to Re-Design, Plan Change, Getting Feed
                                        Back
                                        etc. from client up to their complete satisfaction.
                                    </li>
                                    <li>Cost effective, on time and Customizable services</li>
                                    <li>
                                        We strictly follow BNBC Code for our apartment projects. Our all projects are approved from
                                        concerned authority and RAJUK. We use proper safety measures according to guideline of respective
                                        regulatory bodies.
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

           </div>
        </div>
    );
};

export default Index;