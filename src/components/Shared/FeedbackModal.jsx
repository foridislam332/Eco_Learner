import axios from 'axios';
import React, { useState } from 'react';

// react icons
import { MdClose } from 'react-icons/md';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const FeedbackModal = ({ id }) => {
    const [show, setShow] = useState(false);
    const [axiosSecure] = useAxiosSecure();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const feedback = form.feedback.value;

        axiosSecure.patch(`/manageFeedback/${id}?feedback=${feedback}`)
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    setShow(false);
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Send Feedback done',
                        showConfirmButton: false,
                        timer: 2500
                    });
                }
            })
    }
    return (
        <>
            <button onClick={() => setShow(!show)} className="btn_primary overflow-hidden border border-green hover:border-transparent">
                Send Feedback
            </button>

            <div className={`fixed top-0 left-0 z-[9999] w-full h-screen ${show ? 'scale-100 rounded-none' : 'scale-0 rounded-full'} duration-300`}>
                <div className='relative w-full h-screen flex items-center justify-center'>
                    <div onClick={() => setShow(!show)} className={`absolute top-0 left-0 h-full w-full bg-black bg-opacity-40  ${show ? 'opacity-100' : 'opacity-0'} delay-300 duration-300`}></div>
                    <div className='relative bg-white w-[450px] h-56 border border-green shadow-lg rounded-lg p-4'>
                        <button onClick={() => setShow(!show)} className='absolute -top-6 -right-6 h-10 w-10 bg-green hover:bg-red shadow-lg hover:shadow-red/50 duration-300 text-white rounded-full flex items-center justify-center'>
                            <MdClose className='text-2xl' />
                        </button>

                        <form onSubmit={handleSubmit}>
                            <textarea name="feedback" className='w-full p-3 border border-green rounded-lg outline-none' placeholder='Write feedback' rows="4"></textarea>

                            <button className='btn_primary w-full border border-green mt-1'>Send Feedback</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeedbackModal;