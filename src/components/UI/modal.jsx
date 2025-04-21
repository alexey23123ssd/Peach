import React from 'react';

const Modal = ({regionsArr,citiesArr,isPressed,setIsPressed}) => {
    let pressed = "none";
    if(isPressed){
        pressed = "flex";
    }
    return (
        <div className="map-section__modal" style={{display:`${pressed}`}} onClick={() => setIsPressed(false)}>
            <div className="map-section__modal-wrapper">
                    {regionsArr.map(item => item === "Все"? "" :
                        <div className="map-section__modal-item">
                            <div className="map-section__modal-itemCont">
                                <h3 className="map-section__modal-item__heading">{item}</h3>
                                <svg className="map-section__modal-item__arrow" width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 4L7.4641 0.25H0.535898L4 4Z" fill="#444444"/>
                                </svg>

                            </div>

                            <ul className="map-section__modal-item__list">
                                {citiesArr.map((city,index) => city.region===item ?
                                    <li className="map-section__modal-item__list-item" key={index}>
                                        {city.name}
                                    </li>
                                    :
                                    "" )}
                            </ul>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default Modal;