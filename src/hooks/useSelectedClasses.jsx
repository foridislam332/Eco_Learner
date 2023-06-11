import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useSelectedClasses = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: selectedClasses = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['selectedClasses'],
        queryFn: async () => {
            const res = await axiosSecure(`/selectedClasses?email=${user?.email}`);
            return res.data;
        }
    })

    return [selectedClasses, loading, refetch]
};

export default useSelectedClasses;