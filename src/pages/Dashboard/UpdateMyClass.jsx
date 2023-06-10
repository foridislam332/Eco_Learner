import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import Swal from 'sweetalert2';

const UpdateMyClass = () => {
    const classData = useLoaderData();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const api = axios.create({
            baseURL: 'http://localhost:5000',
        });
        api.patch(`/classes/${classData._id}`, data)
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Class update success',
                        showConfirmButton: false,
                        timer: 2500
                    });
                    navigate('/dashboard/myClasses', { replace: true })
                }
            })
    };
    return (
        <div className='shadow-xl shadow-indigo-500/20 my-5 p-5 rounded-lg bg-white'>
            <div className='mb-8'>
                <h1 className='text-3xl text-dark font-medium drop-shadow-xl'>Update Class</h1>
                <p className='text-sm text-gray italic drop-shadow-xl font-light'>Dashboard / <span className='text-green'>Update Class</span></p>
            </div>

            {/* Selected Classes table */}

            {
                !classData.email ? <Loading /> : <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col lg:flex-row items-start gap-4'>
                        <div className='w-full lg:w-2/3'>
                            <label className='text-gray' htmlFor="name">Class Name:</label>
                            <input id='name' defaultValue={classData.name} {...register("name", { required: true })} className='w-full border border-green py-2 px-3 rounded-md outline-none' />
                            {errors.name && <span className='text-red'>This field is required</span>}
                        </div>

                        <div className='w-full flex flex-col md:flex-row gap-4'>
                            <div className='w-full'>
                                <label className='text-gray' htmlFor="instructor">Instructor Name:</label>
                                <input id='instructor' defaultValue={classData.instructor} {...register("instructor", { required: true })} className='w-full border border-green py-2 px-3 rounded-md outline-none' />
                                {errors.instructor && <span className='text-red'>This field is required</span>}
                            </div>

                            <div className='w-full'>
                                <label className='text-gray' htmlFor="email">Email:</label>
                                <input type='email' id='email' disabled defaultValue={classData.email} {...register("email")} className='w-full border border-green py-2 px-3 rounded-md outline-none' />
                            </div>
                        </div>
                    </div>

                    <div className='w-full flex flex-col md:flex-row gap-4 mt-4'>
                        <div className='w-full'>
                            <label className='text-gray' htmlFor="image">Class Image:</label>
                            <input id='image' defaultValue={classData.image} {...register("image", { required: true })} className='w-full border border-green py-2 px-3 rounded-md outline-none' />
                            {errors.image && <span className='text-red'>This field is required</span>}
                        </div>

                        <div className='w-full'>
                            <label className='text-gray' htmlFor="instructorImage">Instructor Image:</label>
                            <input id='instructorImage' defaultValue={classData.instructorImage} {...register("instructorImage", { required: true })} className='w-full border border-green py-2 px-3 rounded-md outline-none' />
                            {errors.instructorImage && <span className='text-red'>This field is required</span>}
                        </div>
                    </div>

                    <div className='w-full mt-4'>
                        <label className='text-gray' htmlFor="des">Description:</label>
                        <textarea rows={4} id='des' defaultValue={classData.des} {...register("des", { required: true })} className='w-full border border-green py-2 px-3 rounded-md outline-none' />
                        {errors.des && <span className='text-red'>This field is required</span>}
                    </div>

                    <div className='mt-4 flex flex-col md:flex-row items-end gap-4'>
                        <div className='w-full'>
                            <label className='text-gray' htmlFor="price">Price:</label>
                            <input id='price' defaultValue={classData.price} {...register("price", { required: true })} className='w-full border border-green py-2 px-3 rounded-md outline-none' />
                            {errors.price && <span className='text-red'>This field is required</span>}
                        </div>
                        <div className='w-full'>
                            <label className='text-gray' htmlFor="seats">Available seats:</label>
                            <input id='seats' defaultValue={classData.seats} {...register("seats", { required: true })} className='w-full border border-green py-2 px-3 rounded-md outline-none' />
                            {errors.seats && <span className='text-red'>This field is required</span>}
                        </div>
                        <div className='w-full'>
                            <button className='overflow-hidden btn_primary w-full border border-green' >Update Class</button>
                        </div>
                    </div>
                </form>
            }
        </div>
    );
};

export default UpdateMyClass;