import React from 'react';
import './Main.scss';
import { Switch, Route } from 'react-router-dom';


import Welcome from '../Pages/Welcome.jsx';
import About from '../Pages/About.jsx';
import Menu from '../Pages/Menu/Menu.jsx';
import Contact from '../Pages/Contact.jsx';

const Main = () => {
    return (
        <main className = {'Main'}> 

        <Switch>
            <Route path='/about'>
                <About />
            </Route>
            <Route path='/menu'>
                <Menu />
            </Route>
            <Route path='/contact'>
                <Contact />
            </Route> 
            <Route path='/'>
                <Welcome />
            </Route >
        </Switch>

   
        </main>
    )
}

export default Main
