import React, { Component } from 'react';
import './App.css';
import TextField from './components/TextField'
import ShowProfile from './components/ShowProfile'
import EditProfile from './components/EditProfile'

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
        <ShowProfile user={ user } />
        <EditProfile
          user={ user }
          onChangeFirstName={
            (value) => this.onChangeFirstName(value)
          }
          onChangeLastName={
            (value) => this.onChangeLastName(value)
          }
          onChangeImageUrl={
            (value) => this.onChangeImageUrl(value)
          }
        />
      </div>
    );
  }
}

export default App;
