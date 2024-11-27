import React from 'react'
import './Footer.css'
import logo from '../../assets/img/Logo.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className='footer-logo'>
                <img src={logo} alt="" />
                <p>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
            </div>
            <div className='footer-ul'>
                <div className='footer-li'>
                    <span>Our Technologies</span>
                    <p>ReactJS</p>
                    <p>Gatsby</p>
                    <p>NextJS</p>
                    <p>NodeJS</p>
                </div>
                <div className='footer-li'>
                <span>Our Services</span>
                    <p>Social media Marketing</p>
                    <p>Web & Mobile App  Development</p>
                    <p>Data & Analytics</p>
                </div>
            </div>
        </div>
        <div className='footer-bottem'>
            <div className='footer-bottem-div'>
                <span>Privacy Policy </span><span>|</span><span> Terms & Conditions</span>
            </div>
        </div>
    </div>
  )
}

export default Footer