import React, { Component } from 'react';

class AddPerson extends Component {
    style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    }

    state = {
        name: '',
        age: '',
    };

    nameChangedHandler = (event) => {
        this.setState({name: event.target.value});
    }
    ageChangedHandler = (event) => {
        this.setState({age: event.target.value});
    }

    render() {
        return (
            <div style={{border: "1px solid black", padding: "10px"}}>
                <input type="text"      value={this.state.name}  onChange={this.nameChangedHandler}  placeholder="name" />
                <input type="number"    value={this.state.age}   onChange={this.ageChangedHandler}   placeholder="age" />

                <button style={this.style} onClick={() => this.props.addPerson(this.state.name, this.state.age)} type="button">Add Person</button>
            </div>
        );
    }
}

export default AddPerson;