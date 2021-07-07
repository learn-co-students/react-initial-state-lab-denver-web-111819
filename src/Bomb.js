import React, { Component } from 'react'

export default class Bomb extends Component {

    state = {
        secondsLeft: this.props.initialCount
    }
    
    render(){
        if (this.state.secondsLeft > 0){
        return (
        <div>
            <h3>{`${this.state.secondsLeft} seconds left before I go boom!`}</h3>
        </div>
        )
        } else {
            return (
                <div>
                      <h3>Boom!</h3>
                </div>
            )
        }
    }

}
