import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";

import MobileNav from "./MobileNav";

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
        <header className={`fixed top-0 w-full py-1 z-[999] duration-300 ease-in-out ${scrollNav ? 'backdrop-blur-md bg-white/30' : 'bg-black bg-opacity-50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-green font-medium text-xl">Eco Learner</Link>
                    </div>

                    {/* bars icons */}
                    <button className="inline-block lg:hidden" onClick={() => setOpen(!open)}>
                        <HiBars3 className="text-navy hover:text-pink duration-300" size={28} />
                    </button>

                    <ul className="hidden lg:flex items-center gap-6 text-white">
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