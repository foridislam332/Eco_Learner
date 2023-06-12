import React from 'react';
import Loading from '../../components/Loading';
import UserTableRow from '../../components/UserTableRow';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet';
import { Slide } from 'react-awesome-reveal';

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleRole = (email, role) => {
        if (users.length) {
            axiosSecure.patch(`/users/${email}?role=${role}`)
                .then(data => {
                    if (data.data.modifiedCount > 0) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: `Make ${role} successfully`,
                            showConfirmButton: false,
                            timer: 2500
                        });
                        refetch()
                    }
                })
        }
    }
    return (
        <section className='shadow-xl shadow-indigo-500/20 my-2 md:my-5 p-5 rounded-lg bg-white overflow-hidden '>
            <Slide cascade damping={0.1} direction="right" triggerOnce={true}>
                <Helmet>
                    <title>Eco Learner | Dashboard | Manage Users</title>
                </Helmet>
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
                                        handleRole={handleRole}
                                    />)
                                }
                            </tbody>
                        </table>
                    </div>
                }
            </Slide>
        </section>
    );
};

export default ManageUsers;