import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useCurrentUser = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: currentUser = [], isLoading: isLoading, refetch } = useQuery({
        queryKey: ['currentUser', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/users/${user?.email}`);
            return res.data;
        }
    })

    return [currentUser, isLoading, refetch]
};

export default useCurrentUser;