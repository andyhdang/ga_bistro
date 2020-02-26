import React, { useState, useEffect } from 'react';
import './Staff.scss';
// import { staffMembers } from './staff.js';
import API from '../../common/API.js';
import Employee from './Employee.jsx';

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
            <Employee 
                key= { idx } 
                staffMember={ staffMember } 
            />
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