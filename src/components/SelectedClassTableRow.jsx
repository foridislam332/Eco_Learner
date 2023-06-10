import React from 'react';

// react icons
import { FaRegTrashAlt, FaRegCreditCard } from 'react-icons/fa';

const SelectedClassTableRow = ({ item, index, handleDelete }) => {
    const { _id, image, name, price, students } = item;
    return (
        <tr className="border-b border-green even:bg-dark even:text-white">
            <td className="py-3 px-4 text-left text-blue">
                {index + 1}
            </td>
            <td className="py-3 px-4 text-left text-blue">
                <p className='w-14 h-14 rounded-full shadow-xl'>
                    <img className='h-full rounded-full' src={image} alt={name} />
                </p>
            </td>
            <td className="py-3 px-4 text-left text-green">
                {name}
            </td>
            <td className="py-3 px-2 text-center">{25 - students}</td>
            <td className="py-3 px-2 text-center">${price}</td>
            <td className="min-w-[120px] py-3 px-4 text-center">
                <div className='flex items-center justify-center gap-2'>
                    <button title='Payment' className="h-10 w-10 flex items-center justify-center bg-green rounded-full text-white shadow-lg hover:shadow-green duration-300">
                        <FaRegCreditCard />
                    </button>

                    <button title='Delete' onClick={() => handleDelete(_id)} className="h-10 w-10 flex items-center justify-center bg-green rounded-full text-white shadow-lg hover:shadow-red hover:bg-red duration-300">
                        <FaRegTrashAlt />
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default SelectedClassTableRow;