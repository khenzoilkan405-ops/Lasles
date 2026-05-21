// ============================
// src/components/Navbar.jsx
// ============================

import logo from "../assets/Logo.png";
import burgerIcon from "../assets/burgerIcon.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logoMerk">
        <div>
          <img src={logo} alt="logo" />
        </div>

        <div className="navbarMerk">
          Lasles<span className="navbarVpnWord">VPN</span>
        </div>

        <div className="burgerIcon">
          <img src={burgerIcon} alt="burger" />
        </div>
      </div>

      <div className="mainRoute">
        <a href="#" className="navbarRoute">About</a>
        <a href="#" className="navbarRoute">Features</a>
        <a href="#" className="navbarRoute">Pricing</a>
        <a href="#" className="navbarRoute">Testimonials</a>
        <a href="#" className="navbarRoute">Help</a>
      </div>

      <div className="sign">
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;