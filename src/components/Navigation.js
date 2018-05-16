import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';
import Navlink from './Navlink'

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to={routes.LANDING}>
                    <img src="/img/rufflerim_logo.png" width="50" height="50" alt="Return to homepage" />
                </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <Navlink title='Treasure of the Doomed' route={routes.GAMES_TDAD} />
                        <Navlink title='InSnake' route={routes.GAMES_INSNAKE} />
                        <Navlink title='Lije' route={routes.GAMES_LIJE} />
                        <Navlink title='Listen' route={routes.GAMES_LISTEN} />
                    </ul>
                </div>
                <ul className="navbar-nav mr-auto">
                    <Navlink title='Community' route={routes.COMMUNITY} />
                    <Navlink title='Blog' route={routes.BLOG} />
                    <Navlink title='About' route={routes.ABOUT} />
                </ul>
            </nav >
        );
    }
}

export default Navigation;
