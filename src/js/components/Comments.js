// Style
import style from '../../css/components/Comments.module.css';

// Dependencies
import React, {useState} from 'react';
import {useParams} from 'react-router-dom';

// Components
import Comment from './Comment';


const Comments = () => {
    const id = useParams().id;

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [comment, setComment] = useState();

    const comments = JSON.parse(window.localStorage.getItem('comments')) || [];

    const handleSubmit = (e) => {
        e.preventDefault();

        comments.push({
            name,
            email,
            comment,
            'recipe_id': id
        });

        window.localStorage.setItem('comments', JSON.stringify(comments));

        setName();
        setEmail();
        setComment();
    };

    return (
        <div className={style['comments-section']}>
            <h2>Commenti</h2>
            <form onSubmit={handleSubmit}>
                <div className={style['comments-info-container']}>	
                    <label htmlFor='name'>
                        Nome*
                        <input 
                            type='text' 
                            id='name' 
                            name='name' 
                            placeholder='Nome' 
                            value={name || ''} 
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
                            value={email || ''} 
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
                        value={comment || ''} 
                        onChange={(e) => setComment(e.target.value)} 
                        required 
                    />
                </label>
                <button type='submit' >Aggiungi commento</button>
            </form>
            
            <div className={style['comments-container']}>
                {comments.length > 0 
                    ? comments.filter(comment => (comment.recipe_id === id)).map((comment, index) => <Comment key={index} info={comment} />)
                    : ''
                }
            </div>
        </div>
    )
};
export default Comments;