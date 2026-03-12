import { BrowserRouter} from 'react-router-dom';
import { useState, useEffect } from 'react';

import MainNavBar from './pages/MainNavBar';
import AdminNavBar from './admin/AdminNavBar';


function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  

  useEffect(() => {
    // Check sessionStorage for user role
    const adminStatus = sessionStorage.getItem('isAdmin') === 'true';
    

    setIsAdmin(adminStatus);
   
  }, []);

  return (
     <BrowserRouter>
         {isAdmin && <AdminNavBar/>}
       
         {!isAdmin  && <MainNavBar/>}
     </BrowserRouter>
  );
}

export default App;