import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";

import MobileNav from "./MobileNav";

// logo 
import Logo from '../../../assets/images/logo.png';

// react icons
import { HiBars3 } from 'react-icons/hi2';

const Header = () => {
    const [open, setOpen] = useState(false);

    const [scrollNav, setScrollNav] = useState(false);
    const onNavScroll = () => {
        if (window.scrollY > 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", onNavScroll);
    }, []);

    return (
        <header className={`fixed top-0 w-full py-1 z-[999] duration-300 ease-in-out shadow-xl ${scrollNav ? 'backdrop-blur-lg bg-white/60 dark:bg-black' : 'bg-black bg-opacity-50 dark:bg-black'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link to="/">
                            <img className="w-44" src={Logo} alt="eco learner logo" />
                        </Link>
                    </div>

                    {/* bars icons */}
                    <button className="inline-block lg:hidden" onClick={() => setOpen(!open)}>
                        <HiBars3 className="text-white hover:text-green duration-300" size={28} />
                    </button>

                    <ul className={`hidden lg:flex items-center gap-6 dark:text-white ${scrollNav ? 'text-dark' : 'text-white'}`}>
                        <NavItem />
                    </ul>
                </nav>

                {/* mobile nav */}
                <MobileNav open={open} toggle={() => setOpen(!open)} />
            </div>
        </header>
    );
};

export default Header;