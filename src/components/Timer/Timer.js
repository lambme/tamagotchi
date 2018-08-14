import React, { Component } from 'react';

class Timer extends Component {
    state = {
        timer: null,
        dt: 0.0
    };
    
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        let timer = setInterval(this.tick, this.props.interval);
        this.setState({
            timer: timer,
            dt: this.props.interval*0.001
        });
    }

    componentWillUnmount = () => {
        clearInterval(this.state.timer);
    }

    tick = () => {
        this.props.tick(this.state.dt);
    }

    render = () => {
        return "";
    }
}

export default Timer;
