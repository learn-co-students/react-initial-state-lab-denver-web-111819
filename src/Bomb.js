import React, { Component } from 'react';


class Bomb extends Component {
    state = {
        secondsLeft: this.props.initialCount
    }
    render(){
        return(this.state.secondsLeft != 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : 'Boom!')    
    }
}

// your Bomb code here!
export default Bomb;