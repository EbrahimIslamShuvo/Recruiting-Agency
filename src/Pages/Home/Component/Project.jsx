import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import '../Component/CSS/project.css';
import { Pagination, Autoplay } from 'swiper/modules';

import SubHeader from '../../../Component/Shared/SubHeader';
import Header from '../../../Component/Shared/Header';
import SubParagraph from '../../../Component/Shared/SubParagraph';
import { RiArrowRightUpLine } from "react-icons/ri";

const Project = () => {
    const [activeSlide, setActiveSlide] = useState(1);

    const getTouch = (id) => {
        setActiveSlide(id);
    };

    const width1 = activeSlide === 1 ? "w-150" : "w-90";
    const width2 = activeSlide === 2 ? "w-150" : "w-90";
    const width3 = activeSlide === 3 ? "w-150" : "w-90";

    const visible1 = activeSlide === 1 ? "block" : "hidden";
    const visible2 = activeSlide === 2 ? "block" : "hidden";
    const visible3 = activeSlide === 3 ? "block" : "hidden";

    return (
        <div>
            <div className="flex flex-col justify-center items-center text-center gap-3 figtree-font w-11/12 mx-auto">
                <SubHeader name={"Our Project"} />
                <div className="md:w-6/12">
                    <Header name={"Successes A Look at Our Projects"} />
                </div>
                <div className="md:w-10/12 lg:w-5/12">
                    <SubParagraph name={"Explore our portfolio of successful projects that showcase the impact we've made in connecting top talent with leading organizations. From small-scale placements"} />
                </div>
            </div>

            {/* Mobile view: Swiper carousel with autoplay */}
            <div className="lg:hidden">
                <div className="w-11/12 mx-auto my-5">
                    <Swiper
                        pagination={{ dynamicBullets: true, clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        {[1, 2, 3].map((num) => (
                            <SwiperSlide key={num}>
                                <div data-aos="fade-down" className='h-130'>
                                    <img className='w-full h-full' src={`https://html.vikinglab.agency/recrute/assets/img/project/project1-img${num}.png`} alt={`Project ${num}`} />
                                    <div data-aos="fade-up" className="-mt-34 relative z-5 bg-[#FF7A01] flex justify-between items-center w-10/12 mx-auto px-8 py-4 text-white rounded-xl">
                                        <div className="text-start">
                                            <p className='text-3xl font-semibold'>Staffing Service</p>
                                            <h1 className='text-xl'>Demonstrating Our Expertise</h1>
                                        </div>
                                        <div className="bg-white text-[#FF7A01] p-3 rounded-full">
                                            <RiArrowRightUpLine />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Desktop view: Hover cards */}
            <div className="hidden lg:block my-10">
                <div className="flex justify-center items-center gap-3">
                    {/* Card 1 */}
                    <div className={`h-130 ${width1} transition-all duration-500 ease-in-out`} onMouseEnter={() => getTouch(1)}>
                        <img className='w-full h-full' src="https://html.vikinglab.agency/recrute/assets/img/project/project1-img1.png" alt="Project 1" />
                        <div className={`${visible1}`}>
                            <div data-aos="fade-up" className="-mt-34 relative z-5 bg-[#FF7A01] flex justify-between items-center w-10/12 mx-auto px-8 py-4 text-white rounded-xl">
                                <div className="text-start">
                                    <p className='text-3xl font-semibold'>Staffing Service</p>
                                    <h1 className='text-xl'>Demonstrating Our Expertise</h1>
                                </div>
                                <div className="bg-white text-[#FF7A01] p-3 rounded-full">
                                    <RiArrowRightUpLine />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className={`h-130 ${width2} transition-all duration-500 ease-in-out`} onMouseEnter={() => getTouch(2)}>
                        <img className='w-full h-full' src="https://html.vikinglab.agency/recrute/assets/img/project/project1-img2.png" alt="Project 2" />
                        <div className={`${visible2}`}>
                            <div data-aos="fade-up" className="-mt-34 relative z-5 bg-[#FF7A01] flex justify-between items-center w-10/12 mx-auto px-8 py-4 text-white rounded-xl">
                                <div className="text-start">
                                    <p className='text-3xl font-semibold'>Staffing Service</p>
                                    <h1 className='text-xl'>Demonstrating Our Expertise</h1>
                                </div>
                                <div className="bg-white text-[#FF7A01] p-3 rounded-full">
                                    <RiArrowRightUpLine />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className={`h-130 ${width3} transition-all duration-500 ease-in-out`} onMouseEnter={() => getTouch(3)}>
                        <img className='w-full h-full' src="https://html.vikinglab.agency/recrute/assets/img/project/project1-img3.png" alt="Project 3" />
                        <div className={`${visible3}`}>
                            <div data-aos="fade-up" className="-mt-34 relative z-5 bg-[#FF7A01] flex justify-between items-center w-10/12 mx-auto px-8 py-4 text-white rounded-xl">
                                <div className="text-start">
                                    <p className='text-3xl font-semibold'>Staffing Service</p>
                                    <h1 className='text-xl'>Demonstrating Our Expertise</h1>
                                </div>
                                <div className="bg-white text-[#FF7A01] p-3 rounded-full">
                                    <RiArrowRightUpLine />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
