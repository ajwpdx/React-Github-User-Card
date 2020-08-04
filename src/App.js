import React from 'react';
import UserCard from './UserCard'
import FollowersCard from './FollowersCard'
import axios from 'axios';


class App extends React.Component {
  constructor() {
    super()
    this.state ={
      
      user: {},
      followers: [],
      userText: ""
    }
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/ajwpdx')
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
      .get('https://api.github.com/users/ajwpdx/followers')
      .then( res => {
        console.log('followers >',res.data)  
        this.setState({
          followers: res.data
        })
      })
    
  
  }


  render() {
    console.log('within App >', this.state.user)
    return (
      <div className="App container">
        <div className="header">
          <img src="https://pngimg.com/uploads/github/github_PNG15.png" alt="GitHub Logo" />
        </div>
        <h2>User</h2>
        <UserCard 
          user = {this.state.user}
        />
        <h2>Followers</h2>
        {this.state.followers.map(item => (
          <FollowersCard
          followerUsername = {this.state.followers.login}
          key = {this.state.followers.login}
        />
        ))}
        
      </div>
    );
  }
}

export default App;
