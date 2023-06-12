import Loading from '../../components/Loading';
import ManageClassesCard from '../../components/ManageClassesCard';
import useClasses from '../../hooks/useClasses';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { Helmet } from 'react-helmet';
import { Slide } from 'react-awesome-reveal';

const ManageClasses = () => {
    const [classes, , refetch] = useClasses();
    const [axiosSecure] = useAxiosSecure();

    const sortedClasses = classes.sort((a, b) => {
        const statusOrder = { pending: 1, denied: 2, approved: 3 };

        return statusOrder[a.status] - statusOrder[b.status];
    });

    const handleStatus = (id, status) => {
        axiosSecure.patch(`/manageClasses/${id}?status=${status}`)
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `Class ${status} success`,
                        showConfirmButton: false,
                        timer: 2500
                    });
                }
            })
    }

    return (
        <section className='shadow-xl shadow-indigo-500/20 my-2 md:my-5 p-5 rounded-lg bg-white overflow-hidden'>
            <Slide cascade damping={0.1} direction="right" triggerOnce={true}>
                <Helmet>
                    <title>Eco Learner | Dashboard | Manage Classes</title>
                </Helmet>
                <div className='mb-8'>
                    <h1 className='text-3xl text-dark font-medium drop-shadow-xl'>Manage Classes</h1>
                    <p className='text-sm text-gray italic drop-shadow-xl font-light'>Dashboard / <span className='text-green'>Manage Classes</span></p>
                </div>
            </Slide>

            {/* manage classes card */}
            {
                sortedClasses.length === 0 ? <div className='-mt-20'><Loading /></div> : <div className='grid grid-cols-1 gap-6'>
                    <Slide cascade damping={0.1} direction="right" triggerOnce={true}>
                        {
                            sortedClasses.map(item => <ManageClassesCard
                                key={item._id}
                                item={item}
                                handleStatus={handleStatus}
                            />)
                        }
                    </Slide>
                </div>
            }
        </section>
    );
};

export default ManageClasses;