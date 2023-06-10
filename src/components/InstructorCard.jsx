import { Link, useLocation } from 'react-router-dom';

// react icons
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';

const InstructorCard = ({ item, instructorClasses, index }) => {
    const { name, instructor, instructorImage, email } = item;

    const { pathname } = useLocation();

    return (
        <div className='bg-white border border-orange hover:border-green transition-all duration-300 ease-in-out hover:shadow-xl rounded-md cursor-pointer px-5 py-10 group'>
            <div className='h-52 w-52 mx-auto rounded-full border-[5px] border-orange border-double group-hover:border-green duration-300 ease-in-out'>
                <img className='rounded-full w-full h-full' src={instructorImage} alt={instructor} />
            </div>

            <div className='mt-6 text-center'>
                <h1 className='text-2xl text-green drop-shadow-lg font-medium'>{instructor}</h1>

                {
                    pathname === '/instructors' && <p className='italic text-dark mb-1 flex items-center justify-center gap-1'><MdAlternateEmail className='text-green' /><span>{email}</span></p>
                }

                {
                    pathname === '/instructors' ? <p className='italic text-dark truncate'>Number Of Classes: {instructorClasses[index]?.numberOfClasses}</p> : <p className='italic text-dark truncate'>{name}</p>
                }
            </div>

            {/* social icons */}
            <div className={`flex items-center justify-center gap-1 mt-8 ${pathname === '/instructors' ? 'hidden' : ''}`}>
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#3b5998] cursor-pointer">
                    <FaFacebookF color="#3b5998" />
                </div>

                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#33bdfd] cursor-pointer">
                    <FaTwitter color="#33bdfd" />
                </div>

                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#171515] cursor-pointer">
                    <FaGithub color="#171515" />
                </div>

                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#0072b1] cursor-pointer">
                    <FaLinkedinIn color="#0072b1" />
                </div>
            </div>

            <div className={`text-center mt-6 ${pathname === '/instructors' ? '' : 'hidden'}`}>
                <Link to={`/instructorClasses/${instructor}`} className='btn_primary border border-green'>See Classes</Link>
            </div>
        </div>
    );
};

export default InstructorCard;