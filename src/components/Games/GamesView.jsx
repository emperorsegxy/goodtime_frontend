import React from "react";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import styles from "./games.module.css";
import {makeStyles} from "@material-ui/styles";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles({
    h4: {
        color: '#FFF',
        fontSize: 58,
        fontWeight: 'bold',
        paddingBottom: 50,
    },
    subtitle2: {
        color: '#FFF',
        fontSize: 20,
        maxWidth: 600,
        fontWeight: '300',
    },
    copyLink: {
        border: '1px solid #FFD13C',
        background: 'transparent',
        color: '#FFF',
        width: 200,
        marginBottom: 20,
    },
    shareLink: {
        border: '1px solid #FE7603',
        background: '#C6990A',
        color: '#FFF',
        width: 200,
        marginBottom: 20,
        '&:$hover': {
            background: '#C6990A',
            opacity: .78,
        }
    }
});

const GamesView = (props) => {

    const classes = useStyles();

    const copyLink = (e) => {
        console.log(window.location.href);
    }

    return (
        <div
            // style={{
            //     backgroundImage: `url(${require('./images/gamesAdv.png')})`,
            //     backgroundPosition: 'center',
            //     backgroundSize: 'cover',
            //     backgroundRepeat: 'no-repeat',
            //     height: '100%',
            // }}
            className={styles.gamesViewBackground}
        >
            <div className="container pt-5 h-100 d-flex flex-column">
                <div><Link to='/games' href="#">Back Home</Link></div>
                <div className={styles.gamesViewText}>
                    <Typography variant="h4" className={classes.h4}>
                        WAR SHIP RELOADED
                    </Typography>
                    <Typography variant="subtitle2" className={classes.subtitle2}>
                        Elite Lifestyles transfer the appropriate use of exclusions with regard for better
                        positive and quality assurance that defines which they become available
                    </Typography>
                    <div className={styles.actionBtns}>
                        <Button className={classes.copyLink} onClick={copyLink}>Copy Game Link</Button>
                        <Button className={classes.shareLink}>Share With Friends</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GamesView;