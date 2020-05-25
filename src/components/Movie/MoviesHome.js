import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import './movie-home.css';
import Logo from './images/logo2.svg';
import Ellipse1 from './images/Ellipse 8.png';
import Ellipse2 from './images/Ellipse 10.png';
import Ellipse4 from './images/Ellipse 11.png';
import Ellipse5 from './images/Ellipse 16.png';
import Ellipse6 from './images/Ellipse 17.png';




export default class MoviesHome extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <div className="background-img">
                <div className="container">
                    <div className="row">
                        <Link to={"/home"}><img className="logo" src={Logo} alt="logo"></img></Link>
                        <img className="ellipse3" src={Ellipse2} alt="ellipse8"></img>
                        <img className="ellipse2" src={Ellipse5} alt="ellipse8"></img>
                        <img className="ellipse1" src={Ellipse1} alt="ellipse8"></img>
                        <Link className="back-movie" to={"/home"}>Back</Link>
                    </div>
                    <div className="container">
                        <div>
                            <p className="top-text-home">While you are isolating</p>
                            <img className="ellipse4" src={Ellipse4} alt="ellipse8"></img>
                            <p className="main-text-home">SEARCH & SHARE HIGH CLASS MOVIES FROM ANYWHERE</p>
                        </div>
                        <div style={{textAlign:"center"}}>
                            <Link to={"/movie-list"}><button className="btn-home">View Movies</button></Link>
                        </div>
                        
                        <img className="ellipse6" src={Ellipse6} alt="ellipse8"></img>
                        <img className="ellipse5" src={Ellipse5} alt="ellipse8"></img>
                    </div>
                </div>
                
            </div>
        );
    }
} 
