// Style
import style from '../../css/components/Button.module.css';

// Dependencies
import React from 'react';
import {Link} from 'react-router-dom';


const Header = (props) => {
    return (
        <button className={style['button']}>
            <Link to={props.link} className={style['button-link']}>{props.text}</Link>
        </button>
    )
};
export default Header;