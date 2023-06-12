import React from 'react';
import SectionTitle from '../../components/Shared/SectionTitle';

import { Player } from '@lottiefiles/react-lottie-player';

const WhyChoose = () => {
    return (
        <section className='py-20 dark:bg-black'>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle>
                    Why Choose Us?
                </SectionTitle>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-16'>
                    <div className='text-center shadow-2xl'>
                        <Player
                            autoplay
                            loop
                            src="https://assets2.lottiefiles.com/packages/lf20_mBtMnHLwl5.json"
                            style={{ width: '250px', height: '200px' }}
                        >
                        </Player>
                        <div className='p-5'>
                            <h2 className='text-xl font-rubik font-medium text-green'>Question, Quiz & Course</h2>
                            <p className='text-gray mt-3'>A form of assessment or evaluation that tests a person's knowledge or understanding</p>
                        </div>
                    </div>
                    <div className='text-center shadow-2xl'>
                        <Player
                            autoplay
                            loop
                            src="https://assets1.lottiefiles.com/packages/lf20_ctwkstoj.json"
                            style={{ width: '250px', height: '200px' }}
                        >
                        </Player>
                        <div className='p-5'>
                            <h2 className='text-xl font-rubik font-medium text-green'>Highly Experienced</h2>
                            <p className='text-gray mt-3'>Highly Experienced is a phrase used to describe someone who possesses a wealth of knowledge</p>
                        </div>
                    </div>
                    <div className='text-center shadow-2xl'>
                        <Player
                            autoplay
                            loop
                            src="https://assets7.lottiefiles.com/private_files/lf30_vrcurbxk.json"
                            style={{ width: '250px', height: '200px' }}
                        >
                        </Player>
                        <div className='p-5'>
                            <h2 className='text-xl font-rubik font-medium text-green'>Dedicated Support</h2>
                            <p className='text-gray mt-3'>Dedicated support refers to a specialized team or individual that provides continuous assistance</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;