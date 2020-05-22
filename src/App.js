import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home';
import Places from './components/Places';
import Music from './components/Music/Music.jsx';
import PlaceModal from './components/PlacesModal';

class App extends Component{
    render(){
        return (
            <div className="App">
                <Layout>
                    <Route path="/home" component={Home}/>
                    <Route path="/explore-places" component={Places} />
                    <Route path="/explore-places-category" component={PlaceModal}/>
                    <Route path="/music" component={Music} />
                </Layout>
            </div>
        );
    }
}


export default App;
