import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home';
import Places from './components/Places';
import Music from './components/Music/Music.jsx';
import PlaceModal from './components/PlacesModal';
import Games from "./components/Games/Games";
import Hangouts from "./components/Hangout/Hangouts";
import MovieHome from "./components/Movie/MoviesHome";
import MovieList from "./components/Movie/MovieList";
import MovieLink from "./components/Movie/MovieLink";
import SignUp from './components/AuthFolder/SignUp';
import Login from './components/AuthFolder/Login';
import Logout from './components/AuthFolder/Logout'
import OAuth2RedirectHandler from './components/AuthFolder/Oauth2RedirectHandler'
import Alert from 'react-s-alert';
import UserHome from './components/User/UserHome'
import PrivateRoute from './components/User/PrivateRoute'




class App extends Component {
    render() {
        return (
            <div className="h-100">
                <Layout>
                    <Route path="/register" component={SignUp} />
                    <Route path="/movie-link/:id" component={MovieLink} />
                    <Route path="/movie-list" component={MovieList} />
                    <Route path="/movies" component={MovieHome} />
                    <Route path="/home" component={Home} />
                    <Route path="/explore-places" component={Places} />
                    <Route path="/explore-places-category" component={PlaceModal} />
                    <Route path="/music" component={Music} />
                    <Route path="/games" component={Games} />
                    <Route path="/hangouts" component={Hangouts} />
                    <Route path="/login"
                        render={(props) => <Login {...props} />}></Route>
                    <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>
                    <Route path="/logout" component={Logout} />
                    <PrivateRoute path="/userhome" component={UserHome}></PrivateRoute>

                </Layout>
                <Alert stack={{limit: 3}} 
          timeout = {3000}
          position='top-right' effect='slide' offset={65} />
            </div>
        );
    }
}


export default App;
