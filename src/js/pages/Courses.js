// Style
import style from '../../css/pages/Courses.module.css';

// Dependencies
import React from 'react';

// Components
import CourseBox from '../components/CourseBox';
import Button from '../components/Button';
import Testimonial from '../components/Testimonial';

// JSON
import CoursesData from '../../courses.json';
import TestimonialsData from '../../testimonials.json';


const Courses = () => {
    return (
        <div className={style['courses-page']}>
            <div className={style['courses-container']}>
                <h1>I nostri corsi</h1>
                <div className={style['courses-grid']}>
                    {CoursesData.map(data => <CourseBox key={'course' + data.id} info={data} />)}
                </div>
            </div>
            <div className={style['cta-container']}>
                <Button link='/contatti' text='contattaci per saperne di più' />
            </div>
            <div className={style['testimonials-container']}>
                <h1>I nostri studenti dicono di noi...</h1>
                {TestimonialsData.map(data => <Testimonial key={'testimonial' + data.id} info={data} />)}
            </div>
        </div>
    )
};
export default Courses;