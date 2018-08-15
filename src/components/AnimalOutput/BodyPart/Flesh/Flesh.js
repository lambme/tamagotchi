import React, { Component } from 'react';

import './Flesh.css';

import BodyPart from '../BodyPart';

import {renderColor} from '../../../../utils.js';

class Flesh extends Component {
    render = () => {
        const root = this.props.root;
        
        const mainColor = renderColor(root.color);
        
        const style = {
            fill: mainColor
        };
        
        let attachments = [];
        if (root.attachments) {
            attachments = root.attachments.map( (a, i) => {
                const a_ = {
                    ...a,
                    x: a.x + root.x,
                    y: a.y + root.y
                };
                
                return (
                    <BodyPart key={i} root={a_} controller={this.props.controller} />
                );
            });
        }
        
        return (
            <svg>
                <circle className="Flesh" cx={root.x} cy={root.y} r={root.r} style={style} />
                {attachments}
            </svg>
        );
    }
};

export default Flesh;
