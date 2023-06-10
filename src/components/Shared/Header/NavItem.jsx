import ActiveLink from './ActiveLink';
import Profile from './Profile';
import useAuth from '../../../hooks/useAuth';

const NavItem = () => {
    const { user } = useAuth();
    return (
        <>
            <li>
                <ActiveLink to='/'>Home</ActiveLink>
            </li>
            <li>
                <ActiveLink to='/instructors'>Instructors</ActiveLink>
            </li>
            <li>
                <ActiveLink to='/classes'>Classes</ActiveLink>
            </li>
            <li>
                <ActiveLink to='/dashboard/studentHome'>Dashboard </ActiveLink>
            </li>
            <li>
                {
                    user?.email ? <Profile /> : <ActiveLink to='/login'>Login</ActiveLink>
                }
            </li>
        </>
    );
};

export default NavItem;