import React from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';

import AdminHome from './AdminHome';
import ViewCustomers from './ViewCustomers';
import ApiDetails from './ApiDetails';
import AdminLogout from './AdminLogout';

export default function AdminNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('isAdmin');
    navigate('/');
  
  };

  return (
    <div className="admin-container">
      <nav className="admin-navbar">
        <div className="navbar-header">
          <h1>Admin Dashboard</h1>
        </div>
        <ul className="navbar-links">
          <li><Link to="home" className="nav-link">Home</Link></li>
          <li><Link to="view-customers" className="nav-link">View Customers</Link></li>
        <li><Link to="apidetails" className="nav-link">ApiDetails</Link></li>
          <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
        </ul>
      </nav>

      <div className="admin-content">
        <Routes>
          <Route path="home" element={<AdminHome />} />
          <Route path="view-customers" element={<ViewCustomers />} />
         <Route path="apidetails" element={<ApiDetails/>}/>
        </Routes>
      </div>
    </div>
  );
}