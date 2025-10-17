import { useAuth } from '../../context/AuthContext';
import { Link, Outlet, useLocation } from 'react-router-dom';
import logo from "../../assets/AdminAside/logo.png"
import dashboard from "../../assets/AdminAside/dashboard.png"
import notification from "../../assets/Header/bell-notif.png"
import profil from "../../assets/Header/profil.png"
import { useState, useEffect } from 'react';
import users from "../../assets/AdminAside/users.png"
import shop from "../../assets/AdminAside/shop.png"
import vector from "../../assets/AdminAside/vector.png"
import group from "../../assets/AdminAside/group.png"
import setting from "../../assets/AdminAside/setting.png"

// import group from "../../assets/AdminAside/group.png"

const AdminLayout = ({ children }) => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isprofileopen, setProfileopen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: dashboard },
    { path: '/branches', label: 'Branches', icon: dashboard },
    { path: '/staff', label: 'Staffs', icon: users },
    { path: '/staff/payment', label: 'Staff Payment', icon: shop },
    { path: '/report', label: 'Report', icon: vector },
    { path: '/billing', label: 'Subscription & Billing', icon: group },
    { path: '/settings', label: 'Settings', icon: setting }
  ];

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
    <div className="flex h-screen p-0 ">
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

      <nav className={`${sidebarOpen ? (isMobile ? 'w-full' : 'w-[300px]') : 'w-0'} bg-[#187A85] h-full  text-white transition-all duration-300 ease-in-out overflow-hidden ${isMobile ? 'fixed top-0 left-0 z-50 h-screen' : ''
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
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path} 
                onClick={() => isMobile && setSidebarOpen(false)} 
                className={`text-md pl-7 p-3 hover:bg-[#129bd3] flex gap-5 rounded transition-all duration-300 ease-in-out ${
                  location.pathname === item.path || (item.path === '/dashboard' && location.pathname === '/') 
                    ? 'bg-[#129bd3]' 
                    : ''
                }`}
              >
                <img className='w-5 h-5' src={item.icon} alt="" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={`w-3/5 flex-1 flex flex-col ${isMobile && sidebarOpen ? 'blur-sm' : ''}`}>
        <header className=" pb-3 pr-2 p-3 border-b border-gray-200 flex justify-end items-center">
          <div className="flex items-center gap-7 justify-between  mr-10">
            <span className="text-gray-600">Welcome, {user?.admin_name || 'Admin'}</span>
            {/* <button>
              <img src={notification} alt="" />
            </button> */}
            <button onClick={() => { setProfileopen(!isprofileopen) }}>
              <img className='w-10' src={profil} alt="" />
            </button>
            {
              isprofileopen && <div className='absolute top-25 right-10 bg-white p-5 rounded-lg shadow-lg'>
                {/* <p className='text-gray-600'>{user}</p> */}
                <p className='text-gray-600 text-sm'>{user?.admin_name || 'Admin'}</p>
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