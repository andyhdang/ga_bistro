//'useState' and 'useEffect' is part of the React App
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

//style sheet
import './Nav.scss';

//Front Awesome
//How do you know to import from 'FontAwesomeIcon'?
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {

    const [showMenu, updateShowMenu] = useState(true);

    const handleHamburgerClick = () => {

        if (showMenu === true) {
            updateShowMenu(false);
        } else {
            updateShowMenu(true);
        }
    }

    const handleWindowResize = () => {

        if (window.innerWidth > 599) {
            updateShowMenu(true);
        } else {
            updateShowMenu(false);
        }
    }

    //useEffect says only do this when our Nav mounts for the first time.
    useEffect(()=> {
        window.addEventListener('resize', handleWindowResize); //apply handleWindowResize when window is resized
        handleWindowResize();
    }, []);
    


    return (
        <nav className='Nav'>
            
                <div className="hamburger" onClick={ handleHamburgerClick } >
                    <FontAwesomeIcon icon={ faBars} />
                </div>

            
            {
            showMenu && //if showMenu is true, reveal below

            <div className="links">
                <div className="navlinks">
                    <NavLink to='/' exact>Home</NavLink>
                    <NavLink to='/about'>About us</NavLink>
                    <NavLink to='/menu'>Menu</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                    <NavLink to='/services'>Services</NavLink>
                </div>

            </div>
            }

        </nav>
    )
}

export default Nav