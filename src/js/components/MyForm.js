// Style
import style from '../../css/components/Form.module.css';

// Dependecies
import React from 'react';
import {useSelector} from 'react-redux';
import {Formik, Form, Field, ErrorMessage} from 'formik';

// Utils
import {initialValues, validationSchema, onSubmit} from './MyFormSetup';

// Components
import MyFormMessage from './MyFormMessage';
import MyFormError from './MyFormError';


const MyForm = () => {
    const formState = useSelector(state => state.formReducer);

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            validateOnChange={false}
            validateOnBlur={false}
        >
            {formState 
                ? <MyFormMessage />
                :
                <Form className={style['form-box']}>
                    <div className={style['form-data']}>
                        <label htmlFor='name'>
                            Nome
                            <Field
                                type='text'
                                id='name'
                                name='name'
                                placeholder='Nome'
                                className={style['input']}
                            />
                            <ErrorMessage name='name' component={MyFormError} />
                        </label>
                        
                    
                        <label htmlFor='email'>
                            Email
                            <Field 
                                type='email'
                                id='email'
                                name='email'
                                placeholder='Email'
                                className={style['input']}
                            />
                            <ErrorMessage name='email' component={MyFormError} />
                        </label>
                        
                    </div>

                    <label htmlFor='message'>
                        Messaggio
                        <Field 
                            as='textarea'
                            id='message'
                            name='message'
                            placeholder='Scrivi qui il tuo messaggio...'
                        />
                        <ErrorMessage name='message' component={MyFormError} />
                    </label>
                
                    <div className={style['form-privacy-container']}>
                        <div className={style['form-privacy']} id='privacy-agreement'>
                            <Field type='checkbox' name='privacy' value='agree' />
                            <label htmlFor='privacy'>Ho letto l'<a href='/privacy'>informativa privacy</a> e acconsento alla memorizzazione 
                            dei miei dati nel vostro archivio secondo quanto stabilito dal regolamento europeo 
                            per la protezione dei dati personali n. 678/2016. GDPR.</label>
                        </div>
                        <ErrorMessage name='privacy' component={MyFormError} />
                    </div>

                    <button type='submit'>Invia</button>
                </Form>
            }
        </Formik>
    )
};
export default MyForm;