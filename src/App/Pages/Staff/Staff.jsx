import React, { useState, useEffect } from 'react';
import './Staff.scss';
// import { staffMembers } from './staff.js';
import API from '../../common/API.js';

const StaffMembers = () => {

    const [staffMembers, setStaffMembers] = useState([]);

    useEffect(() => {
        API.get('staff').then((result) => {
            console.log('Staff Response', result);
            setStaffMembers(result.data);
        });
        
    }, []);
   

    return staffMembers.map((staffMember, idx) => {
        return (
            <div key={ idx } className= "StaffMember">
                <img src= { staffMember.image } alt={ staffMember.name }/>
                <h3> { staffMember.name }</h3>
            </div>
        );
    });
}

const Staff = () => {
    return (
        <div className="Pages Staff">
            Staff Goes Here.

            <div className="container">

                <StaffMembers />
            </div>
            
        </div>
    )
}

export default Staff;