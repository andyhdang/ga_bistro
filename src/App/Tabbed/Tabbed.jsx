import React, { useState } from 'react';
import './Tabbed.scss';

const tabItems = [
    {
        image: '/img/chicken-wings.jpg',
        title: 'Appetizers',
        text: 'This is the Appetizers text content',
    },
    {
        image: '/img/entrees.jpg',
        title: 'Entrees',
        text: 'This is the Entrees text content',
    },
    {
        image: '/img/wine.jpg',
        title: 'Drinks',
        text: 'This is the Drinks text content',
    },
]

const Tabbed = () => {

    const [currentTab, setCurrentTab] = useState(tabItems[0]);

    const isAppetizers = (currentTab.title === 'Appetizers') ? 'tab active': 'tab';
    const isEntrees = (currentTab.title === 'Entrees') ? 'tab active': 'tab';
    const isDrinks = (currentTab.title === 'Drinks') ? 'tab active': 'tab';

    
    return (
        <div className={'Tabbed'} >
             <div className="tabs">
                <div onClick={ () => { setCurrentTab(tabItems[0]) } }className= { isAppetizers } >Appetizers</div>
                <div onClick={ () => { setCurrentTab(tabItems[1]) } }className= { isEntrees }>Entrees</div>
                <div onClick={ () => { setCurrentTab(tabItems[2]) } }className= { isDrinks }>Drinks</div>

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