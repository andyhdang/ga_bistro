import React, { useState } from 'react';
import './Tabbed.scss';

const tabItems = [
    {
        image: '/img/chickenWings.jpg',
        title: 'Appetizers',
        text: 'This is the Appetizers text content',
    },
    {
        image: '/img/platter.jpg',
        title: 'Entrees',
        text: 'This is the Entrees text content',
    },
    {
        image: '/img/icedTea.jpg',
        title: 'Drinks',
        text: 'This is the Drinks text content',
    },
]

const Tabbed = () => {

    const [currentTab, setCurrentTab] = useState(tabItems[1]);
    


    return (
        <div className={'Tabbed'} >
             <div className="tabs">
                <div onClick={ () => { setCurrentTab(tabItems[0]) } }className="tab">Appetizers</div>
                <div onClick={ () => { setCurrentTab(tabItems[1]) } }className="tab">Entrees</div>
                <div onClick={ () => { setCurrentTab(tabItems[2]) } }className="tab">Drinks</div>

             </div>
             <div className="content">
                 <img src= { currentTab.image } alt=""/>
                 <h2>{ currentTab.title }</h2>
                 <p>{ currentTab.text }</p>


             </div>
        </div>
    )
}

export default Tabbed;