import React, { Component } from 'react';
import './Login.css';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, ACCESS_TOKEN } from '../../constants';
import { Link, Redirect } from 'react-router-dom'
import fbLogo from '../../images/fb-logo.png';
import googleLogo from '../../images/google-logo.png';
import Alert from 'react-s-alert';

class Login extends Component {
    componentDidMount() {
        // If the OAuth2 login encounters an error, the user is redirected to the /login page with an error.
        // Here we display the error and then remove the error query parameter from the location.
        if (this.props.location.state && this.props.location.state.error) {
            setTimeout(() => {
                Alert.error(this.props.location.state.error, {
                    timeout: 5000
                });
                this.props.history.replace({
                    pathname: this.props.location.pathname,
                    state: {}
                });
            }, 100);
        }
    }

    render() {
        if (this.props.authenticated) {
            return <Redirect
                to={{
                    pathname: "/home",
                    state: { from: this.props.location }
                }} />;
        }

        return (
            <div className="login-container">
                <div className="login-content">
                    <h1 className="login-title">Login to SpringSocial</h1>
                    <SocialLogin />
                    <div className="or-separator">
                        <span className="or-text">OR</span>
                    </div>
                    <LoginForm {...this.props} />
                    <span className="signup-link">New user? <Link to="/signup">Sign up!</Link></span>
                </div>
            </div>
        );
    }
}

class SocialLogin extends Component {
    render() {
        return (
            <div className="social-login">
                <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
                    <img src={googleLogo} alt="Google" /> Log in with Google</a>
                <a className="btn btn-block social-btn facebook" href={FACEBOOK_AUTH_URL}>
                    <img src={fbLogo} alt="Facebook" /> Log in with Facebook</a>
            </div>
        );
    }
}


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loading: true,
            errors: '',
            isAuthenticated: false
        };
    }

    handleChange = (event) => {

        this.setState(
            {
                [event.target.name]: event.target.value,

            }
        );
    }

    login = () => {
        this.setState({ loading: true })
        const user = { email: this.state.email, password:this.state.password };
        fetch('http://localhost:5000/auth/login', {

            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(user),

        })
            .then(res => res.json())
            .then((response) => {

                localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                this.setState({ isAuthenticated: true })
                Alert.success("You're successfully logged in!");

            })
            .catch(errors => console.error(errors))
    }

    render() {

        if (localStorage.getItem(ACCESS_TOKEN) !== null || this.state.isAuthenticated) {
            return <Redirect to="/home" />
}
        return (
            <div>
            <form>
                <div className="form-item">
                    <input type="email" name="email"
                        className="form-control" placeholder="Email"
                        onChange={this.handleChange} required />
                </div>
                <div className="form-item">
                    <input type="password" name="password"
                        className="form-control" placeholder="Password"
                        onChange={this.handleChange} required />
                </div>
            </form>
              <div className="form-item">
              <button onClick={this.login} className="btn btn-block btn-primary">Login</button>
          </div>
          </div>
        );
    }
}

export default Login
