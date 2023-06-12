import { motion } from 'framer-motion';
import SectionTitle from '../../components/Shared/SectionTitle';
import ClassesCard from '../../components/ClassesCard';
import useClasses from '../../hooks/useClasses';

const PopularClasses = () => {
    const [classes] = useClasses();
    const variants = {
        visible: {
            y: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.3,
            },
        },
        hidden: {
            y: 300,
            transition: {
                when: "afterChildren",
            },
        },
    }
    return (
        <section className='py-16 md:py-20 bg-[#f7f7f7] dark:bg-black bg-fixed'>
            {/* section title */}
            <SectionTitle>
                Popular Classes
            </SectionTitle>

            {/* classes card */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                    {
                        classes.slice(0, 6).sort((a, b) => b.enrolledStudents - a.enrolledStudents).map(item => <ClassesCard key={item.name} item={item} variants={variants} />)
                    }
                </motion.div>
            </div>
        </section>
    );
};

export default PopularClasses;