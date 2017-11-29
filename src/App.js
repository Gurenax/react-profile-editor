import React, { Component } from 'react';
import './App.css';

const getFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`
}

class App extends Component {
  state = {
    user: {
      firstName: 'Perry',
      lastName: 'Perkins',
      profileImageURL: 'https://randomuser.me/api/portraits/men/1.jpg'
    }
  }

  onChangeFirstName = (event) => {
    // Get the <input> (an HTMLInputElement)
    const input = event.target
    // Get the current inputted text from the field
    const newFirstName = input.value
    // Make changes to the state
    this.setState( (prevState) => {
      const user = prevState.user
      // Create copy of user with new first name
      user.firstName = newFirstName
      return {
        // this.state.user will be updated
        user: user
      }
    })
  }
  
  render() {
    const user = this.state.user

    return (
      <div className="App">
        <h1>React Profile Editor</h1>
        <img src={user.profileImageURL} />
        <p>Name: {getFullName(user.firstName, user.lastName)}</p>

        <label>
          First name:
          {' '}
          <input
            value={ user.firstName }
            onChange={ this.onChangeFirstName }
            />
        </label>
      </div>
    );
  }
}

export default App;
