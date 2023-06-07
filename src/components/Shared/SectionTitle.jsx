import React from 'react';

const SectionTitle = ({ children }) => {
    return (
        <div className='text-center'>
            <h1 className='text-3xl md:text-5xl font-rubik text-gray font-medium'>{children}</h1>
            <span className='mt-2 relative scale-y-150 h-1 w-16 bg-green inline-block before:absolute before:scale-y-50 before:w-full before:h-full before:bg-orange before:top-0 before:-left-full after:absolute after:scale-y-50 after:w-full after:h-full after:bg-red after:top-0 after:-right-full'></span>
        </div>
    );
};

export default SectionTitle;