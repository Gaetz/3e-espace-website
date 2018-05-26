import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';
import Navlink from './Navlink'

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to={routes.BLOG}>
                    <img src="/img/rufflerim_logo.png" width="50" height="50" alt="Return to homepage" />
                </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <Navlink title='Blog' route={routes.BLOG} />
                        <Navlink title='Community' route={routes.COMMUNITY} />
                        <Navlink title='About' route={routes.ABOUT} />
                    </ul>
                </div>
                <ul className="navbar-nav mr-auto">
                    <Navlink title='Login' route={routes.LOGIN} />
                </ul>
            </nav >
        );
    }
}

export default Navigation;
