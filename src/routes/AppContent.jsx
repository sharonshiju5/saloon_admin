import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PublicRoute, AdminProtectedRoute } from './Routes';
import AdminLayout from '../components/Layout/AdminLayout';
import Login from '../components/Authentication/Login';
import Dashboard from '../pages/Dashboard/Dashboard';
import PageNotFound from '../pages/404/PageNotFound';
import Branch from '../pages/Branches/Branch';
import STaffData from '../pages/staaff/Staff';

const AppContent = () => {
  return (
    <Routes>
      <Route path="/login" element={<PublicRoute component={Login} />} />
      
      {/* Admin Routes */}
      <Route element={<AdminProtectedRoute component={AdminLayout} />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/branches" element={<Branch />} />
        <Route path="/staff" element={<STaffData />} />
        <Route path="/staff/payment" element={<Dashboard />} />
        <Route path="/billing" element={<Dashboard />} />
        <Route path="/settings" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppContent;