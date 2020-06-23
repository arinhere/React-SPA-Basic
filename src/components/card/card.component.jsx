import React from 'react';
import './card.style.css';

export const CardComponent = props => (
    <div className="card">        
        <img src={`https://robohash.org/${props.user.id}.png&size=180x180`} alt={props.user.name} />
        <span>
            <small>{props.user.name}</small><br/>
            <small>{props.user.email}</small>
        </span>
    </div>
);