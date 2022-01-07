// Style
import style from '../../css/components/Header.module.css';

// Dependencies
import React from 'react';
import {Link} from 'react-router-dom';

// Components
import Logo from './Logo';
import Navbar from './Navbar';


const Header = () => {
    return (
        <header className={style['header']}>
            <Link to='/lo-speziale-correct' className={style['header-logo']}><Logo /></Link>
            <Navbar />
        </header>
    )
};
export default Header;