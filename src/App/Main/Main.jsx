import React from 'react';
import './Main.scss';
import Tabbed from '../Tabbed/Tabbed.jsx';

const Main = () => {
    return (
        <main className = {'Main'}> 

                <div className= "placeholders one">
                        <div className={'placeholder slogan'}>Slogan</div>
                        <div className={'placeholder image'}>Image</div>
                </div>

                <div id='menu'><h2>Menu</h2></div>

                 <div className= {'placeholders two'}>
                        <Tabbed />
                </div>
   
        </main>
    )
}

export default Main
