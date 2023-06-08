import { Player } from '@lottiefiles/react-lottie-player';

const Loading = () => {
    return (
        <div className='py-28'>
            <Player
                autoplay
                loop
                src="https://assets3.lottiefiles.com/packages/lf20_raiw2hpe.json"
                style={{ width: '250px' }}
            >
            </Player>
        </div>
    );
};

export default Loading;