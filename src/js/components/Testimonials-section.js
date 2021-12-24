// Style
import style from '../../css/pages/Home.module.css';

// Dependencies
import React from 'react';

// Components
import Testimonial from './Testimonial';

// JSON
import TestimonialsData from '../../testimonials.json';


const TestimonialsSection = () => {
    return (
        <div className={style['testimonials-section']}>
            <h1>I nostri studenti dicono di noi...</h1>
            <div className={style['testimonials-container']}>
                {TestimonialsData.map(data => <Testimonial key={'testimonial' + data.id} info={data} />)}
            </div>
        </div>
    )
};
export default TestimonialsSection;