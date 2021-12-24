// Style
import style from '../../css/pages/Home.module.css';

// Dependencies
import React from 'react';

// Components
import Logo from './Logo';
import Button from './Button';


const HeroSection = () => {
    return (
        <div className={style['hero-section']}>
            <div className={style['hero-content']}>
                <div className={style['hero-text']}>
                    <h1><Logo /></h1>
                    <h3>La scuola di cucina incentrata sulle spezie</h3>
                </div>
                <Button link='/corsi' text='scopri i nostri corsi' />
            </div>
        </div>
    )
};
export default HeroSection;