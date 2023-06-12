import React from 'react';
import MyClassesTableRow from '../../components/MyClassesTableRow';
import useMyClasses from '../../hooks/useMyClasses';
import Loading from '../../components/Loading';
import { Helmet } from 'react-helmet';
import { Slide } from 'react-awesome-reveal';

const MyClasses = () => {
    const [myClasses] = useMyClasses();
    return (
        <section className='shadow-xl shadow-indigo-500/20 my-2 md:my-5 p-5 rounded-lg bg-white overflow-hidden'>
            <Slide cascade damping={0.1} direction="right" triggerOnce={true}>
                <Helmet>
                    <title>Eco Learner | Dashboard | My Classes</title>
                </Helmet>
                <div className='mb-8'>
                    <h1 className='text-3xl text-dark font-medium drop-shadow-xl'>My Classes</h1>
                    <p className='text-sm text-gray italic drop-shadow-xl font-light'>Dashboard / <span className='text-green'>My Classes</span></p>
                </div>

                {/* Selected Classes table */}
                {
                    myClasses.length === 0 ? <Loading /> : <div className='overflow-x-auto'>
                        <table className="table w-full border border-green">
                            <thead>
                                <tr className="bg-green text-white uppercase leading-normal">
                                    <th className="py-3 px-4 text-left">#</th>
                                    <th className="py-3 px-4 text-left">Photo</th>
                                    <th className="py-3 px-4 text-left">Class Name</th>
                                    <th className="py-3 px-2 text-center">Status</th>
                                    <th className="py-3 px-2 text-center">Students</th>
                                    <th className="py-3 px-4 text-center">Feedback</th>
                                    <th className="py-3 px-4 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 font-medium">
                                {
                                    myClasses.map((item, index) => <MyClassesTableRow
                                        key={item._id}
                                        item={item}
                                        index={index}
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

export default MyClasses;