import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home';
import Places from './components/Places';
import Music from './components/Music/Music.jsx';
import PlaceModal from './components/PlacesModal';
import Games from "./components/Games/Games";
import MovieHome from "./components/Movie/MoviesHome";
import MovieList from "./components/Movie/MovieList";
import MovieLink from "./components/Movie/MovieLink";
import SignUp from './components/AuthFolder/SignUp';
import Login from './components/AuthFolder/Login';



class App extends Component{
    render(){
        return (
            <div className="App">
                <Layout>
                    <Route path="/register" component={SignUp}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/movie-link/:id" component={MovieLink}/>
                    <Route path="/movie-list" component={MovieList}/>
                    <Route path="/movies" component={MovieHome}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/explore-places" component={Places} />
                    <Route path="/explore-places-category" component={PlaceModal}/>
                    <Route path="/music" component={Music} />
                    <Route path="/games" component={Games} />
                </Layout>
            </div>
        );
    }
}


export default App;
