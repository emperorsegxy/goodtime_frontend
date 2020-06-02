import React from "react";
import myStyles from './games.module.css';
import Typography from "@material-ui/core/Typography";
import {makeStyles, ThemeProvider} from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import { data } from "./APISimulator";
import Paper from "@material-ui/core/Paper";
import {createMuiTheme} from "@material-ui/core";
import {Link} from "react-router-dom";



const Games = () => {

    let theme = createMuiTheme();

    const paper = (src) => {
        return {
            background: `url(${src}`,
        }
    }

    const useStyle = makeStyles(themes => ({
        paperRoot: {
            width: 300,
            height: 300,
            color: '#FFF',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '0 10px 30px 10px',
            cursor: 'pointer',
            transition: 'all .5s ease',
            '&:$hover': {
                transform: 'scale(1.07)',
            }
        },
        gamesGridContainer: {
            overflowX: 'scroll',
            paddingTop: '100px',
            paddingBottom: '150px'
        },
        h3: {
            color: '#FFF',
            lineHeight: '4.5rem',
            fontWeight: 'bold',
            maxWidth: 600,
            [theme.breakpoints.down('sm')]: {
                fontSize: 50,
                lineHeight: '1.167',
            }
        },
        h6: {
            color: '#FFF',
        }
    }));


    const classes = useStyle();

    return (
        <div className={myStyles.container}
             style={{
                 backgroundImage: `url(${require('./images/crwd-bg.png')})`,
                 backgroundPosition: 'center',
                 backgroundSize: 'cover',
                 backgroundRepeat: 'no-repeat',
             }}
        >
            <div className={`${myStyles.showcase}`}>
                <div className="container h-100 w-100 d-flex justify-content-around flex-column pt-4 pb-5">
                    <div className={`${myStyles.backLink} d-flex justify-content-end`}>
                        <a href="#">Back Home</a>
                    </div>
                    <div className="h-100 d-flex align-items-center">
                            <Typography variant="h3" className={classes.h3}>
                                MILLIONS OF ONLINE GAMES ON YOUR RADAR
                            </Typography>
                    </div>
                </div>
            </div>
            <div className={`${myStyles.update}`}>
                <div className="container pt-5">
                        <Typography gutterBottom variant="h6" className={classes.h6}>
                            LATEST UPDATE
                        </Typography>
                    <hr className={myStyles.hr} />
                    <Grid container wrap="nowrap" spacing={7} className={classes.gamesGridContainer}>
                        {data.map((res, index) => {
                            return (<Grid item key={index}>
                                <Link to="/gamesView">
                                    <Paper style={paper(res.imgSrc)} square className={classes.paperRoot}>
                                        <Typography variant="h5">
                                            {res.title}
                                        </Typography>
                                        <Typography variant="subtitle2" style={{opacity: .36,}}>
                                            Services and issue tracking down no High page performance improvements in Blocks are loaded
                                        </Typography>
                                    </Paper>
                                </Link>
                            </Grid>)
                        })}
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default Games;