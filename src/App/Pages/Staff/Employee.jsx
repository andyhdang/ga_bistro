import React, { useState } from 'react';
import Lightbox from '../../Lightbox/Lightbox.jsx';

const Employee = (props) => {

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

        <div className= "StaffMember">
                <img 
                    onClick= { turnLightOn }
                    src= { props.staffMember.image } 
                    alt={ props.staffMember.name }
                />
                <h3> { props.staffMember.name }</h3>
                <Lightbox
                    show = { showLightbox }
                    turnLightOff= { turnLightOff } 
                    imageURL= { props.staffMember.image }
                    imageAlt= { props.staffMember.name }
                
                />
        </div>
    )
}

export default Employee;
