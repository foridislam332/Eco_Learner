import React from 'react';
import SectionTitle from '../components/Shared/SectionTitle';
import InstructorCard from '../components/InstructorCard';
import useClasses from '../hooks/useClasses';
import Breadcrumbs from '../components/Shared/Breadcrumbs';

const Instructors = () => {
    const [classes] = useClasses();

    return (
        <section>
            <Breadcrumbs title='Instructors' />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
                <SectionTitle>Our Instructors</SectionTitle>
                {/* classes card */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-16'>
                    {
                        classes.slice(0, 8).map((item, index) => <InstructorCard key={index} item={item} classes={classes} index={index} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Instructors;