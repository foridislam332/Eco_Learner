import { Link } from "react-router-dom";


// react icons
import { FaFacebookF, FaTwitter, FaGoogle, FaYoutube, FaGithub, FaRegPaperPlane } from 'react-icons/fa';
import { BsTelephone } from 'react-icons/bs';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { SlLocationPin } from 'react-icons/sl';

const Footer = () => {
    return (
        <footer>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20">

                    <div className="flex flex-col gap-4 items-center">
                        <Link to="/" className="text-green font-medium text-4xl">Eco Learner</Link>

                        <p className="text-gray text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quia hic deserunt. Ipsum, ut praesentium. Velit numquam impedit quod sit fugiat aliquam suscipit incidunt.</p>

                        {/* social icons */}
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#3b5998] group cursor-pointer">
                                <FaFacebookF color="#3b5998" className="relative group-hover:scale-150 duration-300" />
                            </div>

                            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#33bdfd] group cursor-pointer">
                                <FaTwitter color="#33bdfd" className="relative group-hover:scale-150 duration-300" />
                            </div>

                            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#dc4a38] group cursor-pointer">
                                <FaGoogle color="#dc4a38" className="relative group-hover:scale-150 duration-300" />
                            </div>

                            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#171515] group cursor-pointer">
                                <FaGithub color="#171515" className="relative group-hover:scale-150 duration-300" />
                            </div>

                            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#FF0000] group cursor-pointer">
                                <FaYoutube color="#FF0000" className="relative group-hover:scale-150 duration-300" />
                            </div>
                        </div>
                    </div>

                    {/* contact us */}
                    <div>
                        <h1 className="text-2xl font-medium text-red pb-2 border-b border-orange">Contact us</h1>

                        <div className="flex flex-col gap-3 mt-8">
                            <div className="flex items-center gap-3">
                                <BsTelephone className="text-green text-xl" />
                                <p className="text-gray">(555) 555-1234</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <MdOutlineAlternateEmail className="text-green text-[22px]" />
                                <p className="text-gray">eco.learner@eco.com</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <SlLocationPin className="text-green text-2xl" />
                                <p className="text-gray">15 Barnes Wallis Way, #358, Francisco, CA 94107</p>
                            </div>
                        </div>
                    </div>

                    {/* newsletter */}
                    <div>
                        <h1 className="text-2xl font-medium text-red pb-2 border-b border-orange">Newsletter</h1>

                        <p className="text-gray mt-8">Subscribe to our newsletter for latest updates about our company</p>

                        <div className="border border-green rounded-3xl py-3 px-4 flex items-center my-4">
                            <input className="border-none outline-none w-full" type="text" placeholder="Email address" />
                            <button><FaRegPaperPlane className="text-orange" /></button>
                        </div>

                        <p className="text-gray">We don't send spam</p>
                    </div>
                </div>
            </div>

            <div className="text-center py-4 bg-dark mt-10 border-t shadow-2xl">
                <p className="text-white">© 2023 AzazTheme. All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;