import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import FormDrawer from "./FormDrawer";
import Typography from "@material-ui/core/Typography";

class Hangouts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            blur: 0,
            makeBlur: this.makeBlur.bind(this),
        }


    }

    makeBlur(value) {
        this.setState({blur: value});
    }

    h4Styles = {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '50px',
        textAlign: 'center'
    }

    h4Family = {
        color: 'white',
        fontSize: '24px',
        fontWeight: 'light',
        textAlign: 'center',
    }



    render() {
        return (
            <div style={{
                background: `url(${require('./images/hangouts.png')}) center center / cover no-repeat`,
                height: '100%',
                filter: `blur(${this.state.blur}px)`,
            }}
            className="d-flex flex-column justify-content-center align-items-center"
            >
                <Typography style={this.h4Styles} variant="h4">LINKUP & HANGOUT</Typography>
                <Typography style={this.h4Family} variant="h4">WITH FAMILY & FRIENDS</Typography>
                <FormDrawer makeBlur={this.state.makeBlur} />
            </div>
        );
    }
}

export default Hangouts;