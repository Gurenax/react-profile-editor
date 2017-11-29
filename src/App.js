import React, { Component } from 'react'
import './App.css'
import ShowProfile from './components/ShowProfile'
import EditProfile from './components/EditProfile'
import Button from './components/Button'

const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const capitalizeFirstLetterOfEveryWord = string => {
  return string
    .split(' ')
    .map(word => {
      return capitalizeFirstLetter(word)
    })
    .join(' ')
}

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

  getRandomProfile = () => {
    console.log('Get random photo...')
    const url = 'https://randomuser.me/api/'
    fetch(url)
      .then(res => {
        return res.json()
      })
      .then(json => {
        const randomPhoto = json.results[0].picture.large
        const randomFirstName = capitalizeFirstLetterOfEveryWord(
          json.results[0].name.first
        )
        const randomLastName = capitalizeFirstLetterOfEveryWord(
          json.results[0].name.last
        )
        this.setState(prevState => {
          const user = prevState.user
          user.profileImageURL = randomPhoto
          user.firstName = randomFirstName
          user.lastName = randomLastName
          return {
            user: user
          }
        })
      })
  }

  render() {
    // const user = this.state.user
    // const editMode = this.state.editMode
    const { user, editMode } = this.state // Refactor: destructure state
    const buttonTitle = editMode ? 'Show Profile' : 'Edit Profile'

    return (
      <div className="App">
        <h1>React Profile Editor</h1>
        <ShowProfile user={user} visible={!editMode} />
        <EditProfile
          user={user}
          visible={editMode}
          onChangeFirstName={this.onChangeFirstName} // Short hand for (value) => this.onChangeFirstName(value)
          onChangeLastName={this.onChangeLastName} // Short hand for (value) => this.onChangeLastName(value)
          onChangeImageUrl={this.onChangeImageUrl} // Short hand for (value) => this.onChangeImageUrl(value)
        />
        <br />
        <Button
          title={buttonTitle}
          onButtonClick={this.onToggleMode} // Short hand for () => this.onToggleMode()
        />
        <Button
          title="Random Profile"
          onButtonClick={this.getRandomProfile} // Short hand for () => this.getRandomProfile()
        />
      </div>
    )
  }
}

export default App
