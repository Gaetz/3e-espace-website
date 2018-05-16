import React, { Component } from 'react';
import firebase from 'firebase';

import Admin from './Admin';
import InputText from '../../components/InputText';
import InputMedia from '../../components/InputMedia';
import BlogpostTable from '../../components/BlogpostTable';
import byPropKey from '../../constants/utils'
import UserContext from '../../context/UserContext';
import { MediaType, PostState } from '../../constants/enums';

const INITIAL_STATE = {
    title: '',
    resume: '',
    content: '',
    error: null,
    media: '',
    mediaKind: '',
    postState: PostState.ADD
};

class AdminBlog extends Component {

    constructor() {
        super();

        this.handleEdit = this.handleEdit.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.database = firebase.database();

        this.imagesRef = firebase.storage().ref().child('images');

        this.state = {
            title: '',
            resume: '',
            content: '',
            media: '',
            mediaKind: '',
            postState: PostState.ADD,
            error: null,
            posts: null
        }
    }

    componentWillMount() {
        // Get posts and listen for updates
        this.database.ref('posts').on('value', snapshot => {
            this.setState({ posts: snapshot.val() });
        })
    }

    componentWillUnmount() {
        this.setState({ posts: null })
    }

    handleEdit(index) {
        this.setState({
            title: this.state.posts[index].title,
            resume: this.state.posts[index].resume,
            content: this.state.posts[index].content,
            media: '',
            postState: PostState.EDIT
        });
    }

    handleReset(e) {
        this.reset();
        e.preventDefault();
    }

    reset() {
        if (this.state.mediaKind === MediaType.IMAGE) {
            if(document.getElementById('inputMedia'))
                document.getElementById('inputMedia').files[0] = null;
        }
        this.setState(INITIAL_STATE);
    }

    handleDelete(key) {
        this.database.ref(`posts/${key}`).remove();
    }

    create(e, user) {
        e.preventDefault();
        let media = this.state.media;
        // Image upload
        if (this.state.mediaKind === MediaType.IMAGE) {
            const file = document.getElementById('inputMedia').files[0];
            if(file) {
                this.setState({ postState: PostState.UPLOADING });
                const filename = this.state.media.match(/[^\\/]*$/)[0];
                const fileRef = this.imagesRef.child(filename);
                media = fileRef.fullPath;
                fileRef.put(file).then( snapshot => {
                    this.createPost(user, media);
                    this.reset();
                }, error => {
                    this.setState({ error, postState: PostState.ADD });
                });
            }
        }
        else {
            this.createPost(user, media);
            this.reset();
        }
    }

    createPost(user, media) {
        const newKey = this.database.ref().child('posts').push().key;
        const post = {
            key: newKey,
            author: user.email,
            title: this.state.title,
            resume: this.state.resume,
            media: media,
            mediaKind: this.state.mediaKind,
            content: this.state.content,
            date: new Date().getTime()
        };
        this.database.ref(`posts/${newKey}`).set(post);
    }

    update(e, user) {
        /*const newKey = this.database.ref().child('posts').push().key;
        const post = {
            author: user.email,
            title: this.state.title,
            resume: this.state.resume,
            content: this.state.content,
            date: new Date()
        };
        const updates = {};
        updates['/posts/' + newKey] = post;
        
        this.database.ref().update(updates);*/
        e.preventDefault();
    }

    render() {
        const { title, resume, content, error, postState, posts, media } = this.state;
        const isInvalid = title === '' || resume === '' || content === '' || media === '' || postState === PostState.UPLOADING;
        const isEmpty = title === '' && resume === '' && content === '' && media === '';
        const errorMessage = error ?
            <p>{error.message}</p>
            : null;
        let buttonLabel = 'Créer';
        switch(postState) {
            case PostState.EDIT: 
                buttonLabel = 'Editer';
                break;
            case PostState.UPLOADING: 
                buttonLabel = 'Uploading';
                break;
            default: break;
        }

        return (
            <UserContext.Consumer>
                {currentUser =>
                    <Admin>
                        <h2>{this.props.title}</h2>

                        {posts && <BlogpostTable posts={posts} onEdit={this.handleEdit} onDelete={this.handleDelete} />}

                        <form onSubmit={this.onSubmit}>
                            <InputText id='inputTitle' label='Titre' value={title} type='text'
                                onChange={event => this.setState(byPropKey('title', event.target.value))}
                            />
                            <InputMedia id='inputMedia' label='Media' value={media}
                                onMediaKindChange={(mediaKind) => this.setState({ mediaKind })}
                                onChange={event => this.setState(byPropKey('media', event.target.value))}
                            />
                            <InputText id='inputResume' label='Résumé' value={resume} type='text'
                                onChange={event => this.setState(byPropKey('resume', event.target.value))}
                            />
                            <InputText textarea id='inputContent' label='Texte' value={content} type='text'
                                onChange={event => this.setState(byPropKey('content', event.target.value))}
                            />
                            <button disabled={isInvalid} type='submit' className='btn btn-primary'
                                onClick={postState === PostState.EDIT ? e => this.update(e, currentUser) : e => this.create(e, currentUser)}>
                                {buttonLabel}
                            </button>
                            <button disabled={isEmpty} type='cancel' className='btn' onClick={this.handleReset}>
                                Reset
                            </button>

                            {errorMessage}
                        </form>
                    </Admin>
                }
            </UserContext.Consumer>
        );
    }
}

export default AdminBlog;