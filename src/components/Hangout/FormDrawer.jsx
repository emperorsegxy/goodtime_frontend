import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import styles from './css/hangouts.module.css';
import './css/material.css';
import theme from './theme';
import Button from "@material-ui/core/Button";
import {SwipeableDrawer} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const StyledButton = withStyles({
    root: {
        background: 'rgba(0, 0, 0, 0.59)',
        padding: '8px 40px !important',
        borderRadius: 0,
        border: '2px solid rgba(0, 0, 0, 0.59)',
        marginTop: 20,
        color: 'white',
        textDecoration: 'underline',
        outline: 'none !important',
        transition: 'all 0.5s ease-in',
        '&:$hover': {
            color: '#fafafa',
        }
    },
})(Button);

const FormDrawer = (props) => {

    const useStyles = makeStyles((theme) => ({
        button: {
            width: '100%',
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        root: {
            height: '100%',
            paddingTop: 50,
        }
    }));
    const [open, setOpen] = React.useState(false);
    const [age, setAge] = React.useState(0);
    const [currentRegion, setCurrentRegion] = React.useState("");
    const [currentForm, setCurrentForm] = React.useState("LINK_UP");

    const toggleDrawer = (open) => (e) => {
        open === true ? props.makeBlur(5) : props.makeBlur(0);
        setOpen(open);
    }
    const classes = useStyles();

    const handleChange = (e) => {
        setAge(e.target.value);
    }

    const handleSelect = (e) => {
        setCurrentRegion(e.target.value);
    }

    const handleLinkUp = (e) => {
        setCurrentForm('LINK_UP');
    }

    const handleHangout = (e) => {
        setCurrentForm('HANGOUT');
    }

    const returnForm1 = () => {
        return (<form className={`${styles.form1} d-flex flex-column justify-content-around`}>
            <div className={styles.name}>
                <label htmlFor="name" className={styles.label}>
                    Your Name
                </label>
                <input id="name" placeholder="Sarah Inubi" className="d-block w-100" />
            </div>
            <div className={styles.gender}>
                <label htmlFor="name" className={styles.label}>
                    Who Should We Connect You With
                </label>
                <select className="d-block w-100">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </select>
            </div>
            <div className={styles.region}>
                <label htmlFor="name" className="d-block">
                    Current Region
                </label>
                <select className="d-block w-100">
                    <option>Lagos</option>
                    <option>Abuja</option>
                    <option>Other</option>
                </select>
            </div>
            <Button className={classes.button}>Get me in</Button>
        </form>);
    }

    const returnForm2 = () => {
        return (<form className={`${styles.form1} d-flex flex-column justify-content-around`}>
            <div className={styles.name}>
                <label htmlFor="name" className={styles.label}>
                    Choose A Location
                </label>
                <input id="name" placeholder="Sarah Inubi" className="d-block w-100" />
            </div>
            <div className={styles.gender}>
                <label htmlFor="name" className={styles.label}>
                    Who Do You Want To Go With
                </label>
                <select className="d-block w-100">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </select>
            </div>
            <div className={styles.region}>
                <label htmlFor="name" className="d-block">
                    Describe The Experience You Want
                </label>
                <select className="d-block w-100">
                    <option>Lagos</option>
                    <option>Abuja</option>
                    <option>Other</option>
                </select>
            </div>
            <Button className={classes.button}>Get me in</Button>
        </form>);
    }

    const form = () => (
        <div role="presentation" className="h-100 pt-5 overflow-hidden">
            <div className={styles.formTitle}>
                <h5 onClick={handleLinkUp} style={currentForm === 'LINK_UP' ? {opacity: 1} : {opacity: .2}}>LinkUp</h5>
                <h5 onClick={handleHangout} style={currentForm === 'LINK_UP' ? {opacity: .2} : {opacity: 1}}>Hangout</h5>
            </div>
            {currentForm === 'LINK_UP' ? returnForm1() : returnForm2()}
        </div>
    );

    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <StyledButton onClick={toggleDrawer(true)}>
                    GET STARTED
                </StyledButton>
                <SwipeableDrawer anchor='bottom' onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)} open={open}>
                    {form()}
                </SwipeableDrawer>
            </ThemeProvider>
        </React.Fragment>
    )


}

export default FormDrawer;