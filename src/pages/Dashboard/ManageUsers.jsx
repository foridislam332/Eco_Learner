import React from 'react';
import Loading from '../../components/Loading';
import useUsers from '../../hooks/useUsers';
import UserTableRow from '../../components/UserTableRow';

const ManageUsers = () => {
    const [users] = useUsers();

    return (
        <div className='shadow-xl shadow-indigo-500/20 my-5 p-5 rounded-lg bg-white'>
            <div className='mb-8'>
                <h1 className='text-3xl text-dark font-medium drop-shadow-xl'>Manage Users</h1>
                <p className='text-sm text-gray italic drop-shadow-xl font-light'>Dashboard / <span className='text-green'>Manage Users</span></p>
            </div>

            {/* Selected Classes table */}
            {
                users.length === 0 ? <div className='-mt-20'><Loading /></div> : <div className='overflow-x-auto'>
                    <table className="table w-full border border-green">
                        <thead>
                            <tr className="bg-green text-white uppercase leading-normal">
                                <th className="py-3 px-4 text-left">#</th>
                                <th className="py-3 px-4 text-left">Photo</th>
                                <th className="py-3 px-4 text-left">Name | Email</th>
                                <th className="py-3 px-2 text-center">Role</th>
                                <th className="py-3 px-4 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 font-medium">
                            {
                                users.map((item, index) => <UserTableRow
                                    key={item._id}
                                    item={item}
                                    index={index}
                                />)
                            }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};

export default ManageUsers;