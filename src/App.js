import React, { Component } from 'react';
import './App.css';
import Persons from './components/Persons';
import AddPerson from './components/AddPerson/AddPerson';
import { connect } from 'react-redux';
import * as actionTypes from './store/actionTypes'

class App extends Component {
  componentDidMount = () => {
    this.props.storeDispatch({ type: actionTypes.ADD_PERSON, personData: { name: "Eslam",  age: 26 } });
    this.props.storeDispatch({ type: actionTypes.ADD_PERSON, personData: { name: "Maximilian",  age: 28 } });
    this.props.storeDispatch({ type: actionTypes.ADD_PERSON, personData: { name: "Manu",  age: 29 } });
  }

  state = { 
    otherState: "Ay 7aga"
  };

  style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  render () {
    return (
      <div className="App">
        <header className="Blog">
          <nav>
            <ul>
              <li><a href="/">Home</a></li> 
              <li><a href="/new-post">NewPost</a></li> 
            </ul>
          </nav>
        </header>
        <h1>My First React App</h1>
        <Persons people={this.props.people} click={this.props.removePerson}/>
        <button style={this.style} onClick={this.switchNamesHandler} type="button">Swtich names</button>
        <br/>
        <br/>
        <AddPerson addPerson={this.props.addPerson}/>
      </div>
    );
  }
  // return React.createElement('div', { className : 'App' }, React.createElement('h1', null, 'My First React App'));
}

const mapStateToProps = (state) => {
  return { 
    people : state.people
  };
};

const mapDispatchToProps = dispatch => ({
  storeDispatch : dispatch,
  addPerson: (name, age) => dispatch({ type: actionTypes.ADD_PERSON, personData: { name, age } }),
  removePerson: (id) => dispatch({ type: actionTypes.REMOVE_PERSON, personId: id})
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
