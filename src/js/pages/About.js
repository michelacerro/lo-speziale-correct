// Style
import style from '../../css/pages/About.module.css';

// Dependencies
import React from 'react';

// Components
import Staff from '../components/Staff';
import Slider from '../components/Slider';

// JSON
import StaffData from '../../staff.json';


const About = () => {
    return (
        <div className={style['about-page']}>
            <div className={style['section-part']}>
                <h1>I nostri valori</h1>

                <div className={style['value-container']}>
                    <h3>Cura</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque odio eros, maximus hendrerit sem vitae, vulputate finibus lectus. Donec fermentum pellentesque libero, eget venenatis sapien. Aliquam nisl nulla, ullamcorper a mi in, imperdiet dapibus turpis. Integer vel vehicula ex, et luctus ex.</p>
                </div>
                <div className={style['value-container']}>
                    <h3>salute</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque odio eros, maximus hendrerit sem vitae, vulputate finibus lectus. Donec fermentum pellentesque libero, eget venenatis sapien. Aliquam nisl nulla, ullamcorper a mi in, imperdiet dapibus turpis. Integer vel vehicula ex, et luctus ex.</p>
                </div>
                <div className={style['value-container']}>
                    <h3>eccellenza</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque odio eros, maximus hendrerit sem vitae, vulputate finibus lectus. Donec fermentum pellentesque libero, eget venenatis sapien. Aliquam nisl nulla, ullamcorper a mi in, imperdiet dapibus turpis. Integer vel vehicula ex, et luctus ex.</p>
                </div>
            </div>

            <div className={style['section-part']}>
                <h1>Il nostro Staff</h1>
                <div className={style['staff-container']}>
                    {StaffData.map(data => <Staff key={'staff' + data.id} info={data} />)}
                </div>
            </div>

            <div className={style['section-part']}>
                <h1>La scuola</h1>
                <div className={style['school-container']}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque odio eros, maximus hendrerit sem vitae, vulputate finibus lectus. Donec fermentum pellentesque libero, eget venenatis sapien. Aliquam nisl nulla, ullamcorper a mi in, imperdiet dapibus turpis. Integer vel vehicula ex, et luctus ex. Integer finibus ipsum tempor, sagittis nibh id, malesuada velit. Nunc ornare quam in dui eleifend placerat. Donec non enim sed libero vulputate placerat quis sed mauris. Nam viverra neque in dolor consectetur, ut accumsan orci dapibus. Maecenas ultrices nisi ut imperdiet scelerisque. Integer a risus nibh.</p>
                    <p>Aliquam suscipit pharetra turpis, ac dapibus risus rutrum ut. Proin ac dignissim dolor. Aenean consectetur euismod mi, sit amet tristique risus venenatis eu. Phasellus maximus est felis, et ullamcorper justo pharetra in. Proin tincidunt eget ligula accumsan ultricies. Sed vitae rutrum ipsum. Maecenas sit amet lacus id mi iaculis convallis eget et sapien. Ut semper velit ac metus tempus facilisis at ut felis. Sed vulputate leo eget dictum molestie. Phasellus mi nunc, tempor at tortor et, condimentum dictum magna.</p>
                    <Slider />
                </div>
            </div>          
        </div>
    )
};
export default About;