import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {

    const { user, isAdmin } = useAuth();
    let location = useLocation();

    if (! isAdmin) {
        return <div className="text-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }

    if(user?.email && isAdmin ){
        return children;
    }
    return <Navigate to="/" state={{ from: location }} />;
};

export default AdminRoute;