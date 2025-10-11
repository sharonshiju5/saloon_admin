import { useAuth } from '../../context/AuthContext';
import Login from '../../pages/Login';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Login />;
  }
  
  return children;
};

export default ProtectedRoute;