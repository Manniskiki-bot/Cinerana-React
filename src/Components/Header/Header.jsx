import {React, useRef, useState } from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import { FaListUl, FaTimes } from "react-icons/fa";

const Header = () => {
  const navRef = useRef();
  const [showMenu, setShowMenu] = useState(false);

  const showNavBar = () => {
    setShowMenu(!showMenu);
    document.body.style.overflow = showMenu ? "auto" : "hidden";
  };

  const handleLinkClick = () => {
    setShowMenu(false);
    document.body.style.overflow = "auto";
  };


  return (
 <section className='h-wrapper container'>
  <div className="h-container flexCenter paddings innerWidth">
      
      <img src="/logo-no-background.png" alt="" width={120}/>
    
    <div className="h-menu flexCenter">
      <div className={`nav ${showMenu ? "responsive_nav" : "flexCenter"}`} ref={navRef}>
        <Link to="/" onClick={handleLinkClick}>Home</Link>
        <Link to='/movies' onClick={handleLinkClick}>Movies</Link>
        <Link to="/pricing" onClick={handleLinkClick}>Pricing</Link>
        <Link to='/' onClick={handleLinkClick}>Login</Link>
        <button className='button menu-btn'>SIGN UP</button>
        <FaTimes className='menu closeBtn' onClick={showNavBar}/>
        </div>
        <FaListUl className='menu openBtn' onClick={showNavBar}/>
    </div>
    </div>
  </section>
  )
}

export default Header