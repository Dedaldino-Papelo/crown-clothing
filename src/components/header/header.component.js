import React from 'react'
import { Link } from 'react-router-dom'
import './header.style.scss'

const Header = () => {
  return (
    <div className='header'>
        <Link to='/' className="logo-container">
        </Link>
        <div className='options'>
        <Link to='/shop' className="option">
            SHOP
        </Link>
        <Link to={`/`} className="option">
            CONTACT
        </Link>
        </div>
      
    </div>
  )
}

export default Header
