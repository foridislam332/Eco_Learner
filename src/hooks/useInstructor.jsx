import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useInstructor = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: isInstructor = [], isLoading: isLoading, refetch } = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/users/instructor/${user?.email}`);
            return res.data;
        }
    })

    return [isInstructor, isLoading, refetch]
};

export default useInstructor;