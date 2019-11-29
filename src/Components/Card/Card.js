import React from 'react';
import './Card.css';
import nanoid from 'nanoid'

const Card = props => {
    return (
        <div key={nanoid()} className='card'>
            <p>Name:{props.name}, price:{props.price} KGS</p>
            <span onClick={props.removeItem}><i className='fas fa-trash'/></span>
        </div>
    );
};

export default Card;