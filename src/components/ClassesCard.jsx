import React from 'react';
import { useLocation } from 'react-router-dom';

// react icons
import { HiOutlineUsers } from 'react-icons/hi'
import { BiBook } from 'react-icons/bi'

const ClassesCard = ({ item }) => {
    const { name, instructor, image, des, price, availableSeats, enrolledStudents } = item;

    const { pathname } = useLocation();
    return (
        <div>
            <div className='bg-white transition-all duration-300 ease-in-out hover:shadow-custom rounded-md flex flex-col justify-between cursor-pointer hover:-mt-4'>
                <img className='rounded-md' src={image} alt={name} />

                <div className={`flex-1 px-5 pt-5`}>
                    <h1 className='text-xl text-dark drop-shadow-lg font-semibold'>{name}</h1>

                    <p className='italic text-sm text-dark'><span className='text-xs text-gray'>by</span> {instructor}</p>
                </div>

                <div className='px-5 pb-5'>
                    <p className='mt-3 text-sm text-gray'>{des.slice(0, 65)} ...</p>

                    <div className='flex items-center justify-between mt-2'>
                        <div>
                            {
                                pathname === '/' ? null : <p className='text-gray flex items-center gap-1'>
                                    <HiOutlineUsers /> <span>{enrolledStudents} Students</span>
                                </p>

                            }
                            <p className='text-gray flex items-center gap-1'>
                                <BiBook /> <span>{25 - enrolledStudents} Seats left</span>
                            </p>
                        </div>
                        <p className='text-xl text-dark font-bold'>${price}</p>
                    </div>
                    {
                        pathname === '/' ? null : <div className='flex-1 flex items-end justify-center mt-5'>
                            <button className='btn_primary border border-green'>Select Class</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;