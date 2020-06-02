import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import './movie-list.css';
import Logo from './images/logo2.svg';
import {movieData} from './MovieApi';
import Typography from "@material-ui/core/Typography";
import {makeStyles, ThemeProvider} from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import theme from "./theme";
import './movie-list.css';




const MovieList = () => {

    const paper = (src) => {
        return {
            background: `url(${src}`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }
    }

    const useStyle = makeStyles(themes => ({

        paper: {
            width: 230,
            height: 230,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '0 10px 30px 10px',
            background: "#fc3"
        }
    }));

    const classes = useStyle();

        return(
            <div className="bgd-img content">
                <div className="container">
                    <div className="row">
                        <Link to={"/home"}><img className="logo" src={Logo} alt="logo"></img></Link>
                        <Link className="bk-movie" to={"/movies"}>Back</Link>
                    </div>
                    <div className="container">
                        <div className="bgd-img2">
                            <div className="row container-t">
                                <Link className="col-lg-2 col-sm-6 top-text" to={"/login"}>Top</Link>
                                <Link className="col-lg-2 col-sm-6 top-text" to={"/explore-places"}>Recent</Link>
                                <Link className="col-lg-2 col-sm-6 top-text"  to={"/places"}>Upcoming</Link>
                                <Link className="col-lg-2 col-sm-6 top-text"  to={"/games"}>Popular</Link>
                                <Link className="col-lg-2 col-sm-6 top-text"  to={"/games"}>In-Cinema</Link>
                            </div>
                        <Grid container spacing={5}>
                            {movieData.map((movie, key) => {
                            return (<Grid item>
                                <Link to={"/movie-link/"+movie.id} className="link">
                                <Paper style={paper(movie.img)} round className={classes.paper}>
                                    <ThemeProvider theme={theme}>
                                        <Typography variant="h5">
                                            {movie.title}
                                                </Typography>
                                                <Typography variant="subtitle2">
                                                    {movie.description}
                                                </Typography>
                                                </ThemeProvider>
                                            </Paper>
                                            </Link>
                                    </Grid>)
                                })}
                        </Grid>
                        </div>
                    </div>
                </div>
            </div>
        );
} 

export default MovieList;