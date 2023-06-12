import { Player } from '@lottiefiles/react-lottie-player';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <section className='h-screen w-full flex flex-col items-center justify-center'>
            <Helmet>
                <title>Eco Learner | 404 Page Not Found</title>
            </Helmet>
            <div>
                <Player
                    autoplay
                    loop
                    src="https://assets6.lottiefiles.com/packages/lf20_2ibpmsby.json"
                    className='md:w-[600px]'
                >
                </Player>
            </div>
            <Link className='btn_primary relative md:-top-20 border border-green' to='/'>Back to Home</Link>
        </section>
    );
};

export default PageNotFound;