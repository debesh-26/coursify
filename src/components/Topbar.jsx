import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Topbar.css";

function Topbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <div className="company">Let's Hire</div>
      <nav ref={navRef}>
        <a href="/#">Discover</a>
        <a href="/#">Services</a>
        <a href="/#">For Jobseekers</a>
        <a href="/#">For companies</a>
        <a href="/#">Contact Us</a>
        <button className="button">Register</button>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Topbar;
