import { useState } from "react";
import logo from "../images/logo.jpeg";
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    const [btnLogin,setBtnLogin] = useState('Login');
    const status = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="deliver-logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {status ? <div>Active</div> : <div>Inactive</div>}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <button className="login" onClick={() => {
            btnLogin === "Login" ? setBtnLogin('Logout') : setBtnLogin('Login');
          }}>{btnLogin}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
