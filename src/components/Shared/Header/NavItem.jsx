import ActiveLink from './ActiveLink';
import Profile from './Profile';
import useAuth from '../../../hooks/useAuth';
import useCurrentUser from '../../../hooks/useCurrentUser';

const NavItem = () => {
    const { user } = useAuth();
    const [currentUser] = useCurrentUser();
    const role = currentUser.role;
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
                {
                    role ? <ActiveLink to={`${role === 'student' && '/dashboard/studentHome' || role === 'instructor' && '/dashboard/myClasses' || role === 'admin' && '/dashboard/manageClasses'}`}>Dashboard</ActiveLink> :
                        null
                }
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