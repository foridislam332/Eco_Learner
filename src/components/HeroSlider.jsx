import { Slide, Zoom, Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";


// images
import HeroBg from '../assets/images/hero-bg.png';
import HeroBg2 from '../assets/images/hero-bg2.jpg';
import HeroBg3 from '../assets/images/hero-bg3.jpg';
import { Link } from "react-router-dom";

const HeroSlider = () => {
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
            >
                <SwiperSlide>
                    <div style={{ backgroundImage: `url(${HeroBg})` }} className='bg-cover bg-center bg-no-repeat'>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            {/* hero banner content */}
                            <div className='pt-40 pb-32 md:pt-48'>
                                <Slide cascade damping={0.1}>
                                    <h1 className='text-3xl md:text-5xl text-white font-semibold drop-shadow-xl'><span className='text-dark font-bold mb-3 block'>Eco Learner</span> <span className='mb-2 block'>Nature Exploration</span> e-Learning Courses</h1>

                                    <p className='md:w-[600px] mt-5 text-white md:text-[#3d3b3b] bg-black md:bg-transparent bg-opacity-50 p-2 md:p-0 drop-shadow-xl'>A Summer Camp Nature Exploration Learning School combines the elements of a traditional summer camp with a focus on nature exploration and experiential learning.</p>

                                    <Link to='/classes' className='mt-16 btn_primary inline-block'>See Courses</Link>
                                </Slide>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ backgroundImage: `url(${HeroBg2})` }} className='bg-cover bg-center bg-no-repeat'>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-end">

                            {/* hero banner content */}
                            <div className='pt-40 pb-32 md:pt-48 text-right'>
                                <Fade cascade damping={0.1}>
                                    <h1 className='text-3xl md:text-5xl text-white font-semibold drop-shadow-xl'><span className='text-dark font-bold mb-3 block'>Eco Learner</span> <span className='mb-2 block'>A Unique Blend of </span> Fun and Education</h1>

                                    <p className='md:w-[600px] mt-5 text-white md:text-[#3d3b3b] bg-black md:bg-transparent bg-opacity-50 p-2 md:p-0 drop-shadow-xl'>Our e-learning courses offer a unique blend of fun and education, creating a dynamic learning experience for your child. Through engaging multimedia content, interactive</p>

                                    <Link to='/classes' className='mt-16 btn_primary inline-block'>See Courses</Link>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ backgroundImage: `url(${HeroBg3})` }} className='bg-cover bg-center bg-no-repeat'>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-end">

                            {/* hero banner content */}
                            <div className='pt-40 pb-32 md:pt-48 text-right'>
                                <Zoom cascade damping={0.1}>
                                    <h1 className='text-3xl md:text-5xl text-white font-semibold drop-shadow-xl'><span className='text-dark font-bold mb-3 block'>Eco Learner</span> <span className='mb-2 block'>Explore the World </span> Nature Photography</h1>

                                    <p className='md:w-[600px] mt-5 text-white md:text-[#3d3b3b] bg-black md:bg-transparent bg-opacity-50 p-2 md:p-0 drop-shadow-xl'>Our nature photography courses are taught by seasoned photographers who have honed their craft through years of experience. They possess a deep understanding of composition</p>

                                    <Link to='/classes' className='mt-16 btn_primary inline-block'>See Courses</Link>
                                </Zoom>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default HeroSlider;