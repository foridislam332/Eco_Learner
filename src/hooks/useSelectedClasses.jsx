import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useSelectedClasses = () => {
    const { user } = useAuth();
    const { data: selectedClasses = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['selectedClasses'],
        queryFn: async () => {
            const res = await fetch(`https://eco-learner-server.vercel.app/selectedClasses?email=${user?.email}`);
            return res.json();
        }
    })

    return [selectedClasses, loading, refetch]
};

export default useSelectedClasses;