import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useMyClasses = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: myClasses = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['myClasses'],
        queryFn: async () => {
            if (user.email) {
                const res = await axiosSecure(`/myClasses?email=${user?.email}`);
                return res.data;
            }
        }
    })

    return [myClasses, loading, refetch]
};

export default useMyClasses;