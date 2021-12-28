// Style
import style from '../../css/pages/Contacts.module.css';

// Dependencies
import React from 'react';

// Components
import Logo from '../components/Logo';
import MyForm from '../components/MyForm';
import Map from '../components/Map';


const Contacts = () => {
    return (
        <div className={style['contacts-page']}>
            <div className={style['contacts-container']}>
                <div className={style['contacts-info']}>
                    <h2 className={style['contacts-logo']}><Logo /></h2>
                    <p>Via dei Ciclamini, 5 <br/> Torino (TO)</p>
                    <br />

                    <p>+39 019 7246 234</p>
                    <p>info@lospeziale.scuola.com</p>
                    <br />

                    <p><b>Orari segreteria</b></p>
                    <p>Lunedì - Venerdì</p>
                    <p>9.00 - 18.00</p>
                </div>
                <MyForm  id='form' />
            </div>
            <div id='map' className={style['map']}>
                <Map />
            </div>
        </div>
    )
};
export default Contacts;