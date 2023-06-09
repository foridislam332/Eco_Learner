import React from 'react';
import { Link } from 'react-router-dom';

// react icons
import { RiBookMarkLine } from 'react-icons/ri';
import { MdOutlineBookmarkAdded } from 'react-icons/md';
import { AiOutlineHome } from 'react-icons/ai';

const DashboardDrawer = () => {
    return (
        <div className='w-80 h-screen bg-white rounded-lg flex flex-col justify-between shadow-xl shadow-indigo-500/20'>
            <nav>
                <div className='text-center py-4'>
                    <Link to='/' className='text-3xl font-semibold text-green'>Eco Learner</Link>
                </div>
                <div className='border-t border-orange mx-4'></div>
                <ul className='px-6 flex flex-col gap-5 mt-5 items-start'>
                    <li className='w-full'>
                        <Link to='/' className='flex items-center gap-2 hover:bg-green hover:text-white p-2 rounded-lg duration-300 ease-in-out'><RiBookMarkLine size={25} /> <span>Selected Classes</span></Link>
                    </li>
                    <li className='w-full'>
                        <Link to='/' className='flex items-center gap-2 hover:bg-green hover:text-white p-2 rounded-lg duration-300 ease-in-out'><MdOutlineBookmarkAdded size={25} /> <span>Enrolled Classes</span></Link>
                    </li>
                </ul>
                <div className='border-t border-orange mx-4 mt-5'></div>
                <div className='flex items-center justify-center mt-5'>
                    <Link to='/' className='flex items-center gap-2 bg-green text-white px-6 py-2 rounded-lg duration-300 ease-in-out text-center'><AiOutlineHome size={25} /> <span>Back to Home</span></Link>
                </div>
            </nav>
            <div className='mb-6 w-full px-6'>
                <button className='bg-red text-white w-full py-2 rounded-lg'>Logout</button>
            </div>
        </div>
    );
};

export default DashboardDrawer;