import React from 'react';
import UserCard from './UserCard'
import FollowersCard from './FollowersCard'
import FollowingCard from './FollowingCard'
import UserLookup from './UserLookup'
import axios from 'axios';


class App extends React.Component {
  constructor() {
    super()
    this.state ={ 
      user: {},
      followers: [],
      following: [],
      username: "ajwpdx"
    }
  }

  changeUser = (user) => {
    this.setState({
      username: user
    })
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.state.username}`)
      .then( res => {
        console.log('got data', res.data)
        this.setState({
          user: res.data
        })
        
      })
      .catch( err => {
        console.log('error')
      })
  
      axios
      .get(`https://api.github.com/users/${this.state.username}/followers`)
      .then( res => {
        console.log('followers >',res.data)  
        this.setState({
          followers: res.data
        })
      })

      axios
      .get(`https://api.github.com/users/${this.state.username}/following`)
      .then( res => {
        console.log('following >',res.data)  
        this.setState({
          following: res.data
        })
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.username !== this.state.username) {
      axios
      .get(`https://api.github.com/users/${this.state.username}`)
      .then( res => {
        console.log('got data', res.data)
        this.setState({
          user: res.data
        })
        
      })
      .catch( err => {
        console.log('error')
      })
  
      axios
      .get(`https://api.github.com/users/${this.state.username}/followers`)
      .then( res => {
        console.log('followers >',res.data)  
        this.setState({
          followers: res.data
        })
      })

      axios
      .get(`https://api.github.com/users/${this.state.username}/following`)
      .then( res => {
        console.log('following >',res.data)  
        this.setState({
          following: res.data
        })
      })
    }
  }

  render() {
    console.log('within App >', this.state.user)
    console.log('username >', this.state.username)
    return (
      <div className="App container">
        <div className="header">
          <img src="https://pngimg.com/uploads/github/github_PNG15.png" alt="GitHub Logo" />
        </div>
        <UserLookup
          changeUser={this.changeUser}
        />
        <div className='card-container'>
        <h2>User</h2>
        <UserCard 
          user = {this.state.user}
        />
        </div>
       
        <div className='follow-container'>
        <div className='card-container'>
        <h2>Followers</h2>
        {this.state.followers.map(item => (
          <FollowersCard
          followerUsername = {item.login}
          key = {item.login}
        />
        ))}
        </div>

        <div className='card-container'>
        <h2>Following</h2>
        {this.state.following.map(item => (
          <FollowingCard
          followingUsername = {item.login}
          key = {item.login}
        />
        ))}
        </div>
        </div>
      </div>
    );
  }
}

export default App;
