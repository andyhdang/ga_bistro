//'useState' is part of the React App
import React, { useState, useEffect } from 'react';
import './Nav.scss';

//Front Awesome

//How do you know to import from 'FontAwesomeIcon'?
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

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
        window.addEventListener('resize', handleWindowResize);
        handleWindowResize();
    }, []);
    


    return (
        <nav className='Nav'>
            
                <div className="hamburger" onClick={ handleHamburgerClick } >
                    <FontAwesomeIcon icon={ faBars} />
                </div>

            
            {
                showMenu && //if showMenu is true, reveal below

            <div className="navBarLinks">
            
                <a className="logo" href="#">[Ga Bistro Logo]</a>
            
            <div className="navs">

                <a className="nav about" href="#" >About us</a>
                <a className="nav menu" href="#" >Menu</a>
                <a className="nav reservations" href="#" >Reservations</a>
                <a className="nav contact" href="#" >Contact</a>

            </div>
                

            </div>
            }

        </nav>
    )
}

export default Nav