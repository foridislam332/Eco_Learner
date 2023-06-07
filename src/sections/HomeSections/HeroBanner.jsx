import React from 'react';

// images
import HeroBg from '../../assets/images/hero-bg.png';

const HeroBanner = () => {
    return (
        <section style={{ backgroundImage: `url(${HeroBg})` }} className='bg-cover bg-center bg-no-repeat'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* hero banner content */}
                <div className='pt-40 pb-32 md:pt-48'>
                    <h1 className='text-3xl md:text-5xl text-white font-semibold drop-shadow-xl'><span className='text-dark font-bold mb-3 block'>Eco Learner</span> <span className='mb-2 block'>Nature Exploration</span> e-Learning Courses</h1>

                    <p className='md:w-[600px] mt-5 text-white md:text-[#3d3b3b] bg-black md:bg-transparent bg-opacity-50 p-2 md:p-0 drop-shadow-xl'>A Summer Camp Nature Exploration Learning School combines the elements of a traditional summer camp with a focus on nature exploration and experiential learning.</p>

                    <button className='mt-16 btn_primary'>See Courses</button>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;