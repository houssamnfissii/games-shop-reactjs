import React ,{useState} from 'react'
import './sideMenu.css'
import navListData from '../data/navListData'
import SocialListItem from './SocialListItem'
import socialListData from '../data/socialListData'
import NavListItem from './NavListItem'

function SideMenu({active}) {
    const [navData,setNavData]=useState(navListData)
    const [socialData,setSocialData]=useState(socialListData)
  return (
    <div className={`sideMenu ${active ? 'active':undefined}`}>
        <a href="#" className='logo'>
            <i className='bi bi-controller'></i>
            <span className='brand'>Play</span>
        </a>
        <ul className='nav'>

            {navData.map((item,index)=>(
                <NavListItem key={index} item={item}/>
            ))}
        </ul>
        <ul className='social'>
            {socialData.map((item,index)=>(
                <SocialListItem key={index} item={item}/>
            ))}
            <li>
                <a href="#" className='share'>
                    <i className='bi bi-share'></i>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default SideMenu