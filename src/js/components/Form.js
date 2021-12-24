// Style
import style from '../../css/components/Form.module.css';

// Dependecies
import React from 'react';
// import {useForm, ValidationError} from '@formspree/react';

// Components
// import Button from './Button';


const Form = () => {
    // const [state, handleSubmit] = useForm('xyylrnrn');
    // if (state.succeeded) {
    //     return (
    //         <div className={style['form-box']}>
    //             <h2>Grazie, il tuo messaggio è stato inviato. <br />Ti risponderemo quanto prima. <br />A presto!</h2>
    //         </div>
    //     );
    // };

    return (
        <form className={style['form-box']} >
            <div className={style['form-data']}>
                <label htmlFor='name'>
                    Nome
                    <input type='text' id='name' name='name' placeholder='Nome' className={style['input']} required />
                </label>
                {/* <ValidationError field='name' prefix='Name' errors={state.errors} className={style['form-error']} /> */}

                <label htmlFor='email'>
                    Email
                    <input type='email' id='email' name='email' placeholder='Email' className={style['input']} required />
                </label>
                {/* <ValidationError field='email' prefix='Email' errors={state.errors} className={style['form-error']} /> */}
            </div>

            <label htmlFor='message'>Messaggio</label>
            <textarea id='message' name='message' placeholder='Scrivi qui il tuo messaggio...' />
            {/* <ValidationError field='message' prefix='Message' errors={state.errors} className={style['form-error']} required /> */}

            <div className={style['form-privacy']}>
                <input type='checkbox' id='privacy' name='privacy' required />
                <label htmlFor='privacy'>Ho letto l'<a href='/privacy'>informativa privacy</a> e acconsento alla memorizzazione 
                dei miei dati nel vostro archivio secondo quanto stabilito dal regolamento europeo 
                per la protezione dei dati personali n. 678/2016. GDPR.</label>
                {/* <ValidationError field='privacy' prefix='Privacy' errors={state.errors} className={style['form-error']} /> */}
            </div>

            <button type='submit'>Invia</button>
            {/* <ValidationError errors={state.errors} className={style['form-error']} /> */}
        </form>
    )
};
export default Form;