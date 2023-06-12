import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';

// images
import featuresBg from '../../assets/images/features1.jpg';
const Features = () => {
    return (
        <section style={{ backgroundImage: `url(${featuresBg})` }} className='py-20 bg-fixed bg-cover bg-center bg-no-repeat'>
            <motion.div
                initial={{ y: 300 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className='grid grid-cols-1 md:grid-cols-3 dark:gap-10'>
                    <div className='text-center text-white dark:text-green bg-orange dark:bg-dark py-8 flex flex-col justify-between hover:bg-dark duration-300 hover:scale-110 dark:rounded-lg'>
                        <Player
                            autoplay
                            loop
                            src="https://assets4.lottiefiles.com/packages/lf20_ikvz7qhc.json"
                            style={{ width: '250px' }}
                        >
                        </Player>
                        <h2 className='text-2xl font-medium mt-4'>Experienced Instructors</h2>
                    </div>

                    <div className='text-center text-white dark:text-green bg-green dark:bg-dark py-8 flex flex-col justify-between hover:bg-dark duration-300 hover:scale-110 dark:rounded-lg'>
                        <Player
                            autoplay
                            loop
                            src="https://assets3.lottiefiles.com/packages/lf20_6ofxdidn.json"
                            style={{ width: '250px' }}
                        >
                        </Player>
                        <h2 className='text-2xl font-medium mt-4'>Browse Classes</h2>
                    </div>

                    <div className='text-center text-white dark:text-green bg-red dark:bg-dark py-8 flex flex-col justify-between hover:bg-dark duration-300 hover:scale-110 dark:rounded-lg'>
                        <Player
                            autoplay
                            loop
                            src="https://assets4.lottiefiles.com/private_files/lf30_pguaf3lh.json"
                            style={{ width: '250px' }}
                        >
                        </Player>
                        <h2 className='text-2xl font-medium mt-4'>Advanced Research</h2>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Features;