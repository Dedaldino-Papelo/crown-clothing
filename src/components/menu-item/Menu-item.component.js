import React from 'react'
import { useNavigate } from 'react-router-dom'
import './menu-item.style.scss'

const MenuItem = ({ title, imageUrl, size,linkUrl }) => {

  const navigate = useNavigate()

  return (
    <div className={`${size} menu-item`} onClick={() => navigate(`${linkUrl}`)}>

      <div className='background-image' 
        style={{
          backgroundImage: `url(${imageUrl})`
        }}>
      </div>

      <div className='content'>
        <div className='title'>{title.toUpperCase()}</div>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  )
}

export default MenuItem

