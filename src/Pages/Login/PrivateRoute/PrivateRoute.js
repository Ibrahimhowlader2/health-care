import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {

    const { user, isLoading } = useAuth();
    let location = useLocation();

    if (isLoading) {
        return <div className="text-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }

    if (user.email){
        return children;
    }
    return <Navigate to="/login2" state={{ from: location }} />;
    
};

export default PrivateRoute;