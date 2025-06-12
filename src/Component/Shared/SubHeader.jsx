import React from 'react';

const SubHeader = ({name, color}) => {
    return (
        <div>
            <h4 data-aos="fade-right" className={`text-[${color}] bg-[#F7E0CE] py-2 px-4 font-semibold text-[16px]`}>
                {name}
            </h4>
        </div>
    );
};

export default SubHeader;