// react icons
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const InstructorCard = ({ item }) => {
    const { name, instructor, instructorImage } = item;

    return (
        <div className='border border-orange hover:border-green transition-all duration-300 ease-in-out hover:shadow-custom rounded-md cursor-pointer px-5 py-10 group'>
            <div className='h-52 w-52 mx-auto rounded-full border-[5px] border-orange border-double group-hover:border-green duration-300 ease-in-out'>
                <img className='rounded-full w-full h-full' src={instructorImage} alt={instructor} />
            </div>

            <div className='mt-6 text-center'>
                <h1 className='text-2xl text-green drop-shadow-lg font-medium'>{instructor}</h1>

                <p className='italic text-dark'>{name}</p>
            </div>

            {/* social icons */}
            <div className="flex items-center justify-center gap-1 mt-8">
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
        </div>
    );
};

export default InstructorCard;