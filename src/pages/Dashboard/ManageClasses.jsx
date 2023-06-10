import Loading from '../../components/Loading';
import ManageClassesCard from '../../components/ManageClassesCard';
import useClasses from '../../hooks/useClasses';
import Swal from 'sweetalert2';
import axios from 'axios';

const ManageClasses = () => {
    const [classes, , refetch] = useClasses();

    const sortedClasses = classes.sort((a, b) => {
        const statusOrder = { pending: 1, denied: 2, approved: 3 };

        return statusOrder[a.status] - statusOrder[b.status];
    });

    const handleStatus = (id, status) => {
        const api = axios.create({
            baseURL: 'http://localhost:5000',
        });
        api.patch(`/manageClasses/${id}?status=${status}`)
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
        <div className='shadow-xl shadow-indigo-500/20 my-5 p-5 rounded-lg bg-white'>
            <div className='mb-8'>
                <h1 className='text-3xl text-dark font-medium drop-shadow-xl'>Manage Classes</h1>
                <p className='text-sm text-gray italic drop-shadow-xl font-light'>Dashboard / <span className='text-green'>Manage Classes</span></p>
            </div>

            {/* manage classes card */}
            {
                sortedClasses.length === 0 ? <div className='-mt-20'><Loading /></div> : <div className='grid grid-cols-1 gap-6'>
                    {
                        sortedClasses.map(item => <ManageClassesCard
                            key={item._id}
                            item={item}
                            handleStatus={handleStatus}
                        />)
                    }
                </div>
            }
        </div>
    );
};

export default ManageClasses;