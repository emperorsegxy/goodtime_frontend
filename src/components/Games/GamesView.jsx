import React from "react";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import styles from "./games.module.css";
import {makeStyles} from "@material-ui/styles";


const useStyles = makeStyles({
    h4: {
        color: '#FFF',
        fontSize: 48,
    },
    subtitle2: {
        color: '#FFF',
        fontSize: 28,
    }
});

const GamesView = (props) => {

    const classes = useStyles();

    return (
        <div
            style={{
                backgroundImage: `url(${require('./images/gamesAdv.png')})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '100%',
            }} className={styles.gamesViewBackground}
        >
            <div className="container pt-5 h-100 d-flex flex-column">
                <div><Link to='/games' href="#">Back home</Link></div>
                <div className={styles.gamesViewText}>
                    <Typography variant="h4" className={classes.h4}>
                        WAR SHIP RELOADED
                    </Typography>
                    <Typography variant="subtitle2" className={classes.subtitle2}>
                        Services and issue tracking down no High page performance improvements in Blocks are loaded
                    </Typography>
                </div>
            </div>
        </div>
    );
}

export default GamesView;