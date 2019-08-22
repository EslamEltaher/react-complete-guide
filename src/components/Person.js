import React, { Component } from 'react';
//import "./Person.css";

export default class Person extends Component {
    render() {
        return (
            <div className="Person" onClick={this.props.click}>
                <h1>my name is {this.props.name}, and I'm {this.props.age} years old!</h1>
                <p>{this.props.children}</p>
            </div>
        )
    }
}
