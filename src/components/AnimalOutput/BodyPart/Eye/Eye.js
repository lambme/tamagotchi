import React, { Component } from 'react';

import './Eye.css';

class Eye extends Component {
    render = () => {
        const root = this.props.root;
        
        const {pupil, direction} = this.props.controller.eyes[root.eye];
        
        const pupilR = root.r*pupil;
        
        return (
            <svg>
                <circle className="EyeBall" cx={root.x} cy={root.y} r={root.r} />
                <circle
                    className="EyePupil"
                    cx={root.x + (root.r - pupilR)*direction[0]}
                    cy={root.y + (root.r - pupilR)*direction[1]}
                    r={pupilR}
                />
            </svg>
        );
    }
};

export default Eye;
