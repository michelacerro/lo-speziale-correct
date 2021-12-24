// Style
import style from '../../css/components/Comments.module.css';

// Dependencies
import React, {useState} from 'react';

// Components
import Comment from './Comment';


const Comments = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    const comments = JSON.parse(window.localStorage.getItem('comments')) || [];

    const handleSubmit = (e) => {
        e.preventDefault();

        comments.push({
            'name': name,
            'email': email,
            'comment': comment
        });

        window.localStorage.setItem('comments', JSON.stringify(comments));

        setName('');
        setEmail('');
        setComment('');
    };

    

    return (
        <div className={style['comments-section']}>
            <h1>Commenti</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>
                        Nome*
                        <input 
                            type='text' 
                            id='name' 
                            name='name' 
                            placeholder='Nome' 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                    </label>
                    <label htmlFor='email'>
                        Email
                        <input 
                            type='email' 
                            id='email' 
                            name='email' 
                            placeholder='Email' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </label>
                </div>

                <label htmlFor='comment'>
                    Commento*
                    <textarea 
                        id='comment' 
                        name='comment' 
                        placeholder='Scrivi qui il tuo commento...' 
                        value={comment} 
                        onChange={(e) => setComment(e.target.value)} 
                        required 
                    />
                </label>
                <button type='submit' >Aggiungi commento</button>
            </form>
            <div className={style['comments-container']}>
                {comments.length > 0 
                    ? 
                        comments.map((comment, index) => <Comment key={index} info={comment}  />)
                    :
                        ''
                }
            </div>
        </div>
    )
};
export default Comments;