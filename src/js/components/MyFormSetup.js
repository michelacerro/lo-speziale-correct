// Dependencies
import * as Yup from 'yup';
import axios from 'axios';

// Store
import store from '../store';

// Actions
import {sentMessage} from '../actions';


export const initialValues = {
    name: '',
    email: '',
    message: '',
    privacy: []
};


export const onSubmit = (values, onSubmitProps) => {
    axios({
        method: 'post',
        url: 'https://formsubmit.co/michelacerro@gmail.com',
        data: values
    })
    .then(resp => {
        if (resp.status === 200) {
        store.dispatch(sentMessage());
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
    }}).catch(error => console.error(error))
};

export const validationSchema = Yup.object({
    name: Yup.string().required('Campo richiesto. Per favore, inserisci il nome.'),
    email: Yup.string().email('Per favore, inserisci un\'email valida.').required('Campo richiesto. Per favore, inserisci l\'email.'),
    message: Yup.string().required('Campo richiesto. Per favore, inserisci un messaggio.'),
    privacy: Yup.array().min(1, 'Per proseguire è neccessario acconsentire al trattamento dei dati personali.')
});
