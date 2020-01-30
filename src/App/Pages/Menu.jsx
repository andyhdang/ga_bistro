import React from 'react';
import './Pages.scss';
import Tabbed from '../Tabbed/Tabbed.jsx';

const Menu = () => {
    return (
        <div className="Pages Menu">
            <div id='menu'><h2>Menu</h2></div>

                <div className= {'placeholders two'}>
                    <Tabbed />
                </div>

        </div>
    )
}
export default Menu

