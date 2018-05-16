import React, { Component } from 'react';
import Admin from './Admin';

class AdminGames extends Component {
    render() {
        return (
            <Admin>
                <h1>{this.props.title}</h1>
            </Admin>
        );
    }
}

export default AdminGames;