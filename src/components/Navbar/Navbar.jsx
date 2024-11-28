import React, { useState } from 'react';
import './Navbar.css'
import logo from '../../assets/img/Logo.png'

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
      <div className="Navbar">
      <div className="Navbar-logo">
        <img className="Navbar-logo-img" src={logo} alt="Logo" />
      </div>

      <div className="Navbar-toggle" >
        <span onClick={toggleSidebar} className={isSidebarOpen ? '' : 'toggle-icon'}>{isSidebarOpen ? '' : '☰'}</span>
      </div>

        <div className='Navbar-links'>
            <span className='Navbar-link'>SERVICES</span>
            <span className='Navbar-link'>ABOUT US</span>
            <span className='Navbar-link'>CONTACT US</span>
            <span className='Navbar-link'>CAREERS</span>
            
        </div>

<div className={`Sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="Sidebar-content">
          <span className="Sidebar-link">SERVICES</span>
          <span className="Sidebar-link">ABOUT US</span>
          <span className="Sidebar-link">CONTACT US</span>
          <span className="Sidebar-link">CAREERS</span>
          <span onClick={toggleSidebar}  className={!isSidebarOpen ?'toggle-icon2':'toggle-icon1'} >✖</span>
        </div>
      </div>
    </div>
        {!isSidebarOpen  ? (<div className={!isSidebarOpen?"Overlay":""} ></div>):<div> </div>}
 </div>
  )
}

export default Navbar