import React from 'react';
import useAuth from '../hooks/useAuth';
import moment from 'moment/moment';

const PaymentHistoryTableRow = ({ item, index }) => {
    const { user } = useAuth();
    const { _id, name, transactionId, price, email, date } = item;

    return (
        <tr className="border-b border-green even:bg-dark even:text-white text-gray font-normal">
            <td className="py-3 px-4 text-left text-blue">
                {index + 1}
            </td>
            <td className="py-3 px-4 text-left">
                <div>
                    <p className='text-green'>{name ? name : user?.displayName}</p>
                    <p className='italic text-sm'>{email}</p>
                </div>
            </td>
            <td className="py-3 px-2 text-center">${transactionId}</td>
            <td className="py-3 px-2 text-center">${price}</td>
            <td className="py-3 px-2 text-center">{moment(date).format("MMMM DD YYYY")}</td>
        </tr>
    );
};

export default PaymentHistoryTableRow;