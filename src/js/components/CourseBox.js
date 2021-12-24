// Style
import style from '../../css/components/CourseBox.module.css';

// Dependencies
import React from 'react';


const CourseBox = (props) => {
    return (
        <div className={style['course-box']}>
            <h2>{props.info.name}</h2>
            <p>{props.info.description}</p>
            <ul>
                {props.info.details.map((detail, index) => <li key={index}>{detail}</li>)}
            </ul>
            <h4>€ {props.info.price}</h4>
        </div>
    )
};
export default CourseBox;