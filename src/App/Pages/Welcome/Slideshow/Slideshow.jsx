import React, { useState, useEffect } from 'react';
import './Slideshow.scss';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import API from '../../../common/API';

const defaultSlides = [
    {
        arrKey: 0,
        image: '/img/Slideshow/slide-1.jpg',
        title: 'Slide 1 Title',
    },
    {
        arrKey: 1,
        image: '/img/Slideshow/slide-2.jpg',
        title: 'Slide 2 Title',
    },
    {
        arrKey: 2,
        image: '/img/Slideshow/slide-3.jpg',
        title: 'Slide 3 Title',
    },
];

const Slideshow =() => {

    const [ slides, setSlides ] = useState(defaultSlides);

    useEffect (() => {

        API.get('slides').then((result)=> {
            console.log('Slides Server Response', result );
            setSlides(result.data);

        });
    }, []);

    const renderSlides = () => {
        return slides.map (slide => {
            return (
            <div>
                <img src= { slide.image } alt= { slide.title}/>
                <p className="legend">{ slide.title }</p>
            </div>
            )
        })
    };

    return (
        <Carousel
            showThumbs= { false }
            showIndicators = { false }
            autoPlay= { true }
            showArrows= { true }
        > 

        { renderSlides() }

        </Carousel>

    )
};

export default Slideshow;