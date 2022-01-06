// Style
import style from '../../css/components/Form.module.css';

// Dependeciens
import React from 'react';

// Store
import store from '../store';

// Actions
import {newMessage} from '../actions';


const MyFormMessage = () => {
    return (
        <div className={style['form-box']}>
            <h3>
                Grazie, il tuo messaggio è stato inviato. <br/>
                Ti risponderemo quanto prima. <br/>
                A presto!
            </h3>
            <button onClick={() => store.dispatch(newMessage())}>invia un nuovo messaggio</button>
        </div>
    )
};
export default MyFormMessage;