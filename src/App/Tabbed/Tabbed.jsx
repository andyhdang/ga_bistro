import React from 'react';
import './Tabbed.scss';

const tabItems = [
    {
        image: '/img/chickenWings.jpg',
        title: 'About',
        text: 'This is the About text content',
    },
    {
        image: '/img/chickenWings.jpg',
        title: 'About',
        text: 'This is the About text content',
    },
    {
        image: '/img/chickenWings.jpg',
        title: 'About',
        text: 'This is the About text content',
    },
]

const Tabbed = () => {

    const currentTab = tabItems[1];


    return (
        <div className={'Tabbed'} >
             <div className="tabs">
                <div className="tab">Appetizers</div>
                <div className="tab">Entrees</div>
                <div className="tab">Drinks</div>

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