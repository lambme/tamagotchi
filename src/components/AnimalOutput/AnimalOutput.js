import React from 'react';

import './AnimalOutput.css';
import BodyPart from './BodyPart/BodyPart';

const animalOutput = props => {
    return (
        <div className="AnimalOutput">
            <svg width="100%" height="100%">
                <BodyPart root={props.body} controller={props.controller} />
            </svg>
        </div>
    );
};

export default animalOutput;
