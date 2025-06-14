import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Footer.css';
const Footer=()=>{
    return(
        <>
        <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>FashionKart</h3>
          <p>Your one-stop shop for the latest fashion trends at unbeatable prices.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Product</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FashionKart. All rights reserved.</p>
      </div>
    </footer>
        </>
    )
}
export default Footer;