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
}

  render() {
    console.log('within App >', this.state.user)
    return (
      <div className="App container">
        <div className="header">
          <img src="https://pngimg.com/uploads/github/github_PNG15.png" alt="GitHub Logo" />
        </div>
        <UserCard 
          user = {this.state.user}
        />
        {

        }
        <FollowersCard/>
      </div>
    );
  }
}

export default App;
