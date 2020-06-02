import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Places from './components/Places/Places';
import Music from './components/Music/Music.jsx';
import PlaceModal from './components/Places/PlacesModal';
import CreatePlaylists from './components/Music/CreatePlaylist/CreatePlaylists';
import Games from "./components/Games/Games";
import Hangouts from "./components/Hangout/Hangouts";
import GamesHome from "./components/Games/GamesHome";
import GamesView from "./components/Games/GamesView";

class App extends Component{
    render(){
        return (
            <div className="h-100">
                <Layout>
                    <Route path="/home" component={Home}/>
                    <Route path="/explore-places" component={Places} />
                    <Route path="/explore-places-category" component={PlaceModal}/>
                    <Route path="/music" component={Music} />
                    <Route path="/create-playlists" component={CreatePlaylists}/>
                    <Route path="/games" component={Games} />
                    <Route path="/gamesView" component={GamesView} />
                    <Route path="/hangouts" component={Hangouts} />

                </Layout>
            </div>
        );
    }
}


export default App;
