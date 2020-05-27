import React from 'react';
import '../../css/places.css';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(10),
      width: theme.spacing(70),
      height: theme.spacing(70),
      marginLeft: 400,
      background: '#000000',
      opacity: 0.8,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  },
}));



const PlaceModal = () => {
  const classes = useStyles();

    
    return(
        <div>

         

        <div className="bg"
        style={{
          backgroundImage: `url(${require('../../images/expImg.svg')})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
    <div className={classes.root}>
      <Paper variant="outlined" square>
        <h3 className="expModalText">Explore Places</h3>
        <div className="d-flex flex-row justify-content-start form">
        <form>
          <div class="form-group togo">
          <p className="loveto">Where Would You Love To Go</p>
          {/* <label className="loveto" for="exampleInputEmail1">Where Would You Love To Go</label> */}
          <input type="text" class="form-control dest-form" id="exampleInputText" aria-describedby="textHelp" placeholder="Enter Destination"></input>
        </div>
        <div class="form-group togowith">
          <p className="loveto">Where Would You Like To Go With</p>
          <div class="search_categories">
            <div class="select">
              <select name="search_categories" id="search_categories">
                <option value="1" selected="selected">Happy</option>
                <option value="2">Great</option>
                <option value="3">Nice Solution</option>
                <option value="4">Awesome</option>
              </select>
          </div>
          </div>
        </div>
        <div class="form-group togowith">
          <p className="loveto">Where Should We Connect You With</p>
          <div class="search_categories">
            <div class="select">
              <select name="search_categories" id="search_categories">
                <option value="1" selected="selected">Male</option>
                <option value="2">Female</option>
              </select>
          </div>
          </div>
        </div>
        </form>
        </div>
        <div className="d-flex partner-btn justify-content-start">
                <button className="get-btn">get me in</button>
            </div> 
      </Paper>
      </div>
      </div>
      </div>

    );
}

export default PlaceModal