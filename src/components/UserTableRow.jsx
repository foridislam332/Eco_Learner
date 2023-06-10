
const UserTableRow = ({ item, index, handleRole }) => {
    const { name, email, photo, role } = item;

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
                    <button disabled={role === 'student' ? false : true} onClick={() => handleRole(email, 'instructor')} className={`btn_primary overflow-hidden border border-green ${role === 'student' ? '' : 'btn_disable'}`}>Make Instructor</button>

                    <button disabled={role === 'student' ? false : true} onClick={() => handleRole(email, 'admin')} className={`btn_primary overflow-hidden border border-green ${role === 'student' ? '' : 'btn_disable'}`}>Make Admin</button>
                </div>
            </td>
        </tr>
    );
};

export default UserTableRow;