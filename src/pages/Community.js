import React, { Component } from 'react';
import Page from '../components/Page';

class Community extends Component {
    render() {
        return (
            <Page>
                <h1>{this.props.title}</h1>
            </Page>
        );
    }
}

export default Community;