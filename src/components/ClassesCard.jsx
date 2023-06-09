import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

// react icons
import { HiOutlineUsers } from 'react-icons/hi'
import { BiBook } from 'react-icons/bi'
import { AuthContext } from '../Providers/AuthProvider';

const ClassesCard = ({ item }) => {
    const { user } = useContext(AuthContext);
    const { name, instructor, image, des, price, enrolledStudents } = item;

    const { pathname } = useLocation();
    return (
        <div className='bg-white hover:shadow-custom rounded-md flex flex-col justify-between hover:-translate-y-4 duration-300 ease-in-out'>
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
                        {
                            user?.email ? <button className='btn_primary border border-green'>Select Class</button> :
                                <Link to='/login' className='btn_primary border border-green'>Select Class</Link>
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default ClassesCard;