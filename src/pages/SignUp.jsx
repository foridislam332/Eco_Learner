import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Player } from '@lottiefiles/react-lottie-player';
import Breadcrumbs from '../components/Shared/Breadcrumbs';
import { Link } from 'react-router-dom';

// react icons
import { MdAlternateEmail, MdLockOutline } from 'react-icons/md';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { BiUserPin } from 'react-icons/bi';
import { BsShieldCheck } from 'react-icons/bs';

// image
import googleImg from '../assets/images/google.png';

const SignUp = () => {
    const [type, setType] = useState('password');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        if (data.password.length < 6) {
            return alert('pass should be 6 cherecter')
        }
        if (data.password !== data.confirm) {
            return alert('pass did not match')
        }
        return console.log(data)
    };
    return (
        <section>
            <Breadcrumbs title="Sign Up" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                <div className='grid lg:grid-cols-2 gap-10 place-items-center'>
                    <div>
                        <Player
                            autoplay
                            loop
                            src="https://assets8.lottiefiles.com/packages/lf20_kdCeeh2u4M.json"
                            className='w-full'
                        >
                        </Player>
                    </div>

                    <div className='p-5 md:p-16 rounded-lg shadow-custom max-w-xl mx-auto'>
                        <h1 className='text-3xl md:text-5xl font-semibold text-dark'>Welcome Back!</h1>
                        <h2 className='text-lg text-gray mb-10'>Sign Up to continue</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='flex items-center border border-green rounded-lg gap-3 p-3'>
                                <label htmlFor="name"> <BiUserPin className='text-green text-2xl' /></label>
                                <input className='w-full border-none outline-none' id='name' placeholder="Enter full name" {...register("name")} />
                            </div>

                            <div className='flex items-center border border-green rounded-lg gap-3 p-3 mt-3'>
                                <label htmlFor="email"> <MdAlternateEmail className='text-green text-2xl' /></label>
                                <input type='email' className='w-full border-none outline-none' id='email' placeholder="Enter your email" {...register("email", { required: true })} />
                            </div>
                            {errors.email && <span className='text-sm text-red ml-1'>Email is required</span>}

                            <div className='flex items-center border border-green rounded-lg gap-3 p-3 mt-3'>
                                <label htmlFor="password"> <MdLockOutline className='text-green text-2xl' /></label>
                                <input type={type} className='w-full border-none outline-none' id='password' placeholder="password" {...register("password", { required: true })} />
                                <button onClick={() => setType(type === 'password' ? 'text' : 'password')}>
                                    {
                                        type === 'password' ? <AiOutlineEyeInvisible /> : <AiOutlineEye />
                                    }
                                </button>
                            </div>
                            {errors.password && <span className='text-sm text-red ml-1'>Password is required</span>}

                            <div className='flex items-center border border-green rounded-lg gap-3 p-3 mt-3'>
                                <label htmlFor="confirm"> <BsShieldCheck className='text-green text-2xl' /></label>
                                <input type={type} className='w-full border-none outline-none' id='confirm' placeholder="Confirm password" {...register("confirm", { required: true })} />
                                <button onClick={() => setType(type === 'password' ? 'text' : 'password')}>
                                    {
                                        type === 'password' ? <AiOutlineEyeInvisible /> : <AiOutlineEye />
                                    }
                                </button>
                            </div>
                            {errors.password && <span className='text-sm text-red ml-1'>Confirm password is required</span>}

                            <div className='flex items-center border border-green rounded-lg gap-3 p-3 mt-3'>
                                <label htmlFor="photo"> <HiOutlinePhotograph className='text-green text-2xl' /></label>
                                <input className='w-full border-none outline-none' id='photo' placeholder="Photo URL" {...register("photo")} />
                            </div>

                            <button className='btn_primary w-full mt-7 border' type='submit'>Sign Up</button>
                        </form>

                        <div className='flex items-center gap-3 mx-5 my-5'>
                            <span className='border-t border-orange w-full block'></span>
                            <span className='text-green'>OR</span>
                            <span className='border-t border-red w-full block'></span>
                        </div>

                        <button className='btn_primary flex items-center justify-center gap-3 border w-full'>
                            <img className='w-6' src={googleImg} alt="google" />
                            <p className='text-lg'>Login with Google</p>
                        </button>

                        <p className='mt-5 text-center text-gray'>Already have an account? <Link className='text-green' to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;