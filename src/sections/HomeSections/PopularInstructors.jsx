import React from 'react';
import useClasses from '../../hooks/useClasses';
import SectionTitle from '../../components/Shared/SectionTitle';
import InstructorCard from '../../components/InstructorCard';

// images
import instructorsBg from '../../assets/images/instructors-bg.jpg';

const PopularInstructors = () => {
    const [classes] = useClasses();
    return (
        <section className='dark:bg-dark'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
                {/* section title */}
                <SectionTitle>
                    Popular Instructors
                </SectionTitle>
            </div>

            <div style={{ backgroundImage: `url(${instructorsBg})` }} className='bg-fixed bg-cover bg-center bg-no-repeat'>
                <div className='bg-black bg-opacity-50 pt-16 mt-16 pb-16 md:pb-20'>
                    {/* classes card */}
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                            {
                                classes.slice(0, 6).sort((a, b) => b.enrolledStudents - a.enrolledStudents).map((item, index) => <InstructorCard key={index} item={item} classes={classes} index={index} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularInstructors;