import React, { Component } from 'react';
import { connect } from 'react-redux';

import AnimalOutput from '../../components/AnimalOutput/AnimalOutput';
import AnimalFeeder from '../../components/AnimalFeeder/AnimalFeeder';
import Timer from '../../components/Timer/Timer';

import './Animal.css';

class Animal extends Component {
    render () {
        return (
            <div className="Animal">
                <AnimalOutput body={this.props.body} controller={this.props.controller}/>
                <AnimalFeeder label="feed" clicked={this.props.onFeed} />
                <Timer interval={100.0} tick={this.props.onTick} />
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        ...state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFeed: () => dispatch({type: 'FEED'}),
        onTick: (dt) => dispatch({type: 'TICK', dt: dt})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Animal);
