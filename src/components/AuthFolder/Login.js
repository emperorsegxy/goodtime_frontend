import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Image from './images/login-image.svg';
import Facebook from './images/facebook.svg';
import Google from './images/google.svg';


export default class Login extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {

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
                        <form method="POST">
                            <div className="form-group">
                                <label className="">Username</label>
                                <input className="form-control form-input" type="text" name="" placeholder="JoeB" required></input>
                            </div>
                            <div className="form-group">
                                <label className="label-text">Password</label>
                                <input className="form-control form-input" type="password" name="" placeholder="**************" required></input>
                            </div>
                            <div>
                                <button className="create-btn" type="submit"><p className="create-btn-text">Log In</p></button>
                            </div>
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
                        </form>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

