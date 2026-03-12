import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogout() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = () => {
      // Clear admin session
      sessionStorage.removeItem('isAdmin');
      sessionStorage.removeItem('adminUsername');

      console.log('Admin logged out successfully');

      // Redirect to home page
      setTimeout(() => {
        window.location.href = '/';
      }, 500);
    };

    handleLogout();
  }, [navigate]);

  return (
   <div> <h2>Logging out...</h2>
        <p>You will be redirected shortly.</p></div>
        
     
  );
}