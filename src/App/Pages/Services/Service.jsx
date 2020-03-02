import React, { useState } from 'react';
import Lightbox from '../../Lightbox/Lightbox.jsx';

const Service = (props) => {

    const [ showLightbox, setShowLightbox] = useState('false');

    const turnLightOn = () => {
        console.log('Turning ON');
        setShowLightbox('true');

    }
    
    const turnLightOff = () => {
        console.log('Turning OFF');
        setShowLightbox('false');
    }

    return (
        <div className="TheServices">
                <img 
                    onClick={ turnLightOn }
                    src= { props.singleService.image } 
                    alt= { props.singleService.title }
                />
                <h3> { props.singleService.title }: Category: { props.singleService.category }</h3>
                <Lightbox 
                    show = { showLightbox }
                    turnLightOff= { turnLightOff } 
                    imageURL= { props.singleService.image }
                    imageAlt= { props.singleService.title }
                    
                />
        </div>
    )
}

export default Service;
