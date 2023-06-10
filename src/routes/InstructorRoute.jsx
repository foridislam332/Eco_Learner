import useAuth from '../hooks/useAuth';
import useCurrentUser from '../hooks/useCurrentUser';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Loading';

const InstructorRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [currentUser, isLoading] = useCurrentUser();
    const location = useLocation();

    if (loading || isLoading) {
        return <Loading />
    }

    if (user && currentUser.role === 'instructor') {
        return children;
    }

    return <Navigate to='/' state={{ from: location }} replace />;
};

export default InstructorRoute;