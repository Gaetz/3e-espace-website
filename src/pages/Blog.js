import React, { Component } from 'react';
import firebase from 'firebase';

import BlogpostPreview from '../components/BlogpostPreview';
import Page from '../components/Page';

class Blog extends Component {

    constructor() {
        super();
        this.state = {
            posts: null
        }
    }

    componentDidMount() {
        // Get posts
        firebase.database().ref('posts').once('value').then(snapshot => {
            this.setState({ posts: snapshot.val() });
        });
    }

    render() {
        if(this.state.posts) {
            return (
                <Page>
                    {Object.keys(this.state.posts).map(key =>
                        <BlogpostPreview key={key} post={this.state.posts[key]} />
                    )}
                </Page>
            );
        }
        return <Page><p>Loading...</p></Page>
    }
}

export default Blog;