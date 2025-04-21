import React from 'react';

const Figure = ({item,className}) => {
    return (
            <figure className={className+"__item"}>
                <div  className={className+"__item-wrapper"}>
                    <img className={className+"__img"} src={item.img} />
                </div>
                <figcaption className={className+"__text"}>
                    {item.desc}
                    {className === "business-section" ?
                        <p className="business-section__text__content">{item.content}</p>
                        :
                        null
                    }
                </figcaption>
            </figure>
    );
};

export default Figure;