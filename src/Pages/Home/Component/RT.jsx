import React from 'react';
import SubHeader from '../../../Component/Shared/SubHeader';
import Header from '../../../Component/Shared/Header';
import SubParagraph from '../../../Component/Shared/SubParagraph';
import { FaStreetView } from "react-icons/fa6";

const RT = () => {
    return (
        <div className='bg-base-300'>
            <div className="">
                <div className="flex flex-col lg:flex-row justify-center items-start gap-10 md:w-8/12 w-11/12 mx-auto py-20">
                    <div className="md:w-11/12 w-full h-120 md:h-auto">
                        <img className='w-full h-full ' src="https://html.vikinglab.agency/recrute/assets/img/work/work1-image.png" alt="" />
                    </div>
                    <div className=" flex flex-col items-start gap-5">
                        <SubHeader name={"Recruitment Technologies"}></SubHeader>
                        <div className="-mt-6">
                            <Header name={"Solving Recruitment Using Technology"}></Header>
                        </div>
                        <SubParagraph name={"Whether you're seeking temporary assignments, placements, or executive-level positions, our curated"}></SubParagraph>
                        <div className="flex flex-col gap-5">
                            <div className="group">
                                <div className="flex items-center gap-5 bg-white group-hover:bg-[#FF7A01] group-hover:text-white group-hover:-translate-y-3 duration-500 px-6 py-4 rounded-lg">
                                    <div className=" group-hover:bg-white bg-[#FF7A01] text-white group-hover:text-[#FF7A01] duration-500 p-3 rounded-full">
                                        <FaStreetView className='text-3xl' />
                                    </div>
                                    <div className="">
                                        <h1 className='text-3xl font-semibold'>Sourcing the Best</h1>
                                        <p className='text-lg group-hover:text-white duration-500 text-gray-400'>Stay tuned for regular updates and valuable insights from our team of staffing experts.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="group">
                                <div className="flex items-center gap-5 bg-white group-hover:bg-[#FF7A01] group-hover:text-white group-hover:-translate-y-3 duration-500 px-6 py-4 rounded-lg">
                                    <div className=" group-hover:bg-white bg-[#FF7A01] text-white group-hover:text-[#FF7A01] duration-500 p-3 rounded-full">
                                        <FaStreetView className='text-3xl' />
                                    </div>
                                    <div className="">
                                        <h1 className='text-3xl font-semibold'>Sourcing the Best</h1>
                                        <p className='text-lg group-hover:text-white duration-500 text-gray-400'>Stay tuned for regular updates and valuable insights from our team of staffing experts.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="group">
                                <div className="flex items-center gap-5 bg-white group-hover:bg-[#FF7A01] group-hover:text-white group-hover:-translate-y-3 duration-500 px-6 py-4 rounded-lg">
                                    <div className=" group-hover:bg-white bg-[#FF7A01] text-white group-hover:text-[#FF7A01] duration-500 p-3 rounded-full">
                                        <FaStreetView className='text-3xl' />
                                    </div>
                                    <div className="">
                                        <h1 className='text-3xl font-semibold'>Sourcing the Best</h1>
                                        <p className='text-lg group-hover:text-white duration-500 text-gray-400'>Stay tuned for regular updates and valuable insights from our team of staffing experts.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RT;