import React from 'react'
import { Link } from 'react-router-dom'
import './header.style.scss'
import Logo from '../../assets/Logo/084 crown.svg'

const Header = () => {
  return (
    <div className='header'>
        <Link to='/' className="logo-container">
          <img src={Logo} alt='logo' />
        </Link>
        <div className='options'>
        <Link to='/shop' className="option">
            SHOP
        </Link>
        <Link to={`/`} className="option">
            CONTACT
        </Link>
        <Link to={`/signIn`} className="option">
            SIGN IN
        </Link>
        </div>
      
    </div>
  )
}

export default Header
