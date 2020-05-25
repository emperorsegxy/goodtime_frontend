import React from 'react';
import Modal from 'react-responsive-modal';
import { Link } from 'react-router-dom';
import './SignUp.css';
import Image from './images/sign-image.svg';
import Facebook from './images/facebook.svg';
import Google from './images/google.svg';



export default class SignUp extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            open: false,
        }
    }

    onOpenModal = () =>{
        this.setState({open:true})
    }

    onCloseModal = () =>{
        this.setState({open:false})
    }


    render() {
        const {open} = this.state;
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
                            <form method="POST">
                                <div className="form-group">
                                    <label className="label-text">Username</label>
                                    <input className="form-control form-input" type="text" name="" placeholder="goodtimer007" required></input>
                                </div>
                                <div className="form-group">
                                    <label className="label-text">Email Address</label>
                                    <input className="form-control form-input" type="email" name="" placeholder="adeyinka001@gmail.com" required></input>
                                </div>
                                <div className="form-group">
                                    <label className="label-text">Password</label>
                                    <input className="form-control form-input" type="password" name="" placeholder="****************" required></input>
                                </div>
                                <div>
                                    <button className="create-btn" type="submit"><p className="create-btn-text">Create Account</p></button>
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
                {/* </Modal> */}
            </div>
        );
    }
}