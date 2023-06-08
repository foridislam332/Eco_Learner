import React from 'react';
import useClasses from '../../hooks/useClasses';
import SectionTitle from '../../components/Shared/SectionTitle';
import InstructorCard from '../../components/InstructorCard';

// images
import instructorsBg from '../../assets/images/instructors-bg.jpg';
const PopularInstructors = () => {
    const [classes] = useClasses();
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* section title */}
                <SectionTitle>
                    Popular Instructors
                </SectionTitle>
            </div>

            <div style={{ backgroundImage: `url(${instructorsBg})` }} className='bg-fixed bg-cover bg-center bg-no-repeat'>
                <div className='bg-black bg-opacity-40 pt-16 mt-16 pb-20'>
                    {/* classes card */}
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                            {
                                classes.slice(0, 6).map(item => <InstructorCard key={item.name} item={item} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularInstructors;