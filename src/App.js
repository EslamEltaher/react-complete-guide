import React, { Component } from 'react';
import './App.css';
import Persons from './components/Persons';

class App extends Component {
  state = { 
    people : [
      { id: 1, name : "Eslam", age : 26 },
      { id: 2, name : "Maximilian", age : 28 },
      { id: 3, name : "Manu", age : 29 },
    ],
    otherState: "Ay 7aga"
  };

  switchNamesHandler = () => {
    this.setState({ 
      people : [
        { id: 1, name : "Eslaaaam", age : 26 },
        { id: 2, name : "Maximilian", age : 28 },
        { id: 3, name : "Manu", age : 27 },
      ]
    });
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
        <Persons people={this.state.people} click={this.switchNamesHandler}/>
        <button style={this.style} onClick={this.switchNamesHandler} type="button">Swtich names</button>
      </div>
    );
  }
  // return React.createElement('div', { className : 'App' }, React.createElement('h1', null, 'My First React App'));
}

export default App;
