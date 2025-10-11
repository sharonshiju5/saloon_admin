import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ component: Component }) => {
  const { isAuthenticated } = useAuth();
  return !isAuthenticated ? <Component /> : <Navigate to="/dashboard" />;
};

export const AdminProtectedRoute = ({ component: Component }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};