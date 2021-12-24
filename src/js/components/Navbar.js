// Style
import styles from '../../css/components/Header.module.css';

// Dependencies
import React from 'react';
import {NavLink} from 'react-router-dom';


const Navbar = () => {
   // animation navbar icon and toggle menu
    const toggleMenu = () => {
        if (window.innerWidth < 800) {
        const bar1 = document.getElementById('icon-bar1');
        const bar2 = document.getElementById('icon-bar2');
        const bar3 = document.getElementById('icon-bar3');
        const navbarList = document.getElementById('navbar-list');
            if (navbarList.style.display === 'none') {
                bar1.style.transform = 'rotate(45deg) translate(4px, 4px)';
                bar2.style.opacity = '0';
                bar3.style.transform = 'rotate(-45deg) translate(4px, -4px)';
                navbarList.style.display = 'flex';
            } else {
                bar1.style.transform = '';
                bar2.style.opacity = '';
                bar3.style.transform = '';
                navbarList.style.display = 'none';
            };
        };
    };


    return (
        <div className={styles['navbar']}>
            <div className={styles['navbar-icon']} onClick={toggleMenu}>
                <span id='icon-bar1' className={styles['icon-bar']}></span>
                <span id='icon-bar2' className={styles['icon-bar']}></span>
                <span id='icon-bar3' className={styles['icon-bar']}></span>
            </div>
            <ul id='navbar-list' className={styles['navbar-list']}>
                <NavLink to='/lo-speziale' className={styles['navbar-link']} style={({isActive}) => ({fontWeight: isActive ? '500' : ''})} onClick={toggleMenu}>home</NavLink>
                <NavLink to='/chi-siamo' className={styles['navbar-link']} style={({isActive}) => ({fontWeight: isActive ? '500' : ''})} onClick={toggleMenu}>chi siamo</NavLink>
                <NavLink to='/corsi' className={styles['navbar-link']} style={({isActive}) => ({fontWeight: isActive ? '500' : ''})} onClick={toggleMenu}>corsi</NavLink>
                <NavLink to='/ricette' className={styles['navbar-link']} style={({isActive}) => ({fontWeight: isActive ? '500' : ''})} onClick={toggleMenu}>ricette</NavLink>
                <NavLink to='/contatti' className={styles['navbar-link']} style={({isActive}) => ({fontWeight: isActive ? '500' : ''})} onClick={toggleMenu}>contatti</NavLink>
            </ul>
        </div>
    )
};
export default Navbar;