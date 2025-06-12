import React from 'react';
import Button from './Shared/Button';
import { FaFacebookF } from 'react-icons/fa6';
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <div className="bg-[#081120] text-white">
                <div className=" w-9/12 mx-auto pb-10">
                    <div className="pb-8 border-b flex flex-col md:flex-row md:justify-between justify-center items-center gap-5 md:gap-0 pt-15">
                        <div className="figtree-font md:w-6/12">
                            <h1 className='lg:text-6xl text-4xl'>Ready to Power up your Savings and Reliability?</h1>
                            <p className='lg:text-lg text-sm mt-4'>Feel free to customize this paragraph to better reflect the specific services offered by your IT solution & the unique</p>
                        </div>
                        <div className="flex items-center">
                            <input
                                className="bg-white text-black placeholder:text-black rounded-md py-4 px-5 w-[380px] focus:outline-[#FF7A01]"
                                type="email"
                                placeholder="Email"
                            />
                            <div className="ml-[-145px]">
                                <Button name={"Subscribe"} />
                            </div>
                        </div>

                    </div>
                    <div className="pt-10 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between items-start gap-10 figtree-font">
                        <div className="w-full">
                            <img src="https://html.vikinglab.agency/recrute/assets/img/logo/footer-logo1.png" alt="" />
                            <p className='figtree-font mt-4 text-sm text-justify'>Our goal is to demystify the process, address your concerns, and empower you with the knowledge to embark.</p>
                            <div className="flex justify-start items-start gap-2.5 mt-5">
                                <div className="bg-gray-800 p-2 rounded-full transform hover:bg-[#FF7A01] hover:-translate-y-1.5 duration-700">
                                    <FaFacebookF className='text-xl' />
                                </div>
                                <div className="bg-gray-800 p-2 rounded-full transform hover:bg-[#FF7A01] hover:-translate-y-1.5 duration-700">
                                    <FaTwitter className='text-xl' />
                                </div>
                                <div className="bg-gray-800 p-2 rounded-full transform hover:bg-[#FF7A01] hover:-translate-y-1.5 duration-700">
                                    <FaInstagram className='text-xl' />
                                </div>
                                <div className="bg-gray-800 p-2 rounded-full transform hover:bg-[#FF7A01] hover:-translate-y-1.5 duration-700">
                                    <FaYoutube className='text-xl' />
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block lg:hidden">
                            <div className="w-full flex flex-col gap-3">
                                <h2 className='mb-3 text-2xl'>Contact Info</h2>
                                <div className="flex items-center gap-2 group">
                                    <div className="bg-gray-800 p-2 rounded-full transform group-hover:bg-[#FF7A01] duration-700">
                                        <FaPhoneAlt className='text-xl' />
                                    </div>
                                    <p>+880 1648438489</p>
                                </div>
                                <div className="flex items-center gap-2 group">
                                    <div className="bg-gray-800 p-2 rounded-full transform group-hover:bg-[#FF7A01] duration-700">
                                        <MdOutlineEmail className='text-xl' />
                                    </div>
                                    <p>ebrahimislam2003@gmail.com</p>
                                </div>
                                <div className="flex items-center gap-2 group">
                                    <div className="bg-gray-800 p-2 rounded-full transform group-hover:bg-[#FF7A01] duration-700">
                                        <FaLocationDot className='text-xl' />
                                    </div>
                                    <p>Banasree, Rampura, Dhaka-1200</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-full flex flex-col gap-2">
                                <h2 className='mb-3 text-2xl'>Quick Link</h2>
                                <NavLink className={`hover:text-[#FF7A01] font-semibold`} to={'/job'}>Job</NavLink>
                                <NavLink className={`hover:text-[#FF7A01] font-semibold`} to={'/service'}>Service</NavLink>
                                <NavLink className={`hover:text-[#FF7A01] font-semibold`} to={'/project'}>Project</NavLink>
                            </div>
                            <div className="md:hidden w-full">
                                <div className="w-full flex flex-col gap-2">
                                    <h2 className='mb-3 text-2xl'>Menu</h2>
                                    <NavLink className={`hover:text-[#FF7A01] font-semibold`} to={'/'}>Home</NavLink>
                                    <NavLink className={`hover:text-[#FF7A01] font-semibold`} to={'/blog'}>Blog</NavLink>
                                    <NavLink className={`hover:text-[#FF7A01] font-semibold`} to={'/about'}>About Us</NavLink>
                                    <NavLink className={`hover:text-[#FF7A01] font-semibold`} to={'/contact'}>Contact Us</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="w-full flex flex-col gap-2">
                                <h2 className='mb-3 text-2xl'>Menu</h2>
                                <NavLink className={`hover:text-[#FF7A01] font-semibold`} to={'/'}>Home</NavLink>
                                <NavLink className={`hover:text-[#FF7A01] font-semibold`} to={'/blog'}>Blog</NavLink>
                                <NavLink className={`hover:text-[#FF7A01] font-semibold`} to={'/about'}>About Us</NavLink>
                                <NavLink className={`hover:text-[#FF7A01] font-semibold`} to={'/contact'}>Contact Us</NavLink>
                            </div>
                        </div>
                        <div className="md:hidden lg:block">
                            <div className="w-full flex flex-col gap-3">
                                <h2 className='mb-3 text-2xl'>Contact Info</h2>
                                <div className="flex items-center gap-2 group">
                                    <div className="bg-gray-800 p-2 rounded-full transform group-hover:bg-[#FF7A01] duration-700">
                                        <FaPhoneAlt className='text-xl' />
                                    </div>
                                    <p>+880 1648438489</p>
                                </div>
                                <div className="flex items-center gap-2 group">
                                    <div className="bg-gray-800 p-2 rounded-full transform group-hover:bg-[#FF7A01] duration-700">
                                        <MdOutlineEmail className='text-xl' />
                                    </div>
                                    <p>ebrahimislam2003@gmail.com</p>
                                </div>
                                <div className="flex items-center gap-2 group">
                                    <div className="bg-gray-800 p-2 rounded-full transform group-hover:bg-[#FF7A01] duration-700">
                                        <FaLocationDot className='text-xl' />
                                    </div>
                                    <p>Banasree, Rampura, Dhaka-1200</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;