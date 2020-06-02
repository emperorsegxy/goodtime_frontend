import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Login.css';
import Image from './images/login-image.svg';
import Facebook from './images/facebook.svg';
import Google from './images/google.svg';
import Alert from 'react-s-alert';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, ACCESS_TOKEN , API_BASE_URL} from '../../constants';


export default class Login extends React.Component {
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
                    pathname: "/",
                    state: { from: this.props.location }
                }} />;
        }

        return (
            <div>
                <LoginForm />
            </div>
        );
    }
}
class LoginForm extends React.Component {

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
                errors: ''

            }
        );
    }

    login = (event) => {
        event.preventDefault()
        this.setState({ loading: true })
        const user = { email: this.state.email, password: this.state.password };
        fetch(API_BASE_URL+'/auth/login', {

            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(user),

        })
            .then(res => res.json())
            .then((response) => {
                if (response.accessToken !== undefined) {
                    localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                    this.setState({ isAuthenticated: true })
                }
                if (response.message !== undefined) {
                    this.setState({ errors: response.message })
                }

            })
            .catch(errors => console.error(errors))
    }


    render() {
        if (localStorage.getItem(ACCESS_TOKEN) !== null || this.state.isAuthenticated) {
            return <Redirect to="/userhome" />
        }
        return (
            <div className="container">
                <div className="container-fluid">
                    <div className="form-size">
                        <div className="row">
                            <div className="col">
                                <Link to={"/register"}><p class="alignleft">Sign-up</p></Link>
                                <Link to={"/login"}><p class="alignright">Sign-in</p></Link>
                            </div>
                        </div>
                        <div>
                            <form onSubmit={this.login}>
                                <div className="form-group">
                                    <label className="form-control">Email</label>
                                    <input type="email" name="email" className="form-control form-input" placeholder="Email" onChange={this.handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label className="label-text">Password</label>
                                    <input type="password" name="password" className="form-control form-input" placeholder="**************" onChange={this.handleChange} required />
                                </div>
                                <div>
                                <button className="create-btn" type="submit"><p className="create-btn-text">Log In</p></button>
                                <p style={{ color: "red" }}>{this.state.errors}</p>
                            </div>
                            </form>
                          
                            <div className="text">
                                <p>or Login with?</p>
                            </div>
                            <div className="icons">
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item">
                                        <a href={FACEBOOK_AUTH_URL}><img className="" src={Facebook} alt="..." width="30x" height="30px"></img> Facebook</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href={GOOGLE_AUTH_URL}><img className="" src={Google} alt="..." width="30px" height="30px"></img>Google</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

