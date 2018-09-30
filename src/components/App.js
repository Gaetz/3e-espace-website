import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import * as routes from '../constants/routes';
import firebase from 'firebase';

import About from '../pages/About';
import Blog from '../pages/Blog';
import Login from '../pages/admin/Login';
import AdminBlog from '../pages/admin/AdminBlog';

import withAuth from './withAuth';

class App extends Component {

  constructor(props) {
    super(props);
    const config = {
      apiKey: "AIzaSyBbFm-oAhUN389iRWnDicRLHuHJZNdLDWM",
      authDomain: "ljdlt-f153e.firebaseapp.com",
      databaseURL: "https://ljdlt-f153e.firebaseio.com",
      projectId: "ljdlt-f153e",
      storageBucket: "ljdlt-f153e.appspot.com",
      messagingSenderId: "406335043159"  
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
              <Route exact path={routes.ADMIN_BLOG} component={() => <AdminBlog title='Podcasts admin' />} />

              <Route exact path={routes.BLOG} component={() => <Blog title='Podcasts' />} />
              <Route exact path={routes.ABOUT} component={() => <About title='A propos' />} />
            </Switch>
          </div>
        </Router>
    );
  }
}


export default withAuth(App);