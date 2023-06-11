import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import LoginBtn from './LoginBtn';

const StyledNavbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-centre">
        <div className="navlogo-div">
          <Link to="/">
            <img src={logo} alt="Logo" className="nav-logo" />
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            HOME
          </Link>
          <Link to="/about-us" className="nav-link">
            ABOUT US
          </Link>
          <Link to="/contact-us" className="nav-link">
            CONTACT US
          </Link>
          <LoginBtn />
        </div>
      </div>
    </nav>
  );
};
export default StyledNavbar;
