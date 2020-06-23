import React from 'react';

export const SearchBox = props => (
    <div className="searchBox-padding">
        <input className="search" type="search" placeholder={props.placeholder} onChange={props.changeEvent} />
    </div>
);

// Alternate Approach

// export const SearchBox = { placeholder, changeEvent } => (
//     <input type="search" placeholder={placeholder} onChange={changeEvent} />
// );