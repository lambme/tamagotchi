import React, { Component } from 'react';

import './Mouth.css';

class Mouth extends Component {
    render = () => {
        const root = this.props.root;
        
        const {smile, open, direction} = this.props.controller.mouth;
        
        return (
            <path className="Mouth" d={`
                M ${root.x-root.r} ${root.y}
                C ${root.x-root.r} ${root.y+root.r*smile},
                  ${root.x+root.r} ${root.y+root.r*smile},
                  ${root.x+root.r} ${root.y}
                  
                M ${root.x+root.r} ${root.y}
                C ${root.x+root.r} ${root.y+root.r*(smile + open)},
                  ${root.x-root.r} ${root.y+root.r*(smile + open)},
                  ${root.x-root.r} ${root.y}
            `} />
        );
    }
};

export default Mouth;
