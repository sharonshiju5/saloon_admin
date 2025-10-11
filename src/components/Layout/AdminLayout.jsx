import { useAuth } from '../../context/AuthContext';
import { Link, Outlet, useLocation } from 'react-router-dom';
import logo from "../../assets/AdminAside/logo.png"
import dashboard from "../../assets/AdminAside/dashboard.svg"
import notification from "../../assets/Header/bell-notif.png"
import profil from "../../assets/Header/profil.png"
import { useState, useEffect } from 'react';
// import dashboard from "../../assets/AdminAside/dashboard.svg"

const AdminLayout = ({ children }) => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isprofileopen, setProfileopen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setSidebarOpen(!mobile);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="flex h-screen p-0 md:p-5">
      {/* Mobile Overlay */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Toggle Button */}
      {isMobile && !sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="fixed top-4 left-4 z-50 p-2 bg-[#187A85] text-white rounded-lg"
        >
          ☰
        </button>
      )}

      <nav className={`${sidebarOpen ? (isMobile ? 'w-full' : 'w-[300px]') : 'w-0'} bg-[#187A85] h-full md:rounded-2xl text-white transition-all duration-300 ease-in-out overflow-hidden ${isMobile ? 'fixed top-0 left-0 z-50 h-screen' : ''
        }`}>
        <div className='flex p-7 gap-3 justify-between items-center'>
          <div className='flex gap-3 items-center'>
            <img className='h-10' src={logo} alt="Saloon Admin Logo" />
            <h3 className="text-2xl font-semibold"> Saloon Admin</h3>
          </div>
          {/* Close button for mobile */}
          {isMobile && (
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-white text-xl hover:bg-white hover:bg-opacity-20 rounded p-1"
            >
              ×
            </button>
          )}
        </div>
        <ul className="list-none pr-5 space-y-4">
          <li><Link to="/dashboard" onClick={() => isMobile && setSidebarOpen(false)} className={`text-md pl-7 p-3 hover:bg-[#129bd3] flex gap-5 rounded transition-all duration-300 ease-in-out ${location.pathname === '/dashboard' || location.pathname === '/' ? 'bg-[#129bd3]' : ''}`}><img src={dashboard} alt="" /> Dashboard</Link></li>
          <li><Link to="/branches" onClick={() => isMobile && setSidebarOpen(false)} className={`text-md pl-7 p-3 hover:bg-[#129bd3] flex gap-5 rounded transition-all duration-300 ease-in-out ${location.pathname === '/branches' ? 'bg-[#129bd3]' : ''}`}><img src={dashboard} alt="" />Branches</Link></li>
          <li><Link to="/staff" onClick={() => isMobile && setSidebarOpen(false)} className={`text-md pl-7 p-3 hover:bg-[#129bd3] flex gap-5 rounded transition-all duration-300 ease-in-out ${location.pathname === '/staff' ? 'bg-[#129bd3]' : ''}`}><img src={dashboard} alt="" />Staffs</Link></li>
          <li><Link to="/staff/payment" onClick={() => isMobile && setSidebarOpen(false)} className={`text-md pl-7 p-3 hover:bg-[#129bd3] flex gap-5 rounded transition-all duration-300 ease-in-out ${location.pathname === '/staff/payment' ? 'bg-[#129bd3]' : ''}`}><img src={dashboard} alt="" />Staff Payment</Link></li>
          <li><Link to="/billing" onClick={() => isMobile && setSidebarOpen(false)} className={`text-md pl-7 p-3 hover:bg-[#129bd3] flex gap-5 rounded transition-all duration-300 ease-in-out ${location.pathname === '/billing' ? 'bg-[#129bd3]' : ''}`}><img src={dashboard} alt="" />Subcription & Billing</Link></li>
          <li><Link to="/settings" onClick={() => isMobile && setSidebarOpen(false)} className={`text-md pl-7 p-3 hover:bg-[#129bd3] flex gap-5 rounded transition-all duration-300 ease-in-out ${location.pathname === '/settings' ? 'bg-[#129bd3]' : ''}`}><img src={dashboard} alt="" />settings</Link></li>
        </ul>
      </nav>
      <div className={`flex-1 flex flex-col ${isMobile && sidebarOpen ? 'blur-sm' : ''}`}>
        <header className=" pb-3 pr-5 border-b border-gray-200 flex justify-end items-center">
          <div className="flex items-center mr-10">
            {/* <span className="text-gray-600">Welcome, {user?.email}</span> */}
            <button>
              <img src={notification} alt="" />
            </button>
            <button onClick={() => { setProfileopen(!isprofileopen) }}>
              <img className='w-10' src={profil} alt="" />
            </button>
            {
              isprofileopen && <div className='absolute top-25 right-10 bg-white p-5 rounded-lg shadow-lg'>
                <p className='text-gray-600'> {user?.email}</p>
                <button onClick={logout} className="mt-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">Logout</button>
              </div>
            }
          </div>
        </header>
        <main className="flex-1 p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;