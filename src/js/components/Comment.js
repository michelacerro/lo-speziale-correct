// Style
import style from '../../css/components/Comment.module.css';

// Dependencies
import React from 'react';


const Comment = (props) => {
    return (
        <div className={style['comment-box']}>
            <div className={style['color-avatar']}></div>
            <div className={style['comment']}>
                <div>
                    <h3>{props.info.name}</h3>
                    {props.info.email ? <small>({props.info.email})</small> : ''}
                </div>
                <p>{props.info.comment}</p>
            </div>
        </div>
    );
};
export default Comment;