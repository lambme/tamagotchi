import React, { Component } from 'react';

import './BodyPart.css';

class BodyPart extends Component {
    constructor(props) {
        super(props);
    }
    
    render = () => {
        const root = this.props.root;
        const time = this.props.time;
        const happiness = this.props.happiness;
        
        const renderColor = (color) => `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
        
        const mainColor = renderColor(root.color);

        let attachments = [];
        if (root.attachments) {
            attachments = root.attachments.map( (a, i) => {
                const a_ = {
                    ...a,
                    x: a.x + root.x,
                    y: a.y + root.y
                };
                
                return (
                    <BodyPart key={i} root={a_} time={time} happiness={happiness}/>
                );
            });
        }

        let element;
        switch (root.type) {
            case 'round':
                element = <circle className="BodyPart" cx={root.x} cy={root.y} r={root.r} fill={mainColor} />;
                break;
            case 'smile':
                const smileK = Math.max(Math.min(happiness*0.05, 0.25), -1.0);
                element = <path className="BodyPart" d={`
                    M ${root.x-root.r} ${root.y}
                    C ${root.x-root.r} ${root.y+root.r*smileK},
                      ${root.x+root.r} ${root.y+root.r*smileK},
                      ${root.x+root.r} ${root.y}
                      
                    M ${root.x+root.r} ${root.y}
                    C ${root.x+root.r} ${root.y+root.r*(smileK + 0.5 + 0.5*Math.sin(time*3.0))},
                      ${root.x-root.r} ${root.y+root.r*(smileK + 0.5 + 0.5*Math.sin(time*3.0))},
                      ${root.x-root.r} ${root.y}
                `} fill={mainColor}/>;
                break;
        };
        
        return (
            <svg>
                {element}
                {attachments}
            </svg>
        );
    }
};

export default BodyPart;
