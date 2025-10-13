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

  const login = (adminData, token) => {
    localStorage.setItem('accessToken', token);
    localStorage.setItem('admin', JSON.stringify(adminData));
    setIsAuthenticated(true);
    setUser(adminData);
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
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