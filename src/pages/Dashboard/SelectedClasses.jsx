import React, { useContext } from 'react';
import useSelectedClasses from '../../hooks/useSelectedClasses';
import SelectedClassTableRow from '../../components/SelectedClassTableRow';
import { AuthContext } from '../../Providers/AuthProvider';
import Loading from '../../components/Loading';

const SelectedClasses = () => {
    const [selectedClasses, loading, refetch] = useSelectedClasses();
    const { user } = useContext(AuthContext);

    if (user) {
        refetch();
    }

    return (
        <div className='shadow-xl shadow-indigo-500/20 my-5 p-5 rounded-lg bg-white'>
            <div className='mb-8'>
                <h1 className='text-3xl text-dark font-medium drop-shadow-xl'>My Selected Classes</h1>
                <p className='text-sm text-gray italic drop-shadow-xl font-light'>Dashboard / <span className='text-green'>Selected Classes</span></p>
            </div>

            {/* Selected Classes table */}
            {
                selectedClasses.length === 0 ? <Loading /> : <div className='overflow-x-auto'>
                    <table className="table w-full border border-green">
                        <thead>
                            <tr className="bg-green text-white uppercase leading-normal">
                                <th className="py-3 px-4 text-left">#</th>
                                <th className="py-3 px-4 text-left">Photo</th>
                                <th className="py-3 px-4 text-left">Name</th>
                                <th className="py-3 px-2 text-center">Seats</th>
                                <th className="py-3 px-2 text-center">Price</th>
                                <th className="py-3 px-4 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 font-medium">
                            {
                                selectedClasses.map((item, index) => <SelectedClassTableRow
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

export default SelectedClasses;