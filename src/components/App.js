import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import * as routes from '../constants/routes';
import firebase from 'firebase';

import Lije from '../pages/Lije';
import Tdad from '../pages/Tdad';
import Insnake from '../pages/Insnake';
import Listen from '../pages/Listen';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Community from '../pages/Community';

import Login from '../pages/admin/Login';
import AdminGames from '../pages/admin/AdminGames';
import AdminBlog from '../pages/admin/AdminBlog';

import withAuth from './withAuth';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyC0fqjDZ5svMpxt2t1wFfZoBmquJ_eAeck",
      authDomain: "react-auth-58991.firebaseapp.com",
      databaseURL: "https://react-auth-58991.firebaseio.com",
      projectId: "react-auth-58991",
      storageBucket: "react-auth-58991.appspot.com",
      messagingSenderId: "725846966804"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }

  render() {
    return (
        <Router>
          <div className="container">
            <Switch>
              <Route exact path={routes.LOGIN} component={() => <Login title='log in' />} />
              <Route exact path={routes.ADMIN_BLOG} component={() => <AdminBlog title='Blog admin' />} />
              <Route exact path={routes.ADMIN_GAMES} component={() => <AdminGames title='Games admin' />} />

              <Route exact path={routes.GAMES_TDAD} component={() => <Tdad title='Treasure of the Doomed' />} />
              <Route exact path={routes.GAMES_INSNAKE} component={() => <Insnake title='Insnake' />} />
              <Route exact path={routes.GAMES_LIJE} component={() => <Lije title='Lije' />} />
              <Route exact path={routes.GAMES_LISTEN} component={() => <Listen title='Listen' />} />
              <Route exact path={routes.COMMUNITY} component={() => <Community title='Community' />} />
              <Route exact path={routes.BLOG} component={() => <Blog title='Blog' />} />
              <Route exact path={routes.ABOUT} component={() => <About title='About' />} />
            </Switch>
          </div>
        </Router>
    );
  }
}

export default withAuth(App);