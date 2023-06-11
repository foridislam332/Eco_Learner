import { Navigate, useLocation } from 'react-router-dom';
import useCurrentUser from '../hooks/useCurrentUser';
import Loading from '../components/Loading';
import useAuth from '../hooks/useAuth';

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [currentUser, isLoading] = useCurrentUser();
    const location = useLocation();

    if (loading || isLoading) {
        return <Loading />
    }

    if (user && currentUser.role === 'admin') {
        return children;
    }

    return <Navigate to='/' state={{ from: location }} replace />;
};

export default AdminRoute;