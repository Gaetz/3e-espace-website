import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from 'firebase';

import * as routes from '../../constants/routes';
import UserContext from '../../context/UserContext';
import NavigationAdmin from '../../components/NavigationAdmin'
import byPropKey from '../../constants/utils'

const Login = ({ history }) => {
    return(
        <UserContext.Consumer>
            { user => {
                    if(user) {
                        return(
                            <div>
                                <NavigationAdmin />
                                <br />
                                <div className="jumbotron">Vous êtes connecté.</div>
                            </div>
                        );
                    } else {
                        return (
                            <div>
                                <br />
                                <div className="jumbotron">
                                    <SignInForm history={history} />
                                </div>
                            </div>
                        );
                    }
                }
            }
        </UserContext.Consumer>
    );
}

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {
        const { email, password } = this.state;
        const { history } = this.props;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState(() => ({ ...INITIAL_STATE }));
                history.push(routes.ADMIN_BLOG);
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });

        event.preventDefault();
    }

    render() {
        const { email, password, error } = this.state;
        const isInvalid = password === '' || email === '';
        const errorMessage = error ?
            <p>{error.message}</p>
            : null;

        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group row">
                    <label htmlFor="inputTitle" className="col-sm-2 col-form-label">Adresse mail</label>
                    <div className="col-sm-10">
                        <input
                            value={email}
                            onChange={event => this.setState(byPropKey('email', event.target.value))}
                            type="email"
                            placeholder="Email Address"
                            id="inputTitle"
                            className="form-control"
                            aria-describedby="emailHelp"
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input
                            value={password}
                            onChange={event => this.setState(byPropKey('password', event.target.value))}
                            type="password"
                            placeholder="Password"
                            id="inputPassword"
                            className="form-control"
                        />
                    </div>
                </div>

                <button disabled={isInvalid} type="submit" className="btn btn-primary">
                    Login
                </button>

                {errorMessage}
            </form>
        );
    }
}

export default withRouter(Login);

export {
    SignInForm,
};