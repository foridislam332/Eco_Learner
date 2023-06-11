import SelectedClassTableRow from '../../components/SelectedClassTableRow';
import Loading from '../../components/Loading';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import EnrolledClassesCard from '../../components/EnrolledClassesCard';

const EnrolledClasses = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: enrolledClasses = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['enrolledClasses'],
        queryFn: async () => {
            const res = await axiosSecure(`/enrollStudent/${user?.email}`);
            return res.data;
        }
    })

    return (
        <div className='shadow-xl shadow-indigo-500/20 my-5 p-5 rounded-lg bg-white'>
            <div className='mb-8'>
                <h1 className='text-3xl text-dark font-medium drop-shadow-xl'>My Enrolled Classes</h1>
                <p className='text-sm text-gray italic drop-shadow-xl font-light'>Dashboard / <span className='text-green'>Enrolled Classes</span></p>
            </div>

            {/* Selected Classes table */}
            {
                enrolledClasses.length === 0 ? <div className='-mt-20'><Loading /></div> : <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                    {
                        enrolledClasses.map((item) => <EnrolledClassesCard key={item._id} item={item} />)
                    }
                </div>
            }
        </div>
    );
};

export default EnrolledClasses;