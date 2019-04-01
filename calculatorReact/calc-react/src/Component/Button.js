import React, { Component } from 'react';
import '../App.css';
class Button extends Component {
    render() {
        return (
            <button
                onClick={this.props.onClick}
                className="btn btn-primary col-md-3 ml-1 mt-1"
                data-size={this.props.size}
                data-value={this.props.value}
            >
                {this.props.label}
            </button>
        )
    }
}

export default Button;