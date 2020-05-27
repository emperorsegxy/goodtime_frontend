import React from 'react';
import '../../css/places.css';
import Logo from '../../images/logo2.svg';
import RedCircle from '../../images/circ3.svg';
import BlueCircle from '../../images/circ1.svg';
import GreenCircle from '../../images/circ2.svg';
import YellowCircle from '../../images/circ4.svg';
import PurpleCircle from '../../images/circ6.svg';
import OrangeCircle from '../../images/circ9.svg';
import PlaceModal from './PlacesModal';

const places = () => {
    return(
        <div className="bg"
        style={{
          backgroundImage: `url(${require('../../images/expImg.svg')})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container-fluid">
           <div>
             <img className="good-white" src={Logo} alt="..." width="178px" height="78px"></img>
           </div>  
           <div className="d-flex flex-row justify-content-center">
            <p className="catchy2">Explore millions of <br/> places in Nigeria</p>
            </div> 
            {/* <label class="places-link"></label> */}
            <a href="/explore-places-category" className="terms">Get me started</a>
              <div className="d-flex flex-row justify-content-start">
                <img className="circle2" src={GreenCircle} alt="..."></img>
            </div>
            <div className="d-flex flex-row justify-content-start">
                <img className="circle4" src={YellowCircle} alt="..."></img>
            </div>
            <div className="d-flex flex-row justify-content-end align-items-end">
                <img className="circle6" src={PurpleCircle} alt="..."></img>
            </div>
            <div className="d-flex flex-row justify-content-end align-items-end">
                <img className="circle3" src={RedCircle} alt="..."></img>
            </div>
            <div className="d-flex flex-row justify-content-end align-items-end">
                <img className="circle1" src={BlueCircle} alt="..."></img>
                <img className="circle9" src={OrangeCircle} alt="..."></img>
            </div>
            {/* <p className="places-link"><PlacesModal/></p> */}
        </div>
        </div>
    );
}

export default places;