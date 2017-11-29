import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    user: {
      firstName: 'Perry',
      lastName: 'Perkins',
      profileImageURL: 'https://randomuser.me/api/portraits/men/10.jpg'
    }
  }

  render() {
    return (
      <div className="App">
        <h1>React Profile Editor</h1>
        <img src="https://randomuser.me/api/portraits/men/10.jpg" />
        <p>Name: Perry Perkins</p>
      </div>
    );
  }
}

export default App;
