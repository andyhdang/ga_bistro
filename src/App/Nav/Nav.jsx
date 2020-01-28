//'useState' is part of the React App
import React, { useState } from 'react';
import './Nav.scss';

//Front Awesome

//How do you know to import from 'FontAwesomeIcon'?
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {

    const [showMenu, updateShowMenu] = useState(true);

    const handleHamburgerClick = () => {
        console.log('You hit the hamburger')
        
        let newShowMenu;

        if (showMenu === true) {
            newShowMenu = false;
        }else {
            newShowMenu = true;
        }

        updateShowMenu(newShowMenu);
    }

    return (
        <nav className='Nav'>
            
            <div className="hamburger" onClick={ handleHamburgerClick } >
                <FontAwesomeIcon icon={ faBars} />
            </div>
            {
                //if the showMenu is true
                showMenu &&

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