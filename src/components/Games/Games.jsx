import React from "react";
import myStyles from './games.module.css';
import Typography from "@material-ui/core/Typography";
import {makeStyles, ThemeProvider} from "@material-ui/styles";
import theme from "./theme";
import Grid from "@material-ui/core/Grid";
import { data } from "./APISimulator";
import Paper from "@material-ui/core/Paper";



const Games = () => {

    const paper = (src) => {
        return {
            background: `url(${src}`,
        }
    }

    const useStyle = makeStyles(themes => ({
        paperRoot: {
            width: 300,
            height: 300,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '0 10px 30px 10px',
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
                <div className="container h-100 w-100 d-flex justify-content-around flex-column">
                    <div className={`${myStyles.backLink} d-flex justify-content-end`}>
                        <a href="#">Back Home</a>
                    </div>
                    <div className="h-100 d-flex align-items-center">
                        <ThemeProvider theme={theme}>
                            <Typography variant="h3">
                                MILLIONS OF ONLINE GAMES ON YOUR RADAR
                            </Typography>
                        </ThemeProvider>
                    </div>
                </div>
            </div>
            <div className={`${myStyles.update}`}>
                <div className="container pt-5">
                    <ThemeProvider theme={theme}>
                        <Typography gutterBottom variant="h6">
                            LATEST UPDATE
                        </Typography>
                    </ThemeProvider>
                    <hr className={myStyles.hr} />
                    <Grid container wrap="nowrap" style={{overflowX: 'scroll'}} spacing={7}>
                        {data.map((res, index) => {
                            return (<Grid item>
                                <Paper style={paper(res.imgSrc)} square className={classes.paperRoot}>
                                    <ThemeProvider theme={theme}>
                                        <Typography variant="h5">
                                            {res.title}
                                        </Typography>
                                        <Typography variant="subtitle2">
                                            Services and issue tracking down no High page performance improvements in Blocks are loaded
                                        </Typography>
                                    </ThemeProvider>
                                </Paper>
                            </Grid>)
                        })}
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default Games;