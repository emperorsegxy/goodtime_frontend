import React, {useState} from "react";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import theme from "./theme";
import Button from "@material-ui/core/Button";
import {SwipeableDrawer, withStyles} from "@material-ui/core";
import styles from "./css/hangouts.module.css";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

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


const useStyles = makeStyles({
    root: {
        width: '90%',
        margin: '0 auto',
        [theme.breakpoints.up('sm')]: {
            width: '70%',
        },
        paddingBottom: 80,
    },
    textBox: {
        marginRight: '100px',
    },
    gridPadding: {
        padding: `30px 0`,
    },
    nameStyle: {
        color: '#FFF',
        fontWeight: 'bold',
        [theme.breakpoints.up('md')]: {
            fontSize: 20,
        }
    },
    connectButton: {
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            marginTop: 30,
        }
    },
    nextButton: {
        width: 210,
        textAlign: "center",
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    header: {
        cursor: 'pointer',
    }
});

const LinkUpAndPlacesDrawer = (props) => {

    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [currentForm, setCurrentForm] = useState("LINK_UP");

    const toggleDrawer = (open) => (e) => {
        open === true ? props.makeBlur(5) : props.makeBlur(0);
        setOpen(open);
    }

    const handleLinkUp = (e) => {
        setCurrentForm('LINK_UP');
    }

    const handlePlaces = (e) => {
        setCurrentForm('PLACES');
    }

    const demoData = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const returnLinkUp = () => {
        return (
            <Box style={{height: '100%', overflowY: 'scroll',}}>
                <Box className={classes.root}>
                    {demoData.map((grid, index) => {
                        return (
                            <Grid container spacing={0} key={index} className={classes.gridPadding} alignItems="center">
                                <Grid item xs={2} md={2}>
                                    <Avatar>A</Avatar>
                                </Grid>
                                <Grid item xs={10} md={6}>
                                    <Typography variant="subtitle1" className={classes.nameStyle}>Emmanuel Fredson</Typography>
                                    <small>Lagos, Nigeria</small>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Button className={classes.connectButton}>CONNECT</Button>
                                </Grid>
                            </Grid>
                        );
                    })}
                    <div className="d-flex justify-content-center py-3">
                        <Button className={classes.nextButton}>Next</Button>
                    </div>
                </Box>
            </Box>
        )
    }

    const returnPlaces = () => {
        return (
            <Box style={{height: '100%', overflowY: 'scroll',}}>
                <Box className={classes.root}>
                    {demoData.map((grid, index) => {
                        return (
                            <Grid container spacing={0} key={index} className={classes.gridPadding} alignItems="center">
                                <Grid item xs={2} md={2}>
                                    <Avatar>B</Avatar>
                                </Grid>
                                <Grid item xs={10} md={6}>
                                    <Typography variant="subtitle1" className={classes.nameStyle}>Chop Life Spot</Typography>
                                    <small>Mon-Sunday || 9:00am-11:00pm</small>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Button className={classes.connectButton}>COPY LINK</Button>
                                </Grid>
                            </Grid>
                        );
                    })}
                    <div className="d-flex justify-content-center py-3">
                        <Button className={classes.nextButton}>Next</Button>
                    </div>
                </Box>
            </Box>
        )
    }


    const linkUpAndPlaces = () => (
        <div role="presentation" className="h-100 pt-5 overflow-hidden">
            <div className={styles.linkUpHeader}>
                <h5 onClick={handleLinkUp} className={classes.header} style={currentForm === 'LINK_UP' ? {opacity: 1} : {opacity: .2}}>View LinkUp</h5>
                <h5 onClick={handlePlaces} className={classes.header} style={currentForm === 'LINK_UP' ? {opacity: .2} : {opacity: 1}}>View Places</h5>
            </div>
            {currentForm === 'LINK_UP' ? returnLinkUp() :
                returnPlaces()
            }
        </div>
    );

    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <StyledButton onClick={toggleDrawer(true)}>
                    Already a member?
                </StyledButton>
                <SwipeableDrawer anchor='bottom' onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)} open={open}>
                    {linkUpAndPlaces()}
                </SwipeableDrawer>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default LinkUpAndPlacesDrawer;