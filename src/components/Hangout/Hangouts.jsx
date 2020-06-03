import React, {Component} from 'react';
import styles from "./css/hangouts.module.css"
import FormDrawer from "./FormDrawer";
import Typography from "@material-ui/core/Typography";
import LinkUpAndPlacesDrawer from "./LinkUpAndPlacesDrawer";

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
                filter: `blur(${this.state.blur}px)`,
            }}
            className={`d-flex flex-column justify-content-center align-items-center ${styles.hangoutsBackground}`}
            >
                <Typography style={this.h4Styles} variant="h4">LINKUP & HANGOUT</Typography>
                <Typography style={this.h4Family} variant="h4">WITH FAMILY & FRIENDS</Typography>
                <FormDrawer makeBlur={this.state.makeBlur} />
                <LinkUpAndPlacesDrawer makeBlur={this.state.makeBlur} />
            </div>
        );
    }
}

export default Hangouts;