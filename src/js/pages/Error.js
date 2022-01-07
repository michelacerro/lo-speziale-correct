// Style
import style from '../../css/pages/Error.module.css';

// Dependencies
import React from 'react';

// Components
import Button from '../components/Button';


const Error = () => {
    return (
        <div className={style['error-page']}>
            <div className={style['error-message']}>
                <h1>404<br/>Pagina non trovata</h1>
                <p>Siamo spiacenti, ma la pagina da te cercata non esiste.
                    <br/>Prova una delle opzioni qui di seguito.</p>
                <Button link='/lo-speziale-correct' text='Torna alla home' />
                <Button link='/corsi' text='scopri i nostri corsi' />
                <Button link='/contatti' text='contattaci' />
            </div>
        </div>
    )
};
export default Error;