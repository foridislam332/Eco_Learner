import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useMyClasses = () => {
    const { user } = useAuth();
    const { data: myClasses = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['myClasses'],
        queryFn: async () => {
            if (user.email) {
                const res = await fetch(`https://eco-learner-server.vercel.app/myClasses?email=${user?.email}`);
                return res.json();
            }
        }
    })

    return [myClasses, loading, refetch]
};

export default useMyClasses;