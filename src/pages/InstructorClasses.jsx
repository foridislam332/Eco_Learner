import SectionTitle from '../components/Shared/SectionTitle';
import Breadcrumbs from '../components/Shared/Breadcrumbs';
import ClassesCard from '../components/ClassesCard';
import { useLoaderData } from 'react-router-dom';
import Loading from '../components/Loading';
import { Helmet } from 'react-helmet';
import { Bounce } from 'react-awesome-reveal';

const InstructorClasses = () => {
    const instructorClasses = useLoaderData();
    return (
        <section className='overflow-hidden'>
            <Helmet>
                <title>Eco Learner | Instructor Classes</title>
            </Helmet>
            <Breadcrumbs title='Instructor Classes' />
            <div className='bg-[#f7f7f7] bg-fixed'>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                    <SectionTitle>Instructor Classes</SectionTitle>

                    {/* classes card */}

                    {
                        instructorClasses.length > 0 ? <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-16'>
                            <Bounce cascade damping={0.1} triggerOnce={true}>
                                {
                                    instructorClasses?.map((item) => <ClassesCard key={item.name} item={item} />)
                                }
                            </Bounce>
                        </div> :
                            <div className='-mt-20'>
                                <Loading />
                            </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default InstructorClasses;