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
            <a className='Navbar-link'>SERVICES</a>
            <a className='Navbar-link'>ABOUT US</a>
            <a className='Navbar-link'>CONTACT US</a>
            <a className='Navbar-link'>CAREERS</a>
            
        </div>

<div className={`Sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="Sidebar-content">
          <a className="Sidebar-link">SERVICES</a>
          <a className="Sidebar-link">ABOUT US</a>
          <a className="Sidebar-link">CONTACT US</a>
          <a className="Sidebar-link">CAREERS</a>
          <a onClick={toggleSidebar}  className={!isSidebarOpen ?'toggle-icon2':'toggle-icon1'} >✖</a>
        </div>
      </div>
    </div>
        {!isSidebarOpen  ? (<div className={!isSidebarOpen?"Overlay":""} ></div>):<div> </div>}
 </div>
  )
}

export default Navbar