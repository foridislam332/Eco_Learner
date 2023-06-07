import React from 'react';
import SectionTitle from '../../components/Shared/SectionTitle';
import ClassesCard from '../../components/ClassesCard';
import useClasses from '../../hooks/useClasses';

const PopularClasses = () => {
    const [classes] = useClasses();

    return (
        <section className='py-16 md:py-20'>
            {/* section title */}
            <SectionTitle>
                Popular Classes
            </SectionTitle>

            {/* classes card */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                    {
                        classes.slice(0, 6).map(item => <ClassesCard key={item.name} item={item} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default PopularClasses;