import React from 'react';
import firebase from 'firebase';

import UserContext from '../context/UserContext';

const withAuth = (Component) =>
    class withAuth extends React.Component {
        constructor(props) {
            super(props);

            this.state = { user: null };
        }

        componentDidMount() {
            firebase.auth().onAuthStateChanged(user =>
                user ?
                    this.setState({ user })
                    : this.setState({ user: null })
            );
        }

        render() {
            return (
                <UserContext.Provider value={this.state.user}>
                    <Component />
                </UserContext.Provider>
            );
        }
    }

export default withAuth;