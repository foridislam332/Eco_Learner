import { Link, useLocation } from 'react-router-dom';

// react icons
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';

const InstructorCard = ({ item, instructorClasses, index }) => {
    const { name, instructor, instructorImage, email } = item;

    const { pathname } = useLocation();

    return (
        <div className='bg-white dark:bg-dark border border-orange dark:border-dark hover:border-green transition-all duration-300 ease-in-out hover:shadow-2xl rounded-md cursor-pointer px-5 py-10 group'>
            <div className='h-52 w-52 mx-auto rounded-full border-[5px] border-orange border-double group-hover:border-green duration-300 ease-in-out'>
                <img className='rounded-full w-full h-full' src={instructorImage} alt={instructor} />
            </div>

            <div className='mt-6 text-center'>
                <h1 className='text-2xl text-green drop-shadow-lg font-medium'>{instructor}</h1>

                {
                    pathname === '/instructors' && <p className='italic text-dark dark:text-white mb-1 flex items-center justify-center gap-1'><MdAlternateEmail className='text-green' /><span>{email}</span></p>
                }

                {
                    pathname === '/instructors' ? <p className='italic text-dark dark:text-white truncate'>Number Of Classes: {instructorClasses[index]?.numberOfClasses}</p> : <p className='italic text-dark dark:text-white truncate'>{name}</p>
                }
            </div>

            {/* social icons */}
            <div className={`flex items-center justify-center gap-1 mt-8 ${pathname === '/instructors' ? 'hidden' : ''}`}>
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#3b5998] dark:border-white cursor-pointer">
                    <FaFacebookF className='text-[#3b5998] dark:text-white' />
                </div>

                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#33bdfd] dark:border-white cursor-pointer">
                    <FaTwitter className='text-[#33bdfd] dark:text-white' />
                </div>

                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#171515] dark:border-white cursor-pointer">
                    <FaGithub className='text-[#171515] dark:text-white' />
                </div>

                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#0072b1] dark:border-white cursor-pointer">
                    <FaLinkedinIn className='text-[#0072b1] dark:text-white' />
                </div>
            </div>

            <div className={`text-center mt-6 ${pathname === '/instructors' ? '' : 'hidden'}`}>
                <Link to={`/instructorClasses/${instructor}`} className='btn_primary border border-green'>See Classes</Link>
            </div>
        </div>
    );
};

export default InstructorCard;