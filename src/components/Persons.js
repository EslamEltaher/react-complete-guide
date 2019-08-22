import React, { Component } from 'react';
import Person from './Person';

class Persons extends Component {
    render() {
        return this.props.people != null ?
            this.props.people.map(person => <Person key={person.id} name={person.name} age={person.age} click={() => this.props.click(person.id)}/>)
            : null;
    }
}

export default Persons;