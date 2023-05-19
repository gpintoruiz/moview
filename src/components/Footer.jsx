import React from 'react'
import '../styles/Footer.css'
import logo from '../img/logo.png'
import { Outlet, Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='footer'>
        <img id="logo-footer" src={logo} alt="Moview" />
        <div>
            <p>Made by:<a className='link' href="">Guillermo</a>+<a className='link' href="">Freddy</a>+<a className='link' href="">José</a>+<a className='link' href="">Juan</a></p>
            <p id='parrafo-2'>Disclaimer: No copyright is hosted on this server, all the files on third party websites by using our website you comply and agree with our TOC and Cookie Policy</p>
        </div>
    </footer>
    )
}

export default Footer