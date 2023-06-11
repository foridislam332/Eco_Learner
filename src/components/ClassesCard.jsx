import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import useSelectedClasses from '../hooks/useSelectedClasses';
import useAuth from '../hooks/useAuth';

// react icons
import { HiOutlineUsers } from 'react-icons/hi'
import { BiBook } from 'react-icons/bi'
import useCurrentUser from '../hooks/useCurrentUser';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useState } from 'react';

const ClassesCard = ({ item }) => {
    const { name, instructor, image, des, price, seats, students } = item;
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [currentUser] = useCurrentUser();
    const role = currentUser.role;

    const { pathname } = useLocation();
    const [selectedClasses, , refetch] = useSelectedClasses();
    const isExists = selectedClasses?.find(cls => cls.classId == item._id)

    const handleSelectedClass = (item) => {
        const selectedClass = { email: user.email, classId: item._id, name: item.name, image: item.image, price: item.price, seats: item.seats };

        if (isExists) {
            return toast.warning("Class already Selected", {
                position: "bottom-right",
                autoClose: 3000,
                theme: "light",
            });
        }

        axiosSecure.post('/selectedClasses', selectedClass)
            .then(data => {
                if (data.data.insertedId) {
                    refetch();
                    toast.success("Class Selected", {
                        position: "bottom-right",
                        autoClose: 3000,
                        theme: "light",
                    });
                }
            })
    }
    return (
        <div className={`${seats === 0 ? 'bg-red' : 'bg-white'} hover:shadow-xl rounded-md flex flex-col justify-between hover:-translate-y-4 duration-300 ease-in-out`}>
            <img className='rounded-md' src={image} alt={name} />

            <div className={`flex-1 px-5 pt-5`}>
                <h1 className='text-xl text-dark drop-shadow-lg font-semibold'>{name}</h1>

                <p className='italic text-sm text-dark'><span className='text-xs text-gray'>by</span> {instructor}</p>
            </div>

            <div className={`px-5 pb-5 ${seats === 0 ? 'text-dark' : 'text-gray'}`}>
                <p className='mt-3 text-sm'>{des?.slice(0, 65)} ...</p>

                <div className='flex items-center justify-between mt-2'>
                    <div>
                        {
                            pathname === '/' ? null : <p className='flex items-center gap-1'>
                                <HiOutlineUsers /> <span>{students} Students</span>
                            </p>

                        }
                        <p className='flex items-center gap-1'>
                            <BiBook /> <span>{seats} Seats left</span>
                        </p>
                    </div>
                    <p className='text-xl text-dark font-bold'>${price}</p>
                </div>
                {
                    pathname === '/' ? null : <div className='flex-1 flex items-end justify-center mt-5'>
                        {
                            user?.email ? <button onClick={() => handleSelectedClass(item)}
                                disabled={seats === 0 || role === 'admin' || role === 'instructor' ? true : false} className={`btn_primary border border-green ${seats === 0 || role === 'admin' || role === 'instructor' ? 'btn_disable' : null}`}>{isExists ? 'Selected' : 'Select Class'}</button> :
                                <Link to='/login' className='btn_primary border border-green'>Select Class</Link>
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default ClassesCard;