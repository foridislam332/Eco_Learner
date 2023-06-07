import React from 'react';
import { useLocation } from 'react-router-dom';

const ClassesCard = ({ item }) => {
    const { name, instructor, image, des, price, availableSeats, enrolledStudents } = item;

    const { pathname } = useLocation();
    return (
        <div className='bg-green hover:bg-orange transition-all duration-300 ease-in-out hover:shadow-custom rounded-md flex flex-col justify-between cursor-pointer text-white relative hover:-translate-y-4'>
            <img className='rounded-md' src={image} alt={name} />

            <div className={`${pathname === '/' ? 'flex-1' : null} px-5 pt-5`}>
                <h1 className='text-xl drop-shadow-lg font-medium'>{name}</h1>

                <p className='italic text-sm text-dark'><span className='text-xs text-gray'>by</span> {instructor}</p>
            </div>

            <div className='px-5 pb-5'>
                <p className='mt-3 text-sm text-gray'>{des.slice(0, 65)} ...</p>

                <div className='flex items-center justify-between mt-2'>
                    <div>
                        {
                            pathname === 'classes' && <p className='text-sm'>Students: {enrolledStudents}</p>
                        }
                        <p className='text-sm'>Available seats: {availableSeats}</p>
                    </div>
                    <p className='text-xl text-dark font-bold'>${price}</p>
                </div>
                {
                    pathname === 'classes' && <div className='flex-1 flex items-end justify-center pb-5 mt-2'>
                        <button className='btn_primary'>Select Class</button>
                    </div>
                }
            </div>

        </div>
    );
};

export default ClassesCard;