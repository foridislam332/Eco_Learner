import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

// react icons
import { HiOutlineUsers } from 'react-icons/hi'
import { BiBook } from 'react-icons/bi'
import { AuthContext } from '../Providers/AuthProvider';
import axios from 'axios';
import { toast } from 'react-toastify';
import useSelectedClasses from '../hooks/useSelectedClasses';

const ClassesCard = ({ item }) => {
    const { user } = useContext(AuthContext);
    const [selectedClasses, loading, refetch] = useSelectedClasses();
    const { name, instructor, image, des, price, enrolledStudents } = item;

    const { pathname } = useLocation();

    const isExists = selectedClasses.find(cls => cls.classId == item._id)

    const api = axios.create({
        baseURL: 'http://localhost:5000',
    });
    const handleSelectedClass = (item) => {
        const selectedClass = { email: user.email, classId: item._id, name: item.name, image: item.image, price: item.price, students: item.enrolledStudents };

        if (isExists) {
            return toast.warning("Class already Selected", {
                position: "top-right",
                autoClose: 3000,
                theme: "light",
            });
        }

        api.post('/selectedClasses', selectedClass)
            .then(data => {
                if (data.data.insertedId) {
                    refetch();
                    toast.success("Class Selected", {
                        position: "top-right",
                        autoClose: 3000,
                        theme: "light",
                    });
                }
            })
    }
    return (
        <div className={`${enrolledStudents === 25 ? 'bg-red' : 'bg-white'} hover:shadow-custom rounded-md flex flex-col justify-between hover:-translate-y-4 duration-300 ease-in-out`}>
            <img className='rounded-md' src={image} alt={name} />

            <div className={`flex-1 px-5 pt-5`}>
                <h1 className='text-xl text-dark drop-shadow-lg font-semibold'>{name}</h1>

                <p className='italic text-sm text-dark'><span className='text-xs text-gray'>by</span> {instructor}</p>
            </div>

            <div className={`px-5 pb-5 ${enrolledStudents === 25 ? 'text-dark' : 'text-gray'}`}>
                <p className='mt-3 text-sm'>{des.slice(0, 65)} ...</p>

                <div className='flex items-center justify-between mt-2'>
                    <div>
                        {
                            pathname === '/' ? null : <p className='flex items-center gap-1'>
                                <HiOutlineUsers /> <span>{enrolledStudents} Students</span>
                            </p>

                        }
                        <p className='flex items-center gap-1'>
                            <BiBook /> <span>{25 - enrolledStudents} Seats left</span>
                        </p>
                    </div>
                    <p className='text-xl text-dark font-bold'>${price}</p>
                </div>
                {
                    pathname === '/' ? null : <div className='flex-1 flex items-end justify-center mt-5'>
                        {
                            user?.email ? <button onClick={() => handleSelectedClass(item)}
                                disabled={enrolledStudents === 25 ? true : false} className='btn_primary border border-green'>{isExists ? 'Selected' : 'Select Class'}</button> :
                                <Link to='/login' className='btn_primary border border-green'>Select Class</Link>
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default ClassesCard;