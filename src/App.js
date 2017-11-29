import React, { Component } from 'react';
import './App.css';
import TextField from './components/TextField'

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

  onChangeFirstName = (value) => {
    // Get the <input> (an HTMLInputElement)
    // const input = value
    // Get the current inputted text from the field
    // const newFirstName = value
    // Make changes to the state
    this.setState( (prevState) => {
      const user = prevState.user
      // Create copy of user with new first name
      user.firstName = value
      return {
        // this.state.user will be updated
        user: user
      }
    })
  }

  onChangeLastName = (value) => {
    // Make changes to the state
    this.setState( (prevState) => {
      const user = prevState.user
      // Create copy of user with new first name
      user.lastName = value
      return {
        // this.state.user will be updated
        user: user
      }
    })
  }

  onChangeImageUrl = (value) => {
    // Make changes to the state
    this.setState( (prevState) => {
      const user = prevState.user
      // Create copy of user with new first name
      user.profileImageURL = value
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
          <TextField
            value={ user.firstName }
            onTextChange={
              (value) => this.onChangeFirstName(value)
            }
          />
        </label>
        <br/>
        <label>
          Last name:
          {' '}
          <TextField
            value={ user.lastName }
            onTextChange={
              (value) => this.onChangeLastName(value)
            }
          />
        </label>
        <br/>
        <label>
          Image URL:
          {' '}
          <TextField
            value={ user.profileImageURL }
            onTextChange={
              (value) => this.onChangeImageUrl(value)
            }
          />
        </label>

      </div>
    );
  }
}

export default App;
