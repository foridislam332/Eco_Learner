import React, { useContext } from 'react';
import useClasses from '../hooks/useClasses';
import ClassesCard from '../components/ClassesCard';
import SectionTitle from '../components/Shared/SectionTitle';
import Breadcrumbs from '../components/Shared/Breadcrumbs';
import Loading from '../components/Loading';
import { Helmet } from 'react-helmet';

const Classes = () => {
    const [classes] = useClasses();

    return (
        <section>
            <Helmet>
                <title>Eco Learner | Classes</title>
            </Helmet>
            <Breadcrumbs title='Classes' />
            <div className='bg-[#f7f7f7] dark:bg-black bg-fixed'>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                    <SectionTitle>Our Classes</SectionTitle>

                    {/* classes card */}
                    {
                        classes.length === 0 ? <div className='-mt-20'><Loading /></div> : <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-16'>
                            {
                                classes.map((item) => <ClassesCard key={item._id} item={item} />)
                            }
                        </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default Classes;