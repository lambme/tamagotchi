import React from 'react';

import './AnimalFeeder.css';

const animalFeeder = props => (
    <div className="AnimalFeeder" onClick={props.clicked}>
        {props.label}
    </div>
);

export default animalFeeder;
