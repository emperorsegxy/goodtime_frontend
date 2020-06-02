import React from 'react'
import { ACCESS_TOKEN } from '../../constants'


export default class UserHome extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

            user: {},

        }
    }


    fetchUser = () => {
        // Read the token from the session storage
        // and include it to Authorization header
        const token = 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)

        fetch('http://localhost:8081/user/me',
            {
                headers: { 'Authorization': token }
            })
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    user: responseData,
                });
            })
            .catch(err => console.error(err));
    }

    componentDidMount() {

        this.fetchUser()
    }

    render() {

        return (
            <div>
                <p>Name: {this.state.user.name}</p>
                <p>Email: {this.state.user.emailAddress}</p>
                <p>Phone Number: {this.state.user.phoneNumber}</p>
                <p>Profile Picture<img src={this.state.user.imageUrl}></img></p>
            </div>
        )
    }

}