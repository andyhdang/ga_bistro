import React, { useState, useEffect } from 'react';
import '../Pages.scss';
import './Services.scss';
// import { theServices } from './services.js';
import API from '../../common/API.js';
import TheServices from './TheServices.jsx';
import Categories from './Categories.jsx';

const Services = () => {

    const [ theServices, setTheServices] = useState([]);
    const [ categories, setCategories] = useState([]);
    const [ currCat, setCurrCat] = useState('Hot Tub');

    useEffect (() => {
        API.get('services/gallery').then((result) => {
            console.log('Got Services', result);
            setTheServices(result.data);
        });

        API.get('services/categories').then((result) => {
            console.log('Categories Server Response', result);
            setCategories(result.data);
        });

    }, []);

    return (
        <div className="Pages Services">
            <h2>Services</h2>
            <Categories 
                categories = { categories }
                currCat = { currCat }
                setCurrCat= { setCurrCat }
            />
            <div className="container">

                <TheServices
                    theServices = { theServices }
                    currCat = { currCat }
                
                /> 
            </div>
           
        </div>

    )
}
export default Services;