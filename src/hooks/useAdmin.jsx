import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: isAdmin = [], isLoading: isLoading, refetch } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/users/admin/${user?.email}`);
            return res.data;
        }
    })

    return [isAdmin, isLoading, refetch]
};

export default useAdmin;