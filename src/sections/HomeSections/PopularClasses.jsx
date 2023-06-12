import SectionTitle from '../../components/Shared/SectionTitle';
import ClassesCard from '../../components/ClassesCard';
import useClasses from '../../hooks/useClasses';
import { Slide } from 'react-awesome-reveal';

const PopularClasses = () => {
    const [classes] = useClasses();

    return (
        <section className='py-16 md:py-20 bg-[#f7f7f7] dark:bg-black bg-fixed overflow-hidden'>
            {/* section title */}
            <SectionTitle>
                Popular Classes
            </SectionTitle>

            {/* classes card */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <div
                    className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                    <Slide cascade damping={0.1} direction="up" triggerOnce={true}>
                        {
                            classes.slice(0, 6).sort((a, b) => b.enrolledStudents - a.enrolledStudents).map(item => <ClassesCard key={item.name} item={item} />)
                        }
                    </Slide>
                </div>
            </div>
        </section>
    );
};

export default PopularClasses;