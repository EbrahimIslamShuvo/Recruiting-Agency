import React from 'react';
import { RiArrowRightUpLine } from 'react-icons/ri';

const Button = ({name}) => {
    return (
        <div>
            <div className=" h-14 group overflow-hidden rounded ">
                <div className="flex items-center text-lg gap-1 px-5 py-3.5 rounded font-semibold text-white relative z-9">
                    <p className='figtree-font'>{name}</p>
                    <RiArrowRightUpLine className='text-xl'></RiArrowRightUpLine>
                </div>
                <div className="bg-[#F7E0CE] w-full h-14 relative -mt-14 z-5 rounded"></div>
                <div className="bg-[#FF7A01] w-full h-14 relative -mt-14 z-6 rounded transform group-hover:translate-x-42 duration-500"></div>
                <div className="bg-black w-full h-14 transform duration-500 relative group-hover:-mt-14 z-8 rounded"></div>
            </div>
        </div>
    );
};

export default Button;