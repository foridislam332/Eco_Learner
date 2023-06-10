import useAuth from '../../../hooks/useAuth';

// react icons
import { FiLogOut } from 'react-icons/fi';

const Profile = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="ml-4 relative z-[999] profile hidden md:block group">
            <div
                className="flex items-center py-3 cursor-pointer"
            >
                {
                    user?.photoURL ? <img
                        className="h-14 w-14 rounded-full object-cover shadow-lg group-hover:shadow-custom duration-300"
                        src={user?.photoURL}
                        alt="User avatar"
                    /> :
                        <p
                            className="h-14 w-14 bg-blue text-white text-3xl flex items-center justify-center font-bold rounded-full shadow-lg group-hover:shadow-blue duration-300"
                        >
                            {user?.displayName?.slice(0, 1)}
                        </p>
                }
            </div>

            {/* Dropdown */}
            <div
                className="absolute right-0 top-28 max-w-xs min-w-[200px] bg-white shadow-lg origin-top-right transition-all duration-300 ease-in-out group-hover:top-[75px] invisible group-hover:visible opacity-0 group-hover:opacity-100">
                <p
                    to="/"
                    className="relative block w-full px-4 py-2 text-lg text-dark duration-300 hover:text-white hover:bg-orange z-10"
                >
                    {user?.displayName}
                </p>

                {
                    user.email && <p
                        to="/"
                        className="block px-4 py-1 text-sm text-dark"
                    >
                        {user.email}
                    </p>
                }

                <button
                    className="w-full bg-red text-white font-medium py-2 mt-3 flex items-center justify-center gap-3"
                    onClick={() => logOut()}
                >
                    <span>LogOut</span> <FiLogOut className='text-white' />
                </button>
            </div>
        </div>
    );
};

export default Profile;