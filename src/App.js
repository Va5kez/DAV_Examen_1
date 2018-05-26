import React, { Component } from 'react';
import './App.css';
import NewContacts from './NewContact'
import Accounts from './Accounts'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Examen 1</h1>
        </header>
        <NewContacts />
        <Accounts />
      </div>
    );
  }
}

export default App;
