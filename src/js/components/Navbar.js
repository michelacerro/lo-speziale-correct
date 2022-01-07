// Style
import styles from '../../css/components/Header.module.css';

// Dependencies
import React from 'react';
import {NavLink} from 'react-router-dom';

// Utils
import {toggleMenu} from '../utils/Utils';


const Navbar = () => {
    return (
        <div className={styles['navbar']}>
            <div className={styles['navbar-icon']} onClick={toggleMenu}>
                <span id='icon-bar1' className={styles['icon-bar']}></span>
                <span id='icon-bar2' className={styles['icon-bar']}></span>
                <span id='icon-bar3' className={styles['icon-bar']}></span>
            </div>
            <ul id='navbar-list' className={styles['navbar-list']}>
                <NavLink to='/lo-speziale-correct' className={styles['navbar-link']} style={({isActive}) => ({fontWeight: isActive ? '500' : ''})} onClick={toggleMenu}>home</NavLink>
                <NavLink to='/chi-siamo' className={styles['navbar-link']} style={({isActive}) => ({fontWeight: isActive ? '500' : ''})} onClick={toggleMenu}>chi siamo</NavLink>
                <NavLink to='/corsi' className={styles['navbar-link']} style={({isActive}) => ({fontWeight: isActive ? '500' : ''})} onClick={toggleMenu}>corsi</NavLink>
                <NavLink to='/ricette' className={styles['navbar-link']} style={({isActive}) => ({fontWeight: isActive ? '500' : ''})} onClick={toggleMenu}>ricette</NavLink>
                <NavLink to='/contatti' className={styles['navbar-link']} style={({isActive}) => ({fontWeight: isActive ? '500' : ''})} onClick={toggleMenu}>contatti</NavLink>
            </ul>
        </div>
    )
};
export default Navbar;