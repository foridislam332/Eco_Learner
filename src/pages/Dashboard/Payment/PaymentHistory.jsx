import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import PaymentHistoryTableRow from '../../../components/PaymentHistoryTableRow';
import Loading from '../../../components/Loading';

const PaymentHistory = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: payments = [], isLoading: isLoading, refetch } = useQuery({
        queryKey: ['payments'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/payments/${user?.email}`);
            return res.data;
        }
    })

    return (
        <div className='shadow-xl shadow-indigo-500/20 my-5 p-5 rounded-lg bg-white'>
            <div className='mb-8'>
                <h1 className='text-3xl text-dark font-medium drop-shadow-xl'>Payment History</h1>
                <p className='text-sm text-gray italic drop-shadow-xl font-light'>Dashboard / <span className='text-green'>Payment History</span></p>
            </div>

            {
                payments.length === 0 ? <Loading /> : <div className='overflow-x-auto'>
                    <table className="table w-full border border-green">
                        <thead>
                            <tr className="bg-green text-white uppercase leading-normal">
                                <th className="py-3 px-4 text-left">#</th>
                                <th className="py-3 px-4 text-left">Name | Email</th>
                                <th className="py-3 px-2 text-center">transaction Id</th>
                                <th className="py-3 px-2 text-center">Price</th>
                                <th className="py-3 px-4 text-center">date</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 font-medium">
                            {
                                payments.map((item, index) => <PaymentHistoryTableRow
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

export default PaymentHistory;