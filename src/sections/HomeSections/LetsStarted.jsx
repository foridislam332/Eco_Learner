import React from 'react';

// images
import letStartBg from '../../assets/images/let-start-bg.jpg';

const LetsStarted = () => {
    return (
        <section style={{ backgroundImage: `url(${letStartBg})` }} className='bg-fixed bg-cover bg-center bg-no-repeat'>
            <div className='bg-black bg-opacity-60'>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className='text-center text-white py-28'>
                        <h1 className='text-3xl font-rubik font-medium drop-shadow-xl mb-5'>Lets Get Started</h1>
                        <p className='md:w-[650px] mb-10 mx-auto'> This course is designed to ignite your curiosity about the natural world and help you develop a deeper connection with nature. Through a series of interactive and engaging activities, we will delve into various</p>

                        <button className='btn_primary'>Enroll Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LetsStarted;