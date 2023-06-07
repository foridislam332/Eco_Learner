import React from 'react';
import NavItem from './NavItem';

// react icons
import { MdClose } from "react-icons/md";

const MobileNav = ({ open, toggle }) => {
    return (
        <>
            <nav className={`lg:hidden fixed bg-dark text-white w-[250px] h-screen top-0 z-50 px-6 transition-all duration-300 ease-in ${open ? 'right-0' : '-right-80 '}`}>
                <button onClick={toggle} className='text-red text-3xl absolute top-3 right-3'>
                    <MdClose />
                </button>

                <ul className='mt-16 flex flex-col gap-3'>
                    <NavItem />
                </ul>
            </nav>
            {/* overlay */}
            <div onClick={toggle} className={`fixed lg:hidden w-full h-screen top-0 left-0 z-30 bg-[rgba(0,0,0,.5)] transition-all duration-300 ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}></div>
        </>
    );
};

export default MobileNav;