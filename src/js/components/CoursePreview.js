// Style
import style from '../../css/components/CourseBox.module.css';

// Dependencies
import React from 'react';


const CoursePreview = (props) => {
    return (
        <div className={style['course-box']}>
            <h2>{props.info.name}</h2>
            <p>{props.info.description}</p>
        </div>
    )
};
export default CoursePreview;