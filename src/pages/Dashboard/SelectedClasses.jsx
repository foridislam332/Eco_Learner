import React from 'react';

const SelectedClasses = () => {
    return (
        <div className='shadow-xl shadow-indigo-500/20 my-5 p-5 rounded-lg bg-white'>
            My Selected Classes

            {/* Selected Classes table */}
            <div className='overflow-x-auto'>
                <table className="table w-full border border-green">
                    <thead>
                        <tr className="bg-cyan-500 text-white uppercase leading-normal">
                            <th className="py-3 px-4 text-left">#</th>
                            <th className="py-3 px-4 text-left">Photo</th>
                            <th className="py-3 px-4 text-left">Name</th>
                            <th className="py-3 px-2 text-left">Seats</th>
                            <th className="py-3 px-2 text-center">Price</th>
                            <th className="py-3 px-4 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 font-medium">
                        {/* {content} */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClasses;