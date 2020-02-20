import React from 'react';
import './Menu.scss';
import { menuItems } from './menu.js';
import appetizers from './dishes';
// import AppetizerSection from './AppetizerSection.jsx';
 

const MenuItems =() => {
    return menuItems.map( (menuItems, idx) => {
        return (
            <div key= { idx } className="MenuItems">
                <img src= { menuItems.img } alt= { menuItems.name }/>
                <h3> { menuItems.name }</h3>
            </div>
        )})
}

const AppetizerSection = () => {
    return appetizers.map( (appetizers, idx) => {
        return ( 
                <div key= { idx } className= "dish-names">
                   <li>{appetizers.name}</li>
                </div>
        )})
}


const Menu = () => {
    return (
        <div className="Menu">

            <h1 className= "banner">Menu</h1>

        <div className= "menu-section">
            <div className= "header"><h2>Appetizers</h2></div>
            <AppetizerSection />
        </div>
        <div>
            <MenuItems />
        </div>
            
            
        </div> 
      
    )
}
export default Menu

