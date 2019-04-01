import React, { Component } from 'react';

class Display extends Component {
    render() {
        const string = (this.props.data.length === 0) ? "0" : this.props.data.join('')
        return <button className="btn btn-blocked disabledcol-md-3"> {string} </button>
    }
}

export default Display;