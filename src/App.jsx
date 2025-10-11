import React, { Suspense } from 'react';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import AppContent from './AppContent';
import Loader from './components/Layout/Loader';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <AppContent />
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;