import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';
import Navlink from './Navlink'

class Navigation extends Component {
    render() {
       return (
           <div>
                <Link to={routes.BLOG}>
                    <center><img src="/img/3e_logo.jpg" height="300" alt="Return to homepage" /></center>
                </Link>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                            <Navlink title='Podcasts' route={routes.BLOG} />
                            <Navlink title='Communauté' route={routes.COMMUNITY} />
                            <Navlink title='A propos' route={routes.ABOUT} />
                        </ul>
                    </div>
                    <ul className="navbar-nav mr-auto">
                        <Navlink title='Login' route={routes.LOGIN} />
                    </ul>
                </nav >
                </div>
       );
    }
}

export default Navigation;
