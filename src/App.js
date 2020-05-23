import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home';
import Places from './components/Places';
import Music from './components/Music/Music.jsx';
import PlaceModal from './components/PlacesModal';
import Games from "./components/Games/Games";
import Hangouts from "./components/Hangout/Hangouts";

class App extends Component{
    render(){
        return (
            <div className="h-100">
                <Layout>
                    <Route path="/home" component={Home}/>
                    <Route path="/explore-places" component={Places} />
                    <Route path="/explore-places-category" component={PlaceModal}/>
                    <Route path="/music" component={Music} />
                    <Route path="/games" component={Games} />
                    <Route path="/hangouts" component={Hangouts} />
                </Layout>
            </div>
        );
    }
}


export default App;
