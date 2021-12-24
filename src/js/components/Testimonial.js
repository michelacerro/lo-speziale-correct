// Style
import style from '../../css/components/Testimonials.module.css';

// Dependencies
import React from 'react';


const Testimonials = (props) => {
    return (
        <div className={style['testimonials-box']}>
            <img src={process.env.PUBLIC_URL + `/images/testimonials/${props.info.image}`} alt={'testimonial-' + props.info.id}  />
            <div className={style['info']}>
               <h4>{props.info.name}</h4> 
               <h5>{props.info.course}</h5>
               <p>{props.info.comment}</p>
            </div>
        </div>
    )
};
export default Testimonials;