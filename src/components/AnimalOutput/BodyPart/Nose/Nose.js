import React, { Component } from 'react';

import './Nose.css';

import {renderColor} from '../../../../utils.js';

class Nose extends Component {
    render = () => {
        const root = this.props.root;
        
        const noseColor = renderColor(root.color);
        const holeColor = renderColor(root.color.map( x => x*0.25 ));
        
        const noseStyle = {
            fill: noseColor
        };
        const holeStyle = {
            fill: holeColor
        };
        
        return (
            <svg>
                <circle className="Nose" cx={root.x} cy={root.y} r={root.r} style={noseStyle} />
                <circle className="Nose" cx={root.x-root.r*0.5} cy={root.y+root.r*0.5} r={root.r*0.2} style={holeStyle} />
                <circle className="Nose" cx={root.x+root.r*0.5} cy={root.y+root.r*0.5} r={root.r*0.2} style={holeStyle} />
            </svg>
        );
    }
};

export default Nose;
