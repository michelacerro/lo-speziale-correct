// Style
import style from '../../css/pages/Home.module.css';

// Dependecies
import React from 'react';

// Components
import Button from './Button';


const AboutSection = () => {
    const Image = `${process.env.PUBLIC_URL}/images/slider/school-8.jpg`;

    return (
        <div className={style['about-section']}>
            <h1>Le spezie come stile di cucina</h1>
            <div className={style['about-container']}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius ex vel blandit posuere. Pellentesque a metus sed diam accumsan sagittis quis eget elit. Nunc auctor eget sapien eget fringilla. Donec elementum aliquam dignissim. Curabitur eu dolor justo. Etiam lacinia suscipit ornare. Nulla tristique pulvinar venenatis. Nullam luctus orci vitae lorem dignissim dapibus non sit amet dolor.</p>
                <p>Nam scelerisque non mi non euismod. Donec ut condimentum mi, eget condimentum justo. Curabitur tristique vitae dui ac sollicitudin. Mauris nec consequat orci. Sed aliquam lacus sed neque ornare, et facilisis odio fermentum. Donec scelerisque enim nunc, at pellentesque sem euismod bibendum. Nam dui quam, pulvinar id varius sed, sollicitudin vitae purus. Sed placerat erat at auctor semper. Duis aliquet iaculis sapien, a tincidunt turpis faucibus vitae. Donec egestas suscipit quam sit amet elementum. In vel elit cursus, pellentesque turpis ut, aliquet libero. Quisque vulputate arcu ac nunc euismod, ac elementum neque lacinia. Phasellus et odio non tortor dignissim ultricies. Proin vitae nunc vitae sapien convallis fermentum. Nunc sit amet magna tortor.</p>
                <img src={Image} alt='' />
            </div>
            <Button link='/chi-siamo' text='scopri la nostra scuola' />
        </div>
    )
};
export default AboutSection;