// Dependencies
import * as Yup from 'yup';
import axios from 'axios';


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
    }).catch(error => console.error(error))
    alert('Grazie, il messaggio è stato inviato. Risponderemo il prima possibile.')
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
};

export const validationSchema = Yup.object({
    name: Yup.string().required('Campo richiesto. Per favore, inserisci il nome.'),
    email: Yup.string().email('Per favore, inserisci un\'email valida.').required('Campo richiesto. Per favore, inserisci l\'email.'),
    message: Yup.string().required('Campo richiesto. Per favore, inserisci un messaggio.'),
    privacy: Yup.array().min(1, 'Per proseguire è neccessario acconsentire al trattamento dei dati personali.')
});
