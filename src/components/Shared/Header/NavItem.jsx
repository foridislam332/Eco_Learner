import React, { useContext } from 'react';
import ActiveLink from './ActiveLink';
import { AuthContext } from '../../../Providers/AuthProvider';
import Profile from './Profile';

const NavItem = () => {
    const { user } = useContext(AuthContext);
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