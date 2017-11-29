import React, { Component } from 'react'
import './App.css'
import ShowProfile from './components/ShowProfile'
import EditProfile from './components/EditProfile'
import Button from './components/Button'

class App extends Component {
  state = {
    user: {
      firstName: 'Perry',
      lastName: 'Perkins',
      profileImageURL: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    editMode: false
  }

  onChangeFirstName = value => {
    // Get the <input> (an HTMLInputElement)
    // const input = value
    // Get the current inputted text from the field
    // const newFirstName = value
    // Make changes to the state
    this.setState(prevState => {
      const user = prevState.user
      // Create copy of user with new first name
      user.firstName = value
      return {
        // this.state.user will be updated
        user: user
      }
    })
  }

  onChangeLastName = value => {
    // Make changes to the state
    this.setState(prevState => {
      const user = prevState.user
      // Create copy of user with new first name
      user.lastName = value
      return {
        // this.state.user will be updated
        user: user
      }
    })
  }

  onChangeImageUrl = value => {
    // Make changes to the state
    this.setState(prevState => {
      const user = prevState.user
      // Create copy of user with new first name
      user.profileImageURL = value
      return {
        // this.state.user will be updated
        user: user
      }
    })
  }

  onToggleMode = () => {
    this.setState(prevState => {
      const editMode = prevState.editMode
      // editMode = !editMode
      return {
        editMode: !editMode
      }
    })
  }

  getRandomPhoto = () => {
    console.log('Get random photo...')
    const url = 'https://randomuser.me/api/'
    fetch(url)
      .then(res => {
        return res.json()
      })
      .then(json => {
        const profilePhoto = json.results[0].picture.large
        this.setState(prevState => {
          const user = prevState.user
          user.profileImageURL = profilePhoto
          return {
            user: user
          }
        })
      })
  }

  render() {
    const user = this.state.user
    const editMode = this.state.editMode
    const buttonTitle = editMode ? 'Show Profile' : 'Edit Profile'

    return (
      <div className="App">
        <h1>React Profile Editor</h1>
        <ShowProfile user={user} visible={!editMode} />
        <EditProfile
          user={user}
          visible={editMode}
          onChangeFirstName={value => this.onChangeFirstName(value)}
          onChangeLastName={value => this.onChangeLastName(value)}
          onChangeImageUrl={value => this.onChangeImageUrl(value)}
        />
        <br />
        <Button title={buttonTitle} onButtonClick={() => this.onToggleMode()} />
        <Button
          title="Random Photo"
          onButtonClick={() => this.getRandomPhoto()}
        />
      </div>
    )
  }
}

export default App
