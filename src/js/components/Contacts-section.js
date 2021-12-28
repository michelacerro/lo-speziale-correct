// Style
import style from '../../css/pages/Home.module.css';

// Dependencies
import React from 'react';

// Components
import MyForm from './MyForm';

const ContactsSection = () => {
    return (
        <div className={style['contacts-section']}>
            <h1>Contattaci, è facile!</h1>
            <MyForm />
        </div>
    )
};
export default ContactsSection;