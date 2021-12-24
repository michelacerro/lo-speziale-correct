// Style
import style from '../../css/pages/Home.module.css';

// Dependencies
import React from 'react';

// Components
import Form from './Form';

const ContactsSection = () => {
    return (
        <div className={style['contacts-section']}>
            <h1>Contattaci, è facile!</h1>
            <Form />
        </div>
    )
};
export default ContactsSection;