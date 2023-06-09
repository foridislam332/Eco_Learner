import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

// react icons
import { RiBookMarkLine } from 'react-icons/ri';
import { MdOutlineBookmarkAdded } from 'react-icons/md';
import { AiOutlineHome } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';

const DashboardDrawer = () => {
    const { logOut } = useContext(AuthContext);
    const { pathname } = useLocation();
    return (
        <div className='w-80 sticky top-0 h-screen bg-white rounded-lg flex flex-col justify-between shadow-xl shadow-indigo-500/20'>
            <nav>
                <div className='text-center py-4'>
                    <NavLink to='/' className='text-3xl font-semibold text-green'>Eco Learner</NavLink>
                </div>
                <div className='border-t border-orange mx-4'></div>
                <ul className='px-6 flex flex-col gap-5 mt-5 items-start'>
                    <li className='w-full'>
                        <NavLink to='/dashboard/studentHome' className={`flex items-center gap-2 hover:bg-green hover:text-white p-2 rounded-lg duration-300 ease-in-out ${pathname === '/dashboard/studentHome' ? 'bg-green text-white' : ''}`}><RiBookMarkLine size={25} /> <span>Selected Classes</span></NavLink>
                    </li>
                    <li className='w-full'>
                        <NavLink to='/dashboard/enrolledClasses' className={`flex items-center gap-2 hover:bg-green hover:text-white p-2 rounded-lg duration-300 ease-in-out ${pathname === '/dashboard/enrolledClasses' ? 'bg-green text-white' : ''}`}><MdOutlineBookmarkAdded size={25} /> <span>Enrolled Classes</span></NavLink>
                    </li>
                </ul>
                <div className='border-t border-orange mx-4 mt-5'></div>
                <div className='flex items-center justify-center mt-5'>
                    <NavLink to='/' className='flex items-center gap-2 bg-green text-white px-6 py-2 rounded-lg duration-300 ease-in-out text-center'><AiOutlineHome size={25} /> <span>Back to Home</span></NavLink>
                </div>
            </nav>
            <div className='mb-6 w-full px-6'>
                <button
                    className="w-full bg-red text-white font-medium py-2 mt-3 flex items-center justify-center gap-3 rounded-lg"
                    onClick={() => logOut()}
                >
                    <span>LogOut</span> <FiLogOut className='text-white' />
                </button>
            </div>
        </div>
    );
};

export default DashboardDrawer;