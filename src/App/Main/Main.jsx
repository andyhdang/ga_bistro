import React from 'react';
import './Main.scss';
import Tabbed from '../Tabbed/Tabbed.jsx';

const Main = () => {
    return (
        <main className = {'Main'}> 

        <div className="mainPlaceholders">

                <div className= {'placeholders one'}>
                        <div className={'placeholder slogan'}></div>
                        <div className={'placeholder image'}></div>
                </div>

                 <div className= {'placeholders two'}>
                        <Tabbed />
                </div>

        </div>
        
           
        
        </main>
    )
}

export default Main
