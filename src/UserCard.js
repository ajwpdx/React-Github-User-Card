import React from 'react'

class UserCard extends React.Component {


    render() {
        console.log(this.props)
        return (
            <div className={this.props.user.hireable ? "hireable user-card card" : 'user-card card'}>
                <img src= {this.props.user.avatar_url}/>
                <div className='card-info'>
                    <h3 className='name'>{this.props.user.name}</h3>
                    <p className='username'>{this.props.user.login}</p>
                    <p>Location: {this.props.user.location}</p>
                    <p>Profile: {this.props.user.html_url}</p>
                    <p>Followers: {this.props.user.followers}</p>
                    <p>Following: {this.props.user.following}</p>
                    <p>{this.props.user.bio}</p>
                </div>

            </div>

        )
    }
}

export default UserCard