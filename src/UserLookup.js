import React from 'react'

class UserLookup extends React.Component {

    constructor(){
        super();
        this.state = {
            newUserInput:''
        }
    }

    handleSubmit = e => {
        e.preventDefault()

        console.log(this.state.newUserInput)
        this.props.changeUser(this.state.newUserInput)

        this.setState({
            newUserInput: ''
        })

    }

    handleChange = e => {
        this.setState({
            newUserInput: e.target.value
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input 
                        name='userInput'
                        value={this.state.newUserInput}
                        placeholder='input username'
                        onChange={this.handleChange}
                    />
                </label>
                <button>Get User</button>
            </form>
        )
    }

}

export default UserLookup