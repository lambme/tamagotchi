import React, { Component } from 'react';

import './BodyPart.css';

import Eye from './Eye/Eye';
import Flesh from './Flesh/Flesh';
import Mouth from './Mouth/Mouth';
import Nose from './Nose/Nose';

const bodyParts = {
    eye: Eye,
    flesh: Flesh,
    mouth: Mouth,
    nose: Nose
};

class BodyPart extends Component {
    render = () => {
        const BodyPartName = bodyParts[this.props.root.type];
        
        return (
            <BodyPartName
                root={this.props.root}
                controller={this.props.controller}
            />
        );
    }
};

export default BodyPart;
