import React, { Component } from 'react';
import './App.css';
import Persons from './components/Persons';
import AddPerson from './components/AddPerson/AddPerson';
import { connect } from 'react-redux';
import * as actionCreators from './store/actions/actions'

class App extends Component {
  componentDidMount = () => {
    this.props.storeDispatch(actionCreators.addPerson("Eslam", 26));
    this.props.storeDispatch(actionCreators.addPerson("Maximilian", 28));
    this.props.storeDispatch(actionCreators.addPerson("Manu", 29));
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
  addPerson: (name, age) => dispatch(actionCreators.addPersonAsync(name, age)),
  removePerson: (id) => dispatch(actionCreators.removePerson(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
