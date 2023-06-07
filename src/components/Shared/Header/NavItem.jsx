import React from 'react';
import ActiveLink from './ActiveLink';

const NavItem = () => {
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
                <ActiveLink to='/dashboard '>Dashboard </ActiveLink>
            </li>
            <li>
                <ActiveLink to='/login'>Login</ActiveLink>
            </li>
        </>
    );
};

export default NavItem;