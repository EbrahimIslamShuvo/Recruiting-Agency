import React from 'react';

const SubParagraph = ({name}) => {
    return (
        <div>
            <p data-aos="fade-right" className='text-lg text-gray-400'>
                {name}
            </p>
        </div>
    );
};

export default SubParagraph;