import { Link, Outlet } from 'react-router-dom';
import Nav from '../src/components/Navbar';

import Footer from '../src/components/Footer';

const Layout=()=>{
    return(
        <>
        
        <Nav/>
        
        <main>
        <Outlet />
      </main>
         <Footer/>
         
        </>
    )
}
export default Layout;