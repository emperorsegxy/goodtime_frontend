import React from 'react';
import Logo from '../../images/logo.svg';
import Games from '../../images/games.svg'
import Music from '../../images/music.svg';
import Places from '../../images/explore.svg';
import RedCircle from '../../images/circ3.svg';
import BlueCircle from '../../images/circ1.svg';
import GreenCircle from '../../images/circ2.svg';
import YellowCircle from '../../images/circ4.svg';
import SmallCircle from '../../images/circ5.svg';
import Hangout from '../../images/hangout.svg';
import '../../css/home.css';

const home = () => {
    return(
        <div className="container-fluid">
            {/* <div className="d-flex flex-row"> */}
            <img className="good-logo" src={Logo} alt="..." width="178px" height="78px"></img>
            <div className="d-flex flex-row justify-content-center">
                <img className="games-img" src={Games} alt="..."></img>
            {/* </div> */}
            </div>
            <div className="d-flex flex-row justify-content-end">
                <img className="music-img" src={Music} alt="..."></img>
            </div>
            <div className="d-flex flex-row justify-content-start">
                <img className="circle2" src={GreenCircle} alt="..."></img>
            </div>
            <div className="d-flex flex-row justify-content-start">
                <img className="circle4" src={YellowCircle} alt="..."></img>
            </div>
            <div className="catchy">
            <p className="enjoy-text">Explore the good life</p>
            <p className="enjoy-text1">Enjoy with good time</p>
            </div>
            <div className="d-flex flex-row justify-content-start">
                <img className="places-img" src={Places} alt="..."></img>
            </div>
            <div className="d-flex flex-row justify-content-end align-items-end">
                <img className="circle3" src={RedCircle} alt="..."></img>
            </div>
            <div className="d-flex flex-row justify-content-end align-items-end">
                <img className="circle1" src={BlueCircle} alt="..."></img>
            </div>
            <div className="d-flex flex-row justify-content-start align-items-start">
                <img className="circle5" src={SmallCircle} alt="..."></img>
            </div>
            <div className="d-flex flex-row justify-content-end align-items-end">
                <img className="hangout" src={Hangout} alt="..."></img>
            </div>
        </div>
    );
}

export default home;