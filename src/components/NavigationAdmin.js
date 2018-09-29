import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';

import * as routes from '../constants/routes';
import Navlink from './Navlink'

class NavigationAdmin extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to={routes.BLOG}>
                    Retour au site
                </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <Navlink title='Articles' route={routes.ADMIN_BLOG} />
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
