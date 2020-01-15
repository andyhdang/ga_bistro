import React from 'react';

//My Components
import Header from './Header/Header.jsx';
import Nav from './Nav/Nav.jsx';
import Main from './Main/Main.jsx';

const App = () => {
    return (
        <div className = 'wrapper'>
            <Header />
            <Nav />
            <Main />

        </div>
    )
}

export default App;
