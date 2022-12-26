import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import '../styles/Navbar.css'

function Navbar() {
  const  [click,setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  return (
    <>
    <nav className="navBar">
        <div className="navBar_container">
            <Link to='/' className='navBar_logo'>
                TRVL <i className='fab fa-typo3'/>
            </Link>
            <div className="menuIcon">
                <i className={click?'fas fa-times':'fas fa-bars'}
                onClick={handleClick}
                />
            </div>
            <ul className={click?'nav-menu active':'nav-menu'}>
                <li className='navItem'>
                    <Link to='/' className='navLink' onClick={closeMobileMenu}>Home</Link>
                </li >
                <li className='navItem'>
                    <Link  to='/' className='navLink' onClick={closeMobileMenu}>Sevice</Link>
                </li>
                <li className='navItem'>
                    <Link  to='/' className='navLink' onClick={closeMobileMenu}>Product</Link>
                </li >
                <li className='navItem'>
                    <Link  to='/' className='navLink-mobile' onClick={closeMobileMenu}>Sign-up</Link>
                </li> 
            </ul>
            <Button children={'Sign-Up'}/>
         </div>
    </nav>
    </>
  )
} 

export default Navbar
