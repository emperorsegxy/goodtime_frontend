import React, {useState} from 'react';
import '../../../css/music.css';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../../../images/logo.svg';
import Card from '@material-ui/core/Card';
import artisteDropdown from './FavArtiste';
import CreateButton from './CreatePlaylistBtn';
import musicDropdown from './MusicType';


const useStyles = makeStyles((theme) => ({
    root: {
      // display: 'flex',
      // '& > *': {
        minWidth: 275,
        margin: theme.spacing(36),
        width: theme.spacing(154),
        height: theme.spacing(100),
        marginLeft: 2,
        background: 'rgba(4, 68, 64, 0.54)',
        opacity: 0.8,
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        transform: 'translate(-50%, -50%)',
      // },
    },
  }));

  const music_type = ["Rock", "AfroBeats", "RnB"];
  const fav_artiste = ["Davido", "Nasty C", "Selena Gomez"]; 

  export default function CreatePlaylists(){
    const classes = useStyles();
    const [musicType, MusicDropdown ] = musicDropdown("Add Music", "", music_type);
    const [favArtiste, ArtisteDropdown ] = artisteDropdown(" ", "", fav_artiste);



    const [playlist, setPlaylist] = useState('');

      function handlePlaylist(e){
         setPlaylist(e.target.value)
      }

      function handleSubmit(e){
        e.preventDefault();
        // let userData = playlist;
        
        // fetch('', {
        //   method: 'POST',
        //   body: JSON.stringify(userData),
        //   header: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json',
        //   },
        // }).then(response => {
        //   response.json().then(data => {
        //     console.log("Successful" + data);
        //   })
        // })

        console.log(playlist, musicType, favArtiste);
      }

    return(
        <div>
             <div className="bg"
        style={{
          backgroundImage: `url(${require('../../../images/musicbg.png')})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
           <div>
           <img className="good-logo-purple" src={Logo} alt="..." width="178px" height="78px"></img>
           </div>
           <div className="d-flex flex-row justify-content-end align-item-start">
                <a href="/music" className="back-home">Back Home</a>
            </div>
            <p className="d-flex flex-row justify-content-center create-playlist">Create Playlists</p>
             
            <div className="form-group">
            <Card className={classes.root} variant="outlined">
            <div className="vertical-divider"></div>
            <div className="d-flex flex-row justify-content-start" autoComplete="off">
            <form onSubmit={handleSubmit}>
            <span>
            <p className="pl-title">Playlist Title</p>
              <input placeholder="Jungle Music" value={playlist}
                     onChange={handlePlaylist} id="exampleFormControlSelect1"
                     className="form-control jungle"/>
              </span>

              <MusicDropdown />  

              <ArtisteDropdown />

              <CreateButton 
                title={'create my playlist'} 
              />
          </form> 
             </div>
             <div class="vr">&nbsp;</div>
              <div className="d-flex justify-content-end">
                <p className="boom-text">Boom here's what we <br/> created for you</p>
              </div>

             </Card>
        </div>
        </div>
        </div>
    );
  }