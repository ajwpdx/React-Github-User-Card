import React from 'react'

class UserCard extends React.Component {


    render() {
        console.log(this.props)
        return (
            <div className='user-card card'>
                <img>{this.props.user.avatar_URL}g</img>
                <p>{this.props.user.login}</p>
            </div>

        )
    }
}

export default UserCard