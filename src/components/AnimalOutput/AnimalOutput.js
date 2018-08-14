import React from 'react';

import './AnimalOutput.css';
import BodyPart from './BodyPart/BodyPart';

const animalOutput = props => {
    let face = ':-|';
    if (props.happiness < 0) {
        face = ':-(';
    } else if (props.happiness > 0) {
        face = ':-)';
    }

    return (
        <div className="AnimalOutput">
            <svg width="100%" height="100%">
                <BodyPart root={props.body} time={props.time} happiness={props.happiness} />
            </svg>
        </div>
    );
};

export default animalOutput;
