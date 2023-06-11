import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { toast } from 'react-toastify';


// image
import googleImg from '../assets/images/google.png';

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    // navigate
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const signInWithGoogle = () => {
        googleSignIn()
            .then((result) => {
                const loggedUser = result.user;
                const user = { name: loggedUser.displayName, email: loggedUser.email, role: 'student', photo: loggedUser.photoURL };

                axiosSecure.post('/users', user)
                    .then(data => {
                        if (data.data.insertedId) {
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'User created successfully',
                                showConfirmButton: false,
                                timer: 2500
                            });
                            navigate(from, { replace: true })
                        }
                    })
                navigate(from, { replace: true })
            })
            .catch(error => {
                toast.error(error.message, {
                    position: "top-right",
                    autoClose: 4000,
                    theme: "light",
                });
            })
    }
    return (
        <button onClick={signInWithGoogle} className='btn_primary flex items-center justify-center gap-3 border w-full'>
            <img className='w-6' src={googleImg} alt="google" />
            <p className='text-lg'>Login with Google</p>
        </button>
    );
};

export default SocialLogin;