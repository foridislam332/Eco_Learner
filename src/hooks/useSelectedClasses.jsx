import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const useSelectedClasses = () => {
    const { user } = useContext(AuthContext);
    const { data: selectedClasses = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['selectedClasses'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/selectedClasses?email=${user?.email}`);
            return res.json();
        }
    })

    return [selectedClasses, loading, refetch]
};

export default useSelectedClasses;