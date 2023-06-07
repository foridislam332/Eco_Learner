import React from 'react';
import useClasses from '../../hooks/useClasses';
import SectionTitle from '../../components/Shared/SectionTitle';
import InstructorCard from '../../components/InstructorCard';

const PopularInstructors = () => {
    const [classes] = useClasses();
    return (
        <section>
            {/* section title */}
            <SectionTitle>
                Popular Instructors
            </SectionTitle>

            {/* classes card */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                    {
                        classes.slice(0, 6).map(item => <InstructorCard key={item.name} item={item} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default PopularInstructors;