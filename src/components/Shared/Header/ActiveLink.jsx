import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink to={to}
            className={({ isActive }) =>
                isActive
                    ? "text-green font-medium"
                    : 'font-medium hover:text-green duration-300 ease-in-out'}
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;