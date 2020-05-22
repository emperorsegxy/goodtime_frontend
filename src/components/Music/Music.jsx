import React from 'react';
import './music.module.css';
import Logo from '../../images/logo.svg';
import styles from './music.module.css';
import Typography from "@material-ui/core/Typography";
import theme from './theme';
import { ThemeProvider } from "@material-ui/styles";

const music = () => {
    return(
        <div className="bg"
            style={{
                backgroundImage: `url(${require('./musicImg.png')})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}>
             <div className={`${styles.container} h-100`}>
                <nav className={`navbar`}>
                    <a href="#" className={`navbar-brand ml-lg-5 ml-0 mt-lg-5 mt-0`}>
                        <img src={Logo} width="100px" height="78px" alt="Brand Logo"/>
                    </a>
                </nav>
                <div className={`${styles.showcase} d-flex flex-column mt-lg-0 mt-5 h-50 justify-content-center align-items-center`}>
                    <ThemeProvider theme={theme}>
                         <Typography align="center" component="h6" variant="h6">
                             WHILE YOU ARE ISOLATING
                         </Typography>
                        <Typography gutterBottom align="center" component="h1" variant="h3">
                            REDEFINE YOUR OWN PLAYLISTS
                        </Typography>
                    </ThemeProvider>
                    <div className={`${styles.links} row justify-content-between`}>
                        <div className={`col-md-6 d-flex justify-content-center align-items-center`}>
                            <div className={`${styles.viewBtn} text-center`}>
                                <a href="#">VIEW PLAYLIST</a>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <div className={`${styles.createBtn}`}>
                                <a href="#">CREATE YOUR PLAYLIST</a>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    );
}

export default music