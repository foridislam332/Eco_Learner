// react icons
import { FaPencilAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const MyClassesTableRow = ({ item, index, handleDelete }) => {
    const { _id, image, name, students, status, feedback } = item;

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
            <td className='py-3 px-5 text-center'>
                <div className={`py-2 px-5 text-dark rounded-3xl ${status === 'pending' && 'bg-orange/80' || status === 'approved' && 'bg-lime-100 text-lime-600' || status === 'denied' && 'bg-rose-200 text-red'}`}>{status}</div>
            </td>
            <td className="py-3 px-2 text-center">{students}</td>
            <td className="py-3 px-2 text-center text-sm text-gray italic">{feedback ? feedback : 'No feedback'}</td>
            <td className="py-3">
                <div className='flex items-center justify-center'>
                    <Link to={`/dashboard/updateClass/${_id}`} title='Update' className="h-10 w-10 flex items-center justify-center bg-green rounded-full text-white shadow-lg hover:shadow-red hover:bg-red duration-300">
                        <FaPencilAlt />
                    </Link>
                </div>
            </td>
        </tr>
    );
};

export default MyClassesTableRow;