// Style
import style from '../../css/components/Staff.module.css';

// Dependencies
import React from 'react';


const Staff = (props) => {
    return (
        <div className={style['staff-box']}>
            <img src={process.env.PUBLIC_URL + `/images/staff/${props.info.image}`} alt={'staff-' + props.info.id}  />
            <div className={style['info']}>
               <h4>{props.info.name}</h4> 
               <h5>{props.info.role}</h5>
            </div>
        </div>
    )
};
export default Staff;