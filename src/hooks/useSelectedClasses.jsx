import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useSelectedClasses = () => {
    const { user } = useAuth();
    const { data: selectedClasses = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['selectedClasses'],
        queryFn: async () => {
            if (user.email) {
                const res = await fetch(`http://localhost:5000/selectedClasses?email=${user?.email}`);
                return res.json();
            }
        }
    })

    return [selectedClasses, loading, refetch]
};

export default useSelectedClasses;