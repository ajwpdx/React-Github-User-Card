import React from 'react'
import axios from 'axios'

class FollowingCard extends React.Component {
    constructor() {
        super()
        this.state = {
            follower: {}
        }
    }


    componentDidMount() {

        console.log('followers mount >', this.props)
        axios
        .get(`https://api.github.com/users/${this.props.followingUsername}`)
        .then( res => {
            console.log("follower>",res)
            this.setState({
                follower: res.data
            })
        })
        .catch( err => {

        })
    }

    render() {
        return(
            <div className={this.state.follower.hireable ? "hireable following-card card" : 'following-card card'}>
                <img src= {this.state.follower.avatar_url}/>
                <div className='card-info'>
                    <h3 className='name'>{this.state.follower.name}</h3>
                    <p className='username'>{this.state.follower.login}</p>
                    <p>Location: {this.state.follower.location}</p>
                    <p>Profile: {this.state.follower.html_url}</p>
                    <p>Followers: {this.state.follower.followers}</p>
                    <p>Following: {this.state.follower.following}</p>
                    <p>{this.state.follower.bio}</p>
                </div>

            </div>
        )
    }

}

export default FollowingCard