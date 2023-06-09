import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

// react icons
import { TfiAngleDown } from 'react-icons/tfi';
import { BsSearch } from 'react-icons/bs';

const DashboardNav = () => {
    const { user } = useContext(AuthContext);
    const role = 'Student';
    return (
        <div className='bg-white flex items-center justify-between px-5 rounded-lg shadow-xl shadow-indigo-500/20'>
            <div className='border border-green w-96 px-4 py-3 rounded-3xl hidden md:flex items-center'>
                <input className='w-full border-none outline-none' type="text" placeholder='Search' />
                <button>
                    <BsSearch className='text-green' />
                </button>
            </div>

            <button className='md:hidden'>
                <BsSearch className='text-green text-xl' />
            </button>

            <div className='flex items-center gap-4'>
                <div className='relative py-2'>
                    {
                        user?.photoURL ? <img className='rounded-full w-14 shadow-lg' src={user?.photoURL} alt={user?.displayName} /> : <p className='rounded-full w-14 h-14 shadow-lg flex items-center justify-center uppercase text-3xl font-semibold text-dark'>{user?.displayName?.split(' ')[0]?.slice(0, 1)}{user?.displayName?.split(' ')[1]?.slice(0, 1)}</p>
                    }

                    <div className='absolute top-2 right-0'>
                        <span className="relative flex h-4 w-4 items-center justify-center">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green"></span>
                        </span>
                    </div>
                </div>
                <div className='text-gray flex items-center gap-2'>
                    <div>
                        <p className='-mb-1'>{user?.displayName}</p>
                        <p className='text-sm text-[#b6b4b4] italic'>{role}</p>
                    </div>
                    <TfiAngleDown />
                </div>
            </div>
        </div>
    );
};

export default DashboardNav;