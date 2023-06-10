import React from 'react';
import Loading from '../../components/Loading';

const ManageUsers = () => {
    return (
        <div className='shadow-xl shadow-indigo-500/20 my-5 p-5 rounded-lg bg-white'>
            <div className='mb-8'>
                <h1 className='text-3xl text-dark font-medium drop-shadow-xl'>Manage Users</h1>
                <p className='text-sm text-gray italic drop-shadow-xl font-light'>Dashboard / <span className='text-green'>Manage Users</span></p>
            </div>

            {/* Selected Classes table */}
            {
                true ? <div className='-mt-20'><Loading /></div> : <div className='overflow-x-auto'>

                </div>
            }
        </div>
    );
};

export default ManageUsers;