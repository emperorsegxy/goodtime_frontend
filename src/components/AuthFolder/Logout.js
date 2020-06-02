import React from 'react'
import {Redirect} from 'react-router-dom'
import {ACCESS_TOKEN} from '../../constants'
import Alert from 'react-s-alert';


export default class Logout extends React.Component{

    componentDidMount(){

        localStorage.removeItem(ACCESS_TOKEN)
    }

    render(){

        return (
            <>

            {Alert.success("Logged out Successfully")}
            <Redirect to="/login"/>
            </>
        )
    }

}