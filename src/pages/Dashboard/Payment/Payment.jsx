import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const stripePromise = loadStripe(import.meta.env.VITE_payment_pk);
const Payment = () => {
    const classData = useLoaderData();
    return (
        <div className='shadow-xl shadow-indigo-500/20 my-5 p-5 rounded-lg bg-white'>
            <Helmet>
                <title>Eco Learner | Dashboard | Payment</title>
            </Helmet>
            <div className='mb-8'>
                <h1 className='text-3xl text-dark font-medium drop-shadow-xl tracking-widest'>Payment</h1>
                <p className='text-sm text-gray italic drop-shadow-xl font-light'>Dashboard / <span className='text-green'>Payment</span></p>
            </div>

            <div className='bg-white shadow-xl w-[450px] p-8 rounded-lg border border-green mx-auto'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm classData={classData} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;