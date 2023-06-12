import React from 'react';
import SectionTitle from '../components/Shared/SectionTitle';
import InstructorCard from '../components/InstructorCard';
import useClasses from '../hooks/useClasses';
import Breadcrumbs from '../components/Shared/Breadcrumbs';
import Loading from '../components/Loading';
import { Helmet } from 'react-helmet';

const Instructors = () => {
    const [classes] = useClasses();

    const instructors = [...new Set(classes.map(item => item.instructor))];

    const uniqueInstructors = instructors.map(instructor => classes.find(item => item.instructor === instructor));

    const instructorClasses = instructors.map(instructor => {
        const allClasses = classes.filter(item => item.instructor === instructor);
        const classNames = allClasses.map(item => item.name);
        return {
            numberOfClasses: classNames.length
        };
    });

    return (
        <section>
            <Helmet>
                <title>Eco Learner | Instructors</title>
            </Helmet>
            <Breadcrumbs title='Instructors' />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
                <SectionTitle>Our Instructors</SectionTitle>
                {/* classes card */}
                {
                    uniqueInstructors.length === 0 ? <div className='-mt-20'><Loading /></div> : <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-16'>
                        {
                            uniqueInstructors.map((item, index) => <InstructorCard key={item._id} item={item} instructorClasses={instructorClasses} index={index} />)
                        }
                    </div>
                }
            </div>
        </section>
    );
};

export default Instructors;