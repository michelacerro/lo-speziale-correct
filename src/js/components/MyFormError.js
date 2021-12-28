// Style
import style from '../../css/components/Form.module.css';

// Dependeciens
import React from 'react';

// Icons
import {BsExclamationCircleFill} from 'react-icons/bs';

const MyFormError = (props) => {
    return (
        <div className={style['error']}>
            <BsExclamationCircleFill className={style['error-icon']} />
            {props.children}
        </div>
    )
};
export default MyFormError;