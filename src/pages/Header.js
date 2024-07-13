import React from 'react'
import './header.css'
import userImage from '../images/user.jpg'

function Header({ToggleActive}) {
  return (
    <header>
        <a href="#" className='menu' onClick={ToggleActive}>
            <i className='bi bi-sliders'></i>
        </a>
        <div className='userItems'>
            <a href="#" className='icon'>
                <i className='bi bi-heart-fill'></i>
                <span className='like'>0</span>
            </a>
            <a href="#" className='icon'>
                <i className='bi bi-bag-fill'></i>
                <span className='bag'>0</span>
            </a>
            <div className='avatar'>
                <a href="#"><img src={userImage} alt="user Image" /></a>
                <div className='user'>
                    <span>Houssam</span>
                    <a href="#">View Profile</a>
                </div>

            </div>
        </div>
    </header>
  )
}

export default Header