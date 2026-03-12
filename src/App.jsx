import { HashRouter} from 'react-router-dom';
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
     <HashRouter>
         {isAdmin && <AdminNavBar/>}
       
         {!isAdmin  && <MainNavBar/>}
     </HashRouter>
  );
}

export default App;