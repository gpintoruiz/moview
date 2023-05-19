import React from 'react'
import '../styles/Header.css'
import logo from '../img/logo.png'
import lupa_blanca from '../img/lupa-white.png'
import campana_blanca from '../img/campana-white.png'
import user_white from '../img/user-white.png'

const Header = () => {
  return (
    <header className='header'>
      <a href=""><img id='logo-header' src={logo} alt="Logo Moview"/></a>
      <nav>
          <form>
              <input className="input-element" type="text"/>
          </form>
          <div className='container-icon-nav'><a href=""><img className='icon-nav' src={lupa_blanca} alt="Buscador"/></a></div>
          <a className='link' href="">Home</a>
          <a className='link' href="">Help</a>
          <div className='container-icon-nav'><a href=""><img className='icon-nav' src={campana_blanca} alt="Campana"/></a></div>
          <div className="container-icon-nav"><a href=""><img className='icon-nav' src={user_white} alt="Usuario"/></a></div>
      </nav>
    </header>
  )
}

export default Header