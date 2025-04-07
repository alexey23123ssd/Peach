import React from 'react';

const Figure = ({businessesArr}) => {
    return (
        <div className='business-section__items'>
            {businessesArr.map((item,index) =>
            <figure className='business-section__item' key={index}>
                {item.img}
                <figcaption>{item.desc}</figcaption>
            </figure>
        )}
        </div>

    );
};

export default Figure;