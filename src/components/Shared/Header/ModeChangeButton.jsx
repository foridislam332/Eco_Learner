import { useState } from 'react';

import { MdOutlineLightMode, MdOutlineNightlight } from 'react-icons/md';

const ModeChangeButton = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (darkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    };
    return (
        <button
            className="w-24 h-10 bg-black dark:bg-white relative rounded-3xl shadow-2xl"
            onClick={toggleDarkMode}
        >
            <p className='text-white dark:text-dark text-left dark:text-right ml-3 dark:mr-3'>{darkMode ? 'Light' : 'Dark'}</p>
            <p
                className='absolute top-1/2 -right-[10px] dark:right-[43px] -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-dark dark:text-white h-8 w-8 rounded-full flex items-center justify-center duration-300'
            >
                <MdOutlineLightMode className='hidden dark:inline text-white' size={20} />
                <MdOutlineNightlight className='dark:hidden text-dark' size={20} />
            </p>
        </button>
    );
};

export default ModeChangeButton;