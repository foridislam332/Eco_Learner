import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';

const AddClass = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const api = axios.create({
            baseURL: 'http://localhost:5000',
        });
        api.post('/classes', data)
            .then(data => {
                if (data.data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Class add success',
                        showConfirmButton: false,
                        timer: 3000
                    })
                }
            })
    };
    return (
        <div className='shadow-xl shadow-indigo-500/20 my-5 p-5 rounded-lg bg-white'>
            <div className='mb-8'>
                <h1 className='text-3xl text-dark font-medium drop-shadow-xl'>Add a Class</h1>
                <p className='text-sm text-gray italic drop-shadow-xl font-light'>Dashboard / <span className='text-green'>Add a Class</span></p>
            </div>

            {/* Selected Classes table */}

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col lg:flex-row items-start gap-4'>
                    <div className='w-full lg:w-2/3'>
                        <label className='text-gray' htmlFor="name">Class Name:</label>
                        <input id='name' placeholder='Enter class name' {...register("name", { required: true })} className='w-full border border-green py-2 px-3 rounded-md outline-none' />
                        {errors.name && <span className='text-red'>This field is required</span>}
                    </div>

                    <div className='w-full flex flex-col md:flex-row gap-4'>
                        <div className='w-full'>
                            <label className='text-gray' htmlFor="instructor">Instructor Name:</label>
                            <input id='instructor' defaultValue={user?.displayName} {...register("instructor", { required: true })} className='w-full border border-green py-2 px-3 rounded-md outline-none' />
                            {errors.instructor && <span className='text-red'>This field is required</span>}
                        </div>
                        <div className='w-full'>
                            <label className='text-gray' htmlFor="email">Email:</label>
                            <input id='email' defaultValue={user?.email} {...register("email", { required: true })} className='w-full border border-green py-2 px-3 rounded-md outline-none' />
                            {errors.email && <span className='text-red'>This field is required</span>}
                        </div>
                    </div>
                </div>

                <div className='w-full flex flex-col md:flex-row gap-4 mt-4'>
                    <div className='w-full'>
                        <label className='text-gray' htmlFor="image">Class Image:</label>
                        <input id='image' placeholder="Enter class image URL" {...register("image", { required: true })} className='w-full border border-green py-2 px-3 rounded-md outline-none' />
                        {errors.image && <span className='text-red'>This field is required</span>}
                    </div>
                    <div className='w-full'>
                        <label className='text-gray' htmlFor="instructorImage">Instructor Image:</label>
                        <input id='instructorImage' defaultValue={user?.photoURL} {...register("instructorImage", { required: true })} className='w-full border border-green py-2 px-3 rounded-md outline-none' />
                        {errors.instructorImage && <span className='text-red'>This field is required</span>}
                    </div>
                </div>

                <div className='w-full mt-4'>
                    <label className='text-gray' htmlFor="des">Description:</label>
                    <textarea rows={4} id='des' placeholder='Write Description' {...register("des", { required: true })} className='w-full border border-green py-2 px-3 rounded-md outline-none' />
                    {errors.des && <span className='text-red'>This field is required</span>}
                </div>


                <div className='mt-4 flex flex-col md:flex-row items-end gap-4'>
                    <div className='w-full'>
                        <label className='text-gray' htmlFor="price">Price:</label>
                        <input id='price' placeholder='Class price' {...register("price", { required: true })} className='w-full border border-green py-2 px-3 rounded-md outline-none' />
                        {errors.price && <span className='text-red'>This field is required</span>}
                    </div>
                    <div className='w-full'>
                        <label className='text-gray' htmlFor="student">Students:</label>
                        <input id='student' defaultValue={0} {...register("enrolledStudents", { required: true })} className='w-full border border-green py-2 px-3 rounded-md outline-none' />
                        {errors.student && <span className='text-red'>This field is required</span>}
                    </div>
                    <div className='w-full'>
                        <button className='overflow-hidden btn_primary w-full border border-green' >Add Class</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddClass;