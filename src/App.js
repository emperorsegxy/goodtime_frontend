import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Places from './components/Places/Places';
import Music from './components/Music/Music.jsx';
import PlaceModal from './components/Places/PlacesModal';
import CreatePlaylists from './components/Music/CreatePlaylist/CreatePlaylists';
import Games from "./components/Games/Games";

class App extends Component{
    render(){
        return (
            <div className="App">
                <Layout>
                    <Route path="/home" component={Home}/>
                    <Route path="/explore-places" component={Places} />
                    <Route path="/explore-places-category" component={PlaceModal}/>
                    <Route path="/music" component={Music} />
                    <Route path="/create-playlists" component={CreatePlaylists}/>
                    <Route path="/games" component={Games} />
                </Layout>
            </div>
        );
    }
}


export default App;
