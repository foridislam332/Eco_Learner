
const UserTableRow = ({ item, index }) => {
    const { _id, name, email, photo, role } = item;

    return (
        <tr className="border-b border-green text-gray even:bg-dark even:text-white">
            <td className="py-3 px-4 text-left text-blue">
                {index + 1}
            </td>
            <td className="py-3 px-4 text-left text-blue">
                <p className='w-14 h-14 rounded-full shadow-xl'>
                    <img className='h-full rounded-full' src={photo} alt={name} />
                </p>
            </td>
            <td className="py-3 px-4 text-left">
                <div className="flex flex-col">
                    <p className="text-green">{name}</p>
                    <p className="text-sm italic font-light font-rubik">{email}</p>
                </div>
            </td>

            <td className="py-3 px-2 text-center capitalize">{role}</td>
            <td className="py-3">
                <div className='flex items-center justify-center gap-4'>
                    <button className="btn_primary border border-green">Make Instructor</button>
                    <button className="btn_primary border border-green">Make Admin</button>
                </div>
            </td>
        </tr>
    );
};

export default UserTableRow;