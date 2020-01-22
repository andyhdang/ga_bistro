import React from 'react';

import './Nav.scss';

const Nav = () => {
    return (
        <nav className='Nav'>
            
            <div id="links">

            <a className="logo">[Ga Bistro Logo]</a>
            <a className="alignright" href="#" >About us</a>
            <a className="alignright" href="#" >Menu</a>
            <a className="alignright" href="#" >Reservations</a>
            <a className="alignright" href="#" >Contact</a>

            </div>


        </nav>
    )
}

export default Nav