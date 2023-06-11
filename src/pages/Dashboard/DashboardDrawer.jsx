import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useCurrentUser from '../../hooks/useCurrentUser';
import MobileDrawerNav from './MobileDrawerNav';

// react icons
import { RiBookMarkLine } from 'react-icons/ri';
import { MdOutlineBookmarkAdded, MdOutlineNoteAdd, MdOutlineManageAccounts, MdOutlineHistory } from 'react-icons/md';
import { AiOutlineHome } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { GiBlackBook } from 'react-icons/gi';
import { VscSettings } from 'react-icons/vsc';

const DashboardDrawer = () => {
    const { logOut } = useAuth();
    const { pathname } = useLocation();

    const [currentUser] = useCurrentUser();
    const role = currentUser.role;
    return (
        <div className='w-20 lg:w-80 sticky top-0 h-screen bg-white rounded-lg flex flex-col justify-between shadow-xl shadow-indigo-500/20'>
            <nav className='hidden lg:block'>
                <div className='text-center py-4'>
                    <NavLink to='/' className='text-3xl font-semibold text-green'>Eco Learner</NavLink>
                </div>
                <div className='border-t border-orange mx-4'></div>

                {/* students */}
                {
                    role === 'student' && <ul className='px-6 flex flex-col gap-5 mt-5 items-start'>
                        <li className='w-full'>
                            <NavLink to='/dashboard/studentHome' className={`flex items-center gap-2 hover:bg-green hover:text-white p-2 rounded-lg duration-300 ease-in-out ${pathname === '/dashboard/studentHome' ? 'bg-green text-white' : ''}`}><RiBookMarkLine size={25} /> <span>Selected Classes</span></NavLink>
                        </li>
                        <li className='w-full'>
                            <NavLink to='/dashboard/enrolledClasses' className={`flex items-center gap-2 hover:bg-green hover:text-white p-2 rounded-lg duration-300 ease-in-out ${pathname === '/dashboard/enrolledClasses' ? 'bg-green text-white' : ''}`}><MdOutlineBookmarkAdded size={25} /> <span>Enrolled Classes</span></NavLink>
                        </li>
                        <li className='w-full'>
                            <NavLink to='/dashboard/paymentHistory' className={`flex items-center gap-2 hover:bg-green hover:text-white p-2 rounded-lg duration-300 ease-in-out ${pathname === '/dashboard/paymentHistory' ? 'bg-green text-white' : ''}`}><MdOutlineHistory size={25} /> <span>Payment History</span></NavLink>
                        </li>
                    </ul>
                }

                {/* Instructor */}
                {
                    role === 'instructor' && <ul className='px-6 flex flex-col gap-5 mt-5 items-start'>
                        <li className='w-full'>
                            <NavLink to='/dashboard/myClasses' className={`flex items-center gap-2 hover:bg-green hover:text-white p-2 rounded-lg duration-300 ease-in-out ${pathname === '/dashboard/myClasses' ? 'bg-green text-white' : ''}`}><GiBlackBook size={25} /> <span>My Classes</span></NavLink>
                        </li>
                        <li className='w-full'>
                            <NavLink to='/dashboard/addClass' className={`flex items-center gap-2 hover:bg-green hover:text-white p-2 rounded-lg duration-300 ease-in-out ${pathname === '/dashboard/addClass' ? 'bg-green text-white' : ''}`}><MdOutlineNoteAdd size={25} /> <span>Add a Class</span></NavLink>
                        </li>
                    </ul>
                }

                {/* admin */}
                {
                    role === 'admin' && <ul className='px-6 flex flex-col gap-5 mt-5 items-start'>
                        <li className='w-full'>
                            <NavLink to='/dashboard/manageClasses' className={`flex items-center gap-2 hover:bg-green hover:text-white p-2 rounded-lg duration-300 ease-in-out ${pathname === '/dashboard/manageClasses' ? 'bg-green text-white' : ''}`}><VscSettings size={25} /> <span>Manage Classes</span></NavLink>
                        </li>
                        <li className='w-full'>
                            <NavLink to='/dashboard/manageUsers' className={`flex items-center gap-2 hover:bg-green hover:text-white p-2 rounded-lg duration-300 ease-in-out ${pathname === '/dashboard/manageUsers' ? 'bg-green text-white' : ''}`}><MdOutlineManageAccounts size={25} /> <span>Manage Users</span></NavLink>
                        </li>
                    </ul>
                }

                <div className='border-t border-orange mx-4 mt-5'></div>
                <div className='flex items-center justify-center mt-5'>
                    <NavLink to='/' className='flex items-center gap-2 bg-green text-white px-6 py-2 rounded-lg duration-300 ease-in-out text-center'><AiOutlineHome size={25} /> <span>Back to Home</span></NavLink>
                </div>
            </nav>

            <MobileDrawerNav role={role} pathname={pathname} />
            <div className='mb-6 w-full px-2 lg:px-6'>
                <button
                    title='LogOut'
                    className="w-full bg-red text-white font-medium py-2 mt-3 flex items-center justify-center gap-3 rounded-lg"
                    onClick={() => logOut()}
                >
                    <span className='hidden lg:inline'>LogOut</span> <FiLogOut className='text-white text-2xl' />
                </button>
            </div>
        </div>
    );
};

export default DashboardDrawer;