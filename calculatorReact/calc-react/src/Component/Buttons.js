import React, { Component } from 'react';

class Buttons extends Component {
    render() {
        return <div className="row"> {this.props.children} </div>
    }
}

export default Buttons;