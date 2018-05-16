import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';

import * as routes from '../constants/routes';
import Navlink from './Navlink'

class NavigationAdmin extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to={routes.LANDING}>
                    <img src="/img/rufflerim_logo.png" width="50" height="50" alt="Return to homepage" />
                </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <Navlink title='Blog' route={routes.ADMIN_BLOG} />
                        <Navlink title='Games' route={routes.ADMIN_GAMES} />
                    </ul>
                </div>
                <ul className="navbar-nav mr-auto">
                    <li className='nav-item'>
                        <a className='nav-link' onClick={() => firebase.auth().signOut()}>Déconnexion</a>
                    </li>
                </ul>
            </nav >
        );
    }
}

export default NavigationAdmin;
