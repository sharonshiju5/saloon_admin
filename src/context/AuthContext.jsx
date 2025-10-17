import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      setIsAuthenticated(true);
      const adminData = localStorage.getItem('admin');
      if (adminData) {
        setUser(JSON.parse(adminData));
      }
    }
  }, []);

  const login = (responseData) => {
    localStorage.setItem('accessToken', responseData.accessToken);
    localStorage.setItem('refreshToken', responseData.refreshToken);
    localStorage.setItem('adminId', responseData.userId);
    const adminData = {
      admin_name: responseData.name,
      email: responseData.email,
      phone: responseData.phone,
      unique_id: responseData.unique_id,
      userId: responseData.userId
    };
    localStorage.setItem('admin', JSON.stringify(adminData));
    setIsAuthenticated(true);
    setUser(adminData);
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('adminId');
    localStorage.removeItem('admin');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};