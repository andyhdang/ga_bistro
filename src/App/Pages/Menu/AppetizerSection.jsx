import React from 'react';
import appetizers from './dishes.js';


const AppetizerSection = () => {
    return (
        <div>
            <h2 className= "header">Appetizers</h2>
            <div className="dish-names">
                <ul>
                    <li>
                        {appetizers.map()}
                    </li>
                </ul>
                
            </div> 
        </div>
        
    ) 
};

export default AppetizerSection