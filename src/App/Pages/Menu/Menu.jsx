import React from 'react';
import '../Pages.scss';
import './Menu.scss';
import Tabbed from '../../Tabbed/Tabbed.jsx';
import { menuItems } from './menu.js'

const MenuItems =() => {
    return menuItems.map( (menuItems, idx) => {
        return (
            <div key= { idx } className="MenuItems">
                <img src= { menuItems.img } alt= { menuItems.name }/>
                <h3> { menuItems.name }</h3>
            </div>
        )
    }

    )
}

const Menu = () => {
    return (
        <div className="Pages Menu">

            <div className="banner">
                <h1>Menu</h1>
            </div>

            <Tabbed />
            <div className="container">
               <MenuItems />
     
            </div>
            
        </div>
    )
}
export default Menu

