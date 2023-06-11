import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';

const CheckoutForm = ({ classData }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [cardError, setCardError] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const price = parseFloat(classData.price).toFixed(2);

    if (cardError) {
        console.log(cardError)
    }

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                setClientSecret(res.data.clientSecret)
            })
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message)
        } else {
            setCardError('')
        }

        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'unknown',
                    email: user?.email || 'anonymous'
                },
            },
        })

        if (confirmError) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: `${confirmError}`,
                showConfirmButton: false,
                timer: 2000
            })
        }

        setProcessing(false)
        if (paymentIntent.status === "succeeded") {
            const transactionId = paymentIntent.id;
            const payment = {
                name: user?.displayName,
                email: user?.email,
                transactionId: transactionId,
                price: price,
                classId: classData.classId,
                date: new Date().toISOString(),
                status: 'pending'
            }

            axiosSecure.post('/payments', payment)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Payment Succeeded',
                            showConfirmButton: false,
                            timer: 2000
                        })

                        axiosSecure.patch(`/enrollStudent/${classData.classId}`, classData)
                            .then(() => { })

                        axiosSecure.delete(`/selectedClasses/${classData._id}`)
                            .then(() => { })
                    }
                })

        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='border border-green px-8 py-1 rounded-lg mt-4 hover:shadow-lg duration-300' type="submit" disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;