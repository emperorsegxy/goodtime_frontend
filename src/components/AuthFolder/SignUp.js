import React from 'react';
import Modal from 'react-responsive-modal';
import { Link } from 'react-router-dom';
import './SignUp.css';
import Image from './images/sign-image.svg';
import Facebook from './images/facebook.svg';
import Google from './images/google.svg';
import { ACCESS_TOKEN, API_BASE_URL } from '../../constants'
import Alert from 'react-s-alert';




export default class SignUp extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            open: false,
            email: '',
            username: '',
            password: '',
            name: '',
            error: ''
        }
    }

    handleChange = (event) => {

        this.setState(
            {
                [event.target.name]: event.target.value,
                error: ''

            }
        );
    }

    register = (event) => {
        event.preventDefault()
        const data = { email: this.state.email, password: this.state.password, username: this.state.username, name: this.state.name };
        fetch(API_BASE_URL + '/register', {

            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(data),

        })
            .then(res => res.json())
            .then((response) => {
                console.log(response)

                if (response.error !== null) {
                    this.setState({ error: response.error })
                }
            })
            .catch(errors => console.error(errors))
    }

    onOpenModal = () => {
        this.setState({ open: true })
    }

    onCloseModal = () => {
        this.setState({ open: false })
    }


    render() {
        const { open } = this.state;
        return (

            <div>
                {/* <button onClick={this.onOpenModal} className="btn btn-primary">Sign Up</button>
                <Modal open={open} onClose={this.onCloseModal}> */}
                <div className="container">
                    <div className="row">
                    </div>
                    <div className="container-fluid">
                        <div className="form-size">

                            <div className="row">
                                <div className="col">
                                    <Link to={"/register"}><p class="alignleft-sign">Sign-up</p></Link>
                                    <Link to={"/login"}><p class="alignright-sign">Sign-in</p></Link>
                                </div>
                            </div>
                            <div>
                                <form onSubmit={this.register}>
                                    <div className="form-group">
                                        <label className="label-text">Username</label>
                                        <input className="form-control form-input" type="text" name="username" placeholder="goodtimer007" required onChange={this.handleChange}></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="label-text">Email Address</label>
                                        <input className="form-control form-input" type="email" name="email" placeholder="adeyinka001@gmail.com" required onChange={this.handleChange}></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="label-text">Name</label>
                                        <input className="form-control form-input" type="text" name="name" placeholder="Adeyinka" required onChange={this.handleChange}></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="label-text">Password</label>
                                        <input className="form-control form-input" type="password" name="password" placeholder="****************" required onChange={this.handleChange}></input>
                                    </div>
                                    <div>
                                        <button className="create-btn" type="submit"><p className="create-btn-text">Create Account</p></button>
                                        <p style={{color:"red"}}>{this.state.error}</p>
                                    </div>

                                </form>
                                <div className="text">
                                    <p>or Login with?</p>
                                </div>
                                <div className="icons">
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item">
                                            <Link to="/login"><img className="" src={Facebook} alt="..." width="30x" height="30px"></img> Facebook</Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="/login"><img className="" src={Google} alt="..." width="30px" height="30px"></img>Google</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </Modal> */}
            </div>
        );
    }
}