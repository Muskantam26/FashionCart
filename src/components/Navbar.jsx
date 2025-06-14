
import './Navbar.css';
import { Link } from 'react-router-dom';
const Nav=()=>{
    return(
        <>
        
        <nav className="navbar">
      <div className="logo">FashionKart</div>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About</Link></li>
       
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/">Register</Link></li>
      </ul>
    </nav>
        </>
    )
}

export default Nav;