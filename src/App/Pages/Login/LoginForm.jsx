import React, { useRef, useState } from 'react';
import './LoginForm.scss';
import { emailCheck } from '../../common/utilities.js';
import keycode from 'keycode';
import API from '../../common/API.js';
import classnames from 'classnames';

const LoginForm = () => {
    
    const [emailIsValid, updateEmailIsValid] = useState(true);
    const [formIsValid, updateFormIsValid] = useState(true);
    const [errors, updateErrorsArray] = useState([]);

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleFormSubmit = () => {
        console.log('You Clicked Me');

        let errorMessages = [];

        if (emailRef.current.value.length < 4) {
            errorMessages.push({
                message: 'You forgot to fill out the Email field.',
            })
        }

        if (!emailCheck(emailRef.current.value)) {
            errorMessages.push({
                message: 'The Email you provided is invalid.',
            })
        }

        if (passwordRef.current.value.length < 1) {
            errorMessages.push({
                message: 'You forgot to fill out the Password field.',
            })
        }

        updateErrorsArray(errorMessages); 

            if (errorMessages.length > 0) {
                updateFormIsValid(false);
            } else {
                updateFormIsValid(true);
               console.log('Posting the data')
        
               const postData ={
                   email: emailRef.current.value,
                   password: passwordRef.current.value,
               }

               API.post('login/validate', postData).then((results)=> {
                   console.log('Posting the data', results);
               });
            }
    }

    const validateEmail = () => {
        const emailValue = emailRef.current.value;
        console.log('Validating email', emailValue);

        if (emailValue.length > 3 && !emailCheck(emailValue)) {
            updateEmailIsValid(false);
        } else {
            updateEmailIsValid(true);
        }
    }

    const displayErrors = () => {
        return errors.map((error, idx) => {
            return (
                <li key= { idx } >{ error.message }</li>
            );

        })
    }

    const handleKeyDown = (event) => {
        switch (keycode(event)) {
            case 'space:':
            case 'enter':
                handleFormSubmit();
                break;
            default:
                return true;
        }
    }

    const theClassName = classnames ({
        'LoginForm': true,
        'form-valid': formIsValid,
        'form-invalid': !formIsValid,
    });
    
    return (

        <div className= { theClassName }>

            { 
                (errors.length > 0) &&
                <div className="error-message">
                    ERROR MESSAGES GO HERE
                    <ul>
                        { displayErrors() }
                    </ul>
                </div>
            }

            <div className="form-group">
                <div className="left">
                    <label htmlFor="email">Login</label> 
                </div>
                <div className="right">
                    <input 
                        className= { emailIsValid ? '': 'invalid' }
                        ref={ emailRef } 
                        name="email" 
                        id="email" 
                        placeholder="example@email.com"
                        onChange={ validateEmail }
                    />
                </div>
            </div>

        <div className="form-group">
            <div className="left">
                <label htmlFor="password">Password</label>
            </div>
            <div className="right">
                <input 
                    ref={ passwordRef } 
                    type="password" 
                    id="password" 
                    placeholder="Please Enter Your Password Here">
                </input>
            </div>  
        </div>
        

        <div className="form-group">
                <div className="left" />
                <div className="right">
                    <button
                        tab-index={ 0 }
                        onClick= { handleFormSubmit }
                        onKeyDown= { handleKeyDown }
                    >Login</button>
                </div>
            </div>


        </div>

    );
};

export default LoginForm;