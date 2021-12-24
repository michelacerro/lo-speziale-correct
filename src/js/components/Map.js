// Style
import style from '../../css/pages/Contacts.module.css';

// Dependencies
import React from 'react';
import GoogleMapReact from 'google-map-react';

// Icons
import {FaMapMarkerAlt} from 'react-icons/fa';


const Marker = () => <div className={style['marker']}><FaMapMarkerAlt /></div>

const Map = () => {
    return (
        <GoogleMapReact 
            bootstrapURLKeys={{key: process.env.REACT_APP_MAPS_API_KEY}}
            defaultCenter={{lat: 45.10665, lng: 7.63042}}
            defaultZoom={18}
        >
            <Marker 
                lat={45.10665}
                lng={7.63042}
            />
        </GoogleMapReact>
    )
};
export default Map;