import React from 'react';
import useClasses from '../hooks/useClasses';
import ClassesCard from '../components/ClassesCard';
import SectionTitle from '../components/Shared/SectionTitle';
import Breadcrumbs from '../components/Shared/Breadcrumbs';

const Classes = () => {
    const [classes] = useClasses();
    return (
        <section>
            <Breadcrumbs title='Classes' />
            <div className='bg-[#f7f7f7] bg-fixed'>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                    <SectionTitle>Our Classes</SectionTitle>

                    {/* classes card */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-16'>
                        {
                            classes.map((item) => <ClassesCard key={item.name} item={item} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Classes;