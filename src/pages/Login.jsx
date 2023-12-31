import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Player } from '@lottiefiles/react-lottie-player';
import Breadcrumbs from '../components/Shared/Breadcrumbs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuth from '../hooks/useAuth';

// react icons
import { MdAlternateEmail, MdLockOutline } from 'react-icons/md';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

// image
import SocialLogin from '../components/SocialLogin';
import { Helmet } from 'react-helmet';

const Login = () => {
    const { signIn } = useAuth();

    // navigate
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [type, setType] = useState('password');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(() => {
                navigate(from, { replace: true })
            })
            .catch(error => {
                toast.error(error.message, {
                    position: "top-center",
                    autoClose: 3000,
                    theme: "light",
                });
            })
    };

    return (
        <section>
            <Helmet>
                <title>Eco Learner | Login</title>
            </Helmet>
            <Breadcrumbs title="Login" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                <div className='grid md:grid-cols-2 gap-10 place-items-center'>
                    <div>
                        <Player
                            autoplay
                            loop
                            src="https://assets1.lottiefiles.com/packages/lf20_mjlh3hcy.json"
                            className='w-full'
                        >
                        </Player>
                    </div>

                    <div className='p-5 md:p-16 rounded-lg shadow-2xl dark:bg-dark max-w-xl mx-auto'>
                        <h1 className='text-3xl md:text-5xl font-semibold text-dark dark:text-green'>Welcome Back!</h1>
                        <h2 className='text-lg text-gray mb-10'>Login to continue</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='flex items-center border border-green rounded-lg gap-3 p-3'>
                                <label htmlFor="email"> <MdAlternateEmail className='text-green text-2xl' /></label>
                                <input className='w-full border-none outline-none dark:text-white dark:bg-dark' id='email' placeholder="Enter email" {...register("email", { required: true })} />
                            </div>
                            {errors.email && <span className='text-sm text-red ml-1'>Email is required</span>}

                            <div className='flex items-center border border-green rounded-lg gap-3 p-3 mt-5'>
                                <label htmlFor="password"> <MdLockOutline className='text-green text-2xl' /></label>
                                <input type={type} className='w-full border-none outline-none dark:text-white dark:bg-dark' id='password' placeholder="password" {...register("password", { required: true })} />
                                <button className='dark:text-white' onClick={() => setType(type === 'password' ? 'text' : 'password')}>
                                    {
                                        type === 'password' ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
                                    }
                                </button>
                            </div>
                            {errors.password && <span className='text-sm text-red ml-1'>Password is required</span>}
                            <Link to='/login' className='text-sm text-right  text-gray block'>Forget password?</Link>

                            <button className='btn_primary w-full mt-7 border' type='submit'>Login</button>
                        </form>

                        <div className='flex items-center gap-3 mx-5 my-5'>
                            <span className='border-t border-orange w-full block'></span>
                            <span className='text-green'>OR</span>
                            <span className='border-t border-red w-full block'></span>
                        </div>

                        <SocialLogin />

                        <p className='mt-5 text-center text-gray'>New to Eco Learner? <Link className='text-green' to='/signUp'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;