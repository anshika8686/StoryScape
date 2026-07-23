import React from 'react';
import { useAuth } from '../../hooks/auth.use';
import { Outlet, Navigate } from 'react-router';

const ProtectedRoute = () => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;