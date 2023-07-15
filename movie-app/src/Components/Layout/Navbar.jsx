import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../Assets/logo.png'
import { FaBars } from 'react-icons/fa'

function Navbar() {
  const [show, setshow] = useState('menu-div')

  const showmenuitem= ()=>{
    setshow('menu-div showmenu')
  }

  const removemenu=()=>{
    setshow('menu-div')
  }

  return (
    <div className='navbar'>
    <div className='navbar-container'>

    <div className='navbar-logo'>
    <img src={logo} className='logo' />
    </div>

    <div className={show}>
    <ul className='menu'>
    <li onClick={removemenu} className='list-items'><a href='/'>Home</a></li>
    <li onClick={removemenu} className='list-items'><a href='#'>Categories</a></li>
    <li onClick={removemenu} className='list-items'><a href='#'>Trending</a></li>
    </ul>
    </div>

    <div onClick={showmenuitem} className='nav-toggle-icon'>
    <FaBars className='nav-icon'/>
    </div>
    </div>
    </div>
  )
}

export default Navbar