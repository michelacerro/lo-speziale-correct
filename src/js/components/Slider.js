// Style
import style from '../../css/components/Slider.module.css';

// Dependencies
import React, {useState} from 'react';

// Icons
import {AiOutlineRight, AiOutlineLeft} from 'react-icons/ai';

// Images
import School1 from '../../images/slider/school-1.jpg';
import School2 from '../../images/slider/school-2.jpg';
import School3 from '../../images/slider/school-3.jpg';
import School4 from '../../images/slider/school-4.jpg';
import School5 from '../../images/slider/school-5.jpg';
import School6 from '../../images/slider/school-6.jpg';
import School7 from '../../images/slider/school-7.jpg';
import School8 from '../../images/slider/school-8.jpg';


const Slider = () => {
    const images = [School1, School2, School3, School4, School5, School6, School7, School8];
    const [current, setCurrent] = useState(0);

    const nextImage = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    }

    const prevImage = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    }

    return (
        <div className={style['slider-container']}>
            <AiOutlineLeft className={style['slider-arrow']} onClick={prevImage} />
            {images.map((image, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                            <img src={image} alt='Immagine della scuola' className={style['slider-image']} />
                        )}
                    </div>
                );
            })}
            <AiOutlineRight className={style['slider-arrow']} onClick={nextImage} />
        </div>
    )
};
export default Slider;