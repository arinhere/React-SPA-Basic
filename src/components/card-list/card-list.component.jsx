import React from 'react';
import './card-list.style.css';
import { CardComponent } from '../card/card.component';

export const CardListComponent = props => (
    <div className="card-list">
        {
            props.userlist.map(user =>(
                <CardComponent key={user.id} user={user}></CardComponent>
            ))
        }
    </div>
)