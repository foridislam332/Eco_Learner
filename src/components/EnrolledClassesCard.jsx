// react icons
import { HiOutlineUsers } from 'react-icons/hi'
import { BiBook } from 'react-icons/bi'

const EnrolledClassesCard = ({ item }) => {
    const { name, instructor, image, des, price, seats, students } = item;
    return (
        <div className='border border-orange hover:border-green rounded-md flex flex-col justify-between hover:shadow-2xl transition-all duration-300 ease-in-out'>
            <img className='rounded-md' src={image} alt={name} />

            <div className={`flex-1 px-5 pt-5`}>
                <h1 className='text-xl text-dark drop-shadow-lg font-semibold'>{name}</h1>

                <p className='italic text-sm text-dark'><span className='text-xs text-gray'>by</span> {instructor}</p>
            </div>

            <div className='px-5 pb-5'>
                <p className='mt-3 text-sm'>{des?.slice(0, 65)} ...</p>

                <div className='flex items-center justify-between mt-2'>
                    <div>
                        <p className='flex items-center gap-1'>
                            <HiOutlineUsers /> <span>{students} Students</span>
                        </p>
                        <p className='flex items-center gap-1'>
                            <BiBook /> <span>{seats} Seats left</span>
                        </p>
                    </div>
                    <p className='text-xl text-dark font-bold'>${price}</p>
                </div>
            </div>
        </div>
    );
};

export default EnrolledClassesCard;