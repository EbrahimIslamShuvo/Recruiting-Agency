import React from 'react';

const Header = ({name}) => {
    return (
        <div>
            <h1 data-aos="fade-left" className='text-4xl lg:text-6xl font-bold lg:leading-17'>
                {name}
            </h1>
        </div>
    );
};

export default Header;