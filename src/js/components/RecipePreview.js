// Style
import style from '../../css/components/RecipePreview.module.css';

// Dependencies
import React from 'react';
import {Link} from 'react-router-dom';


const RecipePreview = (props) => {
    return (
        <Link to={`/ricette/${props.info.id}`} className={style['recipe-preview']}>
            <img src={props.info.image} alt={props.info.title} />
            <h5>{props.info.title}</h5>
        </Link>
    )
};
export default RecipePreview;