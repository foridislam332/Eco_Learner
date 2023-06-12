import { NavLink } from 'react-router-dom';

// react icons
import { RiBookMarkLine } from 'react-icons/ri';
import { MdOutlineBookmarkAdded, MdOutlineNoteAdd, MdOutlineManageAccounts, MdOutlineHistory } from 'react-icons/md';
import { AiOutlineHome } from 'react-icons/ai';
import { GiBlackBook } from 'react-icons/gi';
import { VscSettings } from 'react-icons/vsc';

// logo 
import Logo from '../../assets/images/fav.png';

const MobileDrawerNav = ({ role, pathname }) => {
    return (
        <nav className='lg:hidden'>
            <div className='text-center py-4 flex items-center justify-center'>
                <NavLink to='/'><img className="w-12" src={Logo} alt="eco learner logo" /></NavLink>
            </div>
            <div className='border-t border-orange mx-4'></div>

            {/* students */}
            {
                role === 'student' && <ul className='flex flex-col gap-5 mt-5 items-center justify-center'>
                    <li>
                        <NavLink
                            title='Selected Classes'
                            to='/dashboard/studentHome'
                            className={`block w-full p-3 rounded-lg ${pathname === '/dashboard/studentHome' ? 'bg-green text-white' : 'text-green'}`}
                        ><RiBookMarkLine size={35} /></NavLink>
                    </li>
                    <li>
                        <NavLink
                            title='Enrolled Classes'
                            to='/dashboard/enrolledClasses'
                            className={`block w-full p-3 rounded-lg ${pathname === '/dashboard/enrolledClasses' ? 'bg-green text-white' : 'text-green'}`}
                        ><MdOutlineBookmarkAdded size={35} /></NavLink>
                    </li>
                    <li>
                        <NavLink
                            title='Payment History'
                            to='/dashboard/paymentHistory'
                            className={`block w-full p-3 rounded-lg ${pathname === '/dashboard/paymentHistory' ? 'bg-green text-white' : 'text-green'}`}
                        ><MdOutlineHistory size={35} /></NavLink>
                    </li>
                </ul>
            }

            {/* Instructor */}
            {
                role === 'instructor' && <ul className='flex flex-col gap-5 mt-5 items-center justify-center'>
                    <li>
                        <NavLink
                            title='My Classes'
                            to='/dashboard/myClasses'
                            className={`block w-full p-3 rounded-lg ${pathname === '/dashboard/myClasses' ? 'bg-green text-white' : 'text-green'}`}
                        ><GiBlackBook size={35} /></NavLink>
                    </li>
                    <li>
                        <NavLink
                            title='Enrolled Classes'
                            to='/dashboard/addClass'
                            className={`block w-full p-3 rounded-lg ${pathname === '/dashboard/addClass' ? 'bg-green text-white' : 'text-green'}`}
                        ><MdOutlineNoteAdd size={35} /></NavLink>
                    </li>
                </ul>
            }

            {/* admin */}
            {
                role === 'admin' && <ul className='flex flex-col gap-5 mt-5 items-center justify-center'>
                    <li>
                        <NavLink
                            title='Manage Classes'
                            to='/dashboard/manageClasses'
                            className={`block w-full p-3 rounded-lg ${pathname === '/dashboard/manageClasses' ? 'bg-green text-white' : 'text-green'}`}
                        ><VscSettings size={35} /></NavLink>
                    </li>
                    <li>
                        <NavLink
                            title='Manage Users'
                            to='/dashboard/manageUsers'
                            className={`block w-full p-3 rounded-lg ${pathname === '/dashboard/manageUsers' ? 'bg-green text-white' : 'text-green'}`}
                        ><MdOutlineManageAccounts size={35} /></NavLink>
                    </li>
                </ul>
            }

            <div className='border-t border-orange mx-4 mt-5'></div>
            <div className='flex items-center justify-center mt-5'>
                <NavLink to='/' className='flex items-center gap-2 bg-green text-white px-6 py-2 rounded-lg duration-300 ease-in-out text-center'><AiOutlineHome size={25} /></NavLink>
            </div>
        </nav>
    );
};

export default MobileDrawerNav;