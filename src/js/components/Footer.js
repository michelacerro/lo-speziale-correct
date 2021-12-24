// Style
import style from '../../css/components/Footer.module.css';

// Dependencies
import React from 'react';
import {Link} from 'react-router-dom';

// Components
import Logo from './Logo';

// Icons
import {FiMapPin} from 'react-icons/fi';
import {BsTelephone} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';
import {MdCopyright} from 'react-icons/md';


const Footer = () => {
    return (
        <footer className={style['footer']}>
            <div className={style['footer-data']}>
                <h2><Logo /></h2>
                <div className={style['footer-icons']}>
                    <a href='/contatti#map' ><FiMapPin /></a>
                    <a href='tel:+39019246234'><BsTelephone /></a>
                    <a href='mailto:info@lospeziale.scuola.com' target='_blank' rel='noopener noreferrer'><AiOutlineMail /></a>
                </div>
                <Link to='/privacy' className={style['footer-link']}>privacy policy</Link>
                <p><MdCopyright /> 2021 - <b>Lo Speziale</b> - Scuola di cucina | P.IVA 00000000000</p>
            </div>
        </footer>
    )
};
export default Footer;