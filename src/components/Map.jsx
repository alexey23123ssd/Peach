import React from 'react';
import MapUI from "./UI/map.jsx";

const Map = ({regions}) => {
    return (
        <div className="wrapper map-section">
            <div className="map-section__header">
                <div className="map-section__dropdown">
                    <h3 className="map-section__heading">Оффисы Softline</h3>
                    <svg className="map-section__arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.10156 7.99683L12.1016 16.0179L22.1016 7.99683" stroke="#444444" strokeWidth="3"/>
                    </svg>
                </div>
                <ul className="map-section__navigation">
                    {regions.map(item =>
                    <li className='map-section__item' key={item}>{item}</li>)}
                </ul>
            </div>
            <div className="map-section__map">
                <MapUI/>
            </div>
        </div>
    );
};

export default Map;