import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';
import SignUp from '../AuthFolder/SignUp';
import {movie} from './MovieApi';
import {makeStyles} from "@material-ui/styles";
import './movie-link.css';




const MovieLink = () => {

    const[open, setOpen] = useState(false);


    const onOpenModal = () =>{
        setOpen(true);
        console.log(open)
    }

    const onCloseModal = () =>{
        setOpen(false);
        console.log(open)
    }



    const paper = (src) => {
        return {
            background: `url(${src}`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            minHeight: '100vh'
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
            <div className="background-im" style={paper(movie.img)}> 
                <div className="container">
                    <div className="row">
                        <Link className="back-home" to={"/movie-list"}>Back</Link>
                    </div>
                    <div className="row">
                        <div className="container">
                            <h1 className="title">{movie.title}</h1>
                            <p className="description">{movie.description}</p>
                            <input className="copy-link copy-text" value={movie.link}></input>
                            <button onClick={onOpenModal} className="btn btn-primary">Save & choose other plans</button>
                                <Modal open={open} onClose={onCloseModal}>
                                    <SignUp/>
                            </Modal>
                            {/* <SignUp/> */}
                        </div>
                    </div>
                </div>
            </div>
    );
} 

export default MovieLink;
