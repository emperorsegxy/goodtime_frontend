import React, {Component} from "react";
import {BrowserRouter as Router, Link, Route, Switch,} from "react-router-dom";
import Games from "./Games";
import Hangouts from "../Hangout/Hangouts";
import GamesView from "./GamesView";

class GamesHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // viewComponent: <Hangouts />,
        }

    }


    render() {
        return (
            <div className='show-me'>
                <Link to="myGames/games">myGames</Link>
                        <Route path="myGames/games" component={() => <Games />} />
                        <Route path="/gameVies" component={() => <GamesView />} />
            </div>
        );
    }

}

export default GamesHome;