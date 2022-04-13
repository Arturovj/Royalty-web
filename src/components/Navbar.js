import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { ButtonLogin } from './ButtonLogin';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false)


  const showButton = () => {
      if (window.innerWidth <= 960) {
          setButton(false)
      } else {
          setButton(true)
      }
  };

  useEffect(() => {
      showButton();
  },[])

  window.addEventListener('resize', showButton);

  const changeBackground = () => {
      if(window.scrollY >= 80 ) {
          setNavbar(true)
      } else {
          setNavbar(false)
      }
  }

  window.addEventListener('scroll', changeBackground)

  return(
      <>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          ROYAL<i class="fas fa-dice-d6"></i>Y
          
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>

          <li>
            <Link
              to='/login'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Login
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        <div className="login-button">

        {button && <ButtonLogin  buttonStyle='btn--outline'>LOGIN</ButtonLogin>}
        </div>
       </div> 


      </nav>
      
      </>
  )


}

export default Navbar
