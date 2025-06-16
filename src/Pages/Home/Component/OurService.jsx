import React from 'react';
import SubHeader from '../../../Component/Shared/SubHeader';
import Header from '../../../Component/Shared/Header';
import SubParagraph from '../../../Component/Shared/SubParagraph';
import { FaBusinessTime } from "react-icons/fa";

const OurService = () => {
    return (
        <div>
            <div className="bg-black mb-5">
                <div className=" text-white py-10">
                    <div className=" w-10/12 mx-auto flex flex-col justify-center items-center gap-6 text-center">
                        <div className="text-black">
                            <SubHeader name={"Our Service"}></SubHeader>
                        </div>
                        <Header name={"Tailored Solutions for Your Hiring Needs"}></Header>
                        <SubParagraph name={"With our proven track record and commitment to excellence, we're here to support your organization's growth and help you achieve your hiring goals."}></SubParagraph>
                    </div>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:w-9/12 mx-auto ">
                        <div className="w-11/12 md:w-85 lg:w-111 h-129 md:h-98 lg:h-129 overflow-hidden rounded mx-auto group">
                            <img className='w-full group-hover:-rotate-4 duration-500 group-hover:scale-109' src="https://html.vikinglab.agency/recrute/assets/img/service/service1-img1.png" alt="" />
                            <div className="bg-[#FF7A01] w-200 h-200 mt-0 group-hover:-mt-50 md:group-hover:-mt-57 lg:group-hover:-mt-50 duration-500 relative z-5 rounded-full -ml-68"></div>
                            <div className="mt-0 group-hover:-mt-192 duration-500 ml-10 relative z-6 flex flex-col items-start">
                                <div className=" group-hover:-rotate-y-180 duration-1000">
                                    <FaBusinessTime className='text-6xl' />
                                </div>
                                <h1 className='text-2xl font-semibold'>Executive Search Services</h1>
                                <p className='w-10/12 text-lg'>Whether you're looking for temporary staffing, direct hire placements.</p>
                            </div>
                        </div>
                        <div className="w-11/12 md:w-85 lg:w-111 h-129 md:h-98 lg:h-129 overflow-hidden rounded mx-auto group">
                            <img className='w-full group-hover:-rotate-4 duration-500 group-hover:scale-109' src="https://html.vikinglab.agency/recrute/assets/img/service/service1-img2.png" alt="" />
                            <div className="bg-[#FF7A01] w-200 h-200 -mt-50 md:-mt-57 lg:-mt-50 duration-500 relative z-5 rounded-full -ml-68"></div>
                            <div className="-mt-192 duration-500 ml-10 relative z-6 flex flex-col items-start">
                                <div className=" group-hover:-rotate-y-180 duration-1000">
                                    <FaBusinessTime className='text-6xl' />
                                </div>
                                <h1 className='text-2xl font-semibold'>Executive Search Services</h1>
                                <p className='w-10/12 text-lg'>Whether you're looking for temporary staffing, direct hire placements.</p>
                            </div>
                        </div>
                        <div className="w-11/12 md:w-85 lg:w-111 h-129 md:h-98 lg:h-129 overflow-hidden rounded mx-auto group">
                            <img className='w-full group-hover:-rotate-4 duration-500 group-hover:scale-109' src="https://html.vikinglab.agency/recrute/assets/img/service/service1-img3.png" alt="" />
                            <div className="bg-[#FF7A01] w-200 h-200 mt-0  group-hover:-mt-50 md:group-hover:-mt-57 lg:group-hover:-mt-50 duration-500 relative z-5 rounded-full -ml-68"></div>
                            <div className="mt-0 group-hover:-mt-192 duration-500 ml-10 relative z-6 flex flex-col items-start">
                                <div className=" group-hover:-rotate-y-180 duration-1000">
                                    <FaBusinessTime className='text-6xl' />
                                </div>
                                <h1 className='text-2xl font-semibold'>Executive Search Services</h1>
                                <p className='w-10/12 text-lg'>Whether you're looking for temporary staffing, direct hire placements.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurService;