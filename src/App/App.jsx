import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';


//My Components
import Header from './Header/Header.jsx';
import Nav from './Nav/Nav.jsx';
import Main from './Main/Main.jsx';
import Footer from './Footer/Footer.jsx';

import './App.scss';

const App = () => {
    return (
        <Router>
            <div className = 'wrapper'>
                <Header />
                <Nav />
                <Main />
                <Footer />
            </div>
        </Router>

    )
}

export default App;
