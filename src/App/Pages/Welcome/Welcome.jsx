import React from 'react';
import './Welcome.scss';

//menu slideshow container
import '../Menu/Menu.scss';
import { menuItems } from '../Menu/menu.js';

//about us container 
import About from '../About/About.jsx';
import Staff from '../Staff/Staff.jsx';
import Slideshow from './Slideshow/Slideshow';


const MenuItems =() => {
    return menuItems.map( (menuItems, idx) => {
        return (
            <div key= { idx } className="MenuItems">
                <img src= { menuItems.img } alt= { menuItems.name }/>
                <h3> { menuItems.name }</h3>
            </div>
        )})
}

const Welcome = () => {
    return (
        <div className="Welcome">
            <div className="title">
                <div className ="thetitle">
                    <div className="filler"></div>
                    <div className="logo">Ga Bistro</div>
                    <button>Explore Our Menu</button>
                </div>
            </div>
            <div className="container slideshow">
                <MenuItems />
            </div>
            <div className= "container about">
                <About />
            </div>

            <Slideshow />

            <div className="container services">
                <Staff />
            </div>

        </div>
    )
}
export default Welcome

