import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useCurrentUser = () => {
    const { user, loading } = useAuth();
    const { data: currentUser = [], isLoading: isLoading, refetch } = useQuery({
        queryKey: ['currentUser', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/${user?.email}`);
            return res.json();
        }
    })

    return [currentUser, isLoading, refetch]
};

export default useCurrentUser;