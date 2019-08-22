import React, { Component } from 'react';
import './App.css';
import Persons from './components/Persons';
import AddPerson from './components/AddPerson/AddPerson';

class App extends Component {
  state = { 
    people : [
      { id: 1, name : "Eslam", age : 26 },
      { id: 2, name : "Maximilian", age : 28 },
      { id: 3, name : "Manu", age : 29 },
    ],
    otherState: "Ay 7aga"
  };

  // switchNamesHandler = () => {
  //   this.setState({ 
  //     people : [
  //       { id: 1, name : "Eslaaaam", age : 26 },
  //       { id: 2, name : "Maximilian", age : 28 },
  //       { id: 3, name : "Manu", age : 27 },
  //     ]
  //   });
  // };

  deletePersonHandler = (id) => {
    this.setState(prevState => {
      let people = prevState.people;

      return {
        people: people.filter(p => p.id !== id)
      }
    })
  }

  addPersonHandler = (name, age) => {
    this.setState(prevstate => ({
      people: prevstate.people.concat({ id: Math.floor(Math.random() * 3000), name: name, age: age })
    }));
  }

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
        <Persons people={this.state.people} click={this.deletePersonHandler}/>
        <button style={this.style} onClick={this.switchNamesHandler} type="button">Swtich names</button>
        <br/>
        <br/>
        <AddPerson addPerson={this.addPersonHandler}/>
      </div>
    );
  }
  // return React.createElement('div', { className : 'App' }, React.createElement('h1', null, 'My First React App'));
}

export default App;
