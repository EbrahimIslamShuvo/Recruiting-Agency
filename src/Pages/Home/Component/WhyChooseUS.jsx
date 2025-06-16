import React from 'react';
import { LuFileChartColumn } from "react-icons/lu";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import SubHeader from '../../../Component/Shared/SubHeader';
import Header from '../../../Component/Shared/Header';
import SubParagraph from '../../../Component/Shared/SubParagraph';
import { IoIosCloudDone } from "react-icons/io";
import Button from '../../../Component/Shared/Button';

const WhyChooseUS = () => {
    return (
        <div>
            <div className="">
                <div className="my-15">
                    <div className="flex flex-col lg:flex-row items-start gap-5 lg:w-9/12 w-11/12 mx-auto">
                        <div className="flex gap-5">
                            <div className="grid grid-cols-3 md:grid-cols-1 gap-6 items-start figtree-font">
                                <div data-aos="fade-up-right" className="group">
                                    <div className="flex flex-col items-center gap-12 bg-gray-200/75 group-hover:bg-[#FF7A01] group-hover:-translate-y-2 rounded-lg duration-500 group-hover:text-white p-7">
                                        <LuFileChartColumn className='text-5xl group-hover:rotate-y-180 duration-700' />
                                        <div className="flex flex-col items-center text-center -mt-9 md:-mt-0">
                                            <h1 className='text-4xl font-semibold'>98%</h1>
                                            <p className='text-gray-500 group-hover:text-white duration-500'>Successful Client</p>
                                        </div>
                                    </div>
                                </div>
                                <div data-aos="fade-up-right" className="group">
                                    <div className="flex flex-col items-center gap-3 bg-gray-200/75 group-hover:bg-[#FF7A01] group-hover:-translate-y-2 rounded-lg duration-500 group-hover:text-white py-7 px-9.5">
                                        <FaFileInvoiceDollar className='text-5xl group-hover:rotate-y-180 duration-700' />
                                        <div className="flex flex-col items-center text-center">
                                            <h1 className='text-4xl font-semibold'>79%</h1>
                                            <p className='text-gray-500 group-hover:text-white duration-500'>Team Advisors</p>
                                        </div>
                                    </div>
                                </div>
                                <div data-aos="fade-up-right" className="group h-fit">
                                    <div className="flex flex-col items-center gap-3 bg-gray-200/75 group-hover:bg-[#FF7A01] group-hover:-translate-y-2 rounded-lg duration-500 group-hover:text-white p-7">
                                        <HiUserGroup className='text-5xl group-hover:rotate-y-180 duration-700' />
                                        <div className="flex flex-col items-center text-center">
                                            <h1 className='text-4xl font-semibold'>12+</h1>
                                            <p className='text-gray-500 group-hover:text-white duration-500'>Years Experience</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="flip-left" className="hidden md:block lg:hidden">
                                <img className='' src="https://html.vikinglab.agency/recrute/assets/img/others/choose1-img.png" alt="" />
                            </div>
                        </div>
                        <div data-aos="flip-left" className="md:hidden lg:block">
                            <img className="w-full h-auto" src="https://html.vikinglab.agency/recrute/assets/img/others/choose1-img.png" alt="..." />

                        </div>
                        <div className="lg:w-5/12 flex flex-col items-start gap-5 mt-8">
                            <SubHeader name={"Why Choose Us"}></SubHeader>
                            <Header name={"Choose Excellence Elevate Your Hiring Experience"}></Header>
                            <SubParagraph name={"Our team of industry experts is dedicated to understanding your unique needs and delivering tailored solutions that propel your business forward."}></SubParagraph>
                            <div data-aos="fade-up" className=" font-semibold grid grid-cols-2 justify-between w-full gap-3">
                                <div className="flex items-center gap-2 text-xl">
                                    <IoIosCloudDone className='text-3xl' />
                                    <p>Range Of Services</p>
                                </div>
                                <div className="flex items-center gap-2 text-xl">
                                    <IoIosCloudDone className='text-3xl' />
                                    <p>Professional Expertise</p>
                                </div>
                                <div className="flex items-center gap-2 text-xl">
                                    <IoIosCloudDone className='text-3xl' />
                                    <p>Online Recourses</p>
                                </div>
                                <div className="flex items-center gap-2 text-xl">
                                    <IoIosCloudDone className='text-3xl' />
                                    <p>Client Success Stories</p>
                                </div>
                            </div>
                            <div data-aos="fade-up-left" className="mt-8">
                                <Button name={"About US"}></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUS;