import React, { Component } from 'react';
import firebase from 'firebase';

import { MediaType } from '../constants/enums';

class BlogpostPreview extends Component {

    constructor() {
        super();

        this.state = {
            imageUrl: ''
        }
        this.storageRef = firebase.storage().ref();
    }

    componentWillMount() {
        if(this.props.post.mediaKind === MediaType.IMAGE) {
            this.storageRef.child(this.props.post.media).getDownloadURL().then(url => {
                this.setState({ imageUrl: url })
            }).catch(error => console.log(error));
        }
    }

    render() {

        const date = new Date(this.props.post.date);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        let media = null;
        switch(this.props.post.mediaKind) {
            case MediaType.VIDEO:
                const videoId = this.props.post.media.match(/[^=/]*$/)[0];
                media = 
                    <div className='row'>
                        <div className='col-sm-1' />
                        <div className='col-sm-10' >
                            <iframe width='100%' height='400' className='embed-responsive-item' src={`https://www.youtube.com/embed/${videoId}?rel=0`} allowFullScreen></iframe>
                        </div>
                        <div className='col-sm-1' />
                    </div>
                break;
            case MediaType.IMAGE:
                if(this.state.imageUrl !== '') {
                    media = 
                        <div className='row'>
                            <div className='col-sm-1' />
                            <div className='col-sm-10'>
                                <img width='100%' src={this.state.imageUrl} />
                            </div>
                            <div className='col-sm-1' />
                        </div>
                }
                break;
            case MediaType.SOUNDCLOUD:
                media = 
                <div className='row'>
                    <div className='col-sm-1' />
                    <div className='col-sm-10' dangerouslySetInnerHTML={{__html: this.props.post.media}} />
                    <div className='col-sm-1' />
                </div>;
                break;
            default: break;
        }
    
    
        return (
            <div>
                <div className='card'>
                    <div className='card-body'>
                            <h5 className='card-title align-baseline'>{this.props.post.title} </h5>
                            <footer className='blockquote-footer text-muted align-baseline'> by {this.props.post.author} | {year}/{month}/{day} </footer>
                        <hr/>
                            {media}
                        <br/>
                        <div className='row'>
                            <div className='col-sm-1' />
                            <div className='jumbotron col-sm-10'>
                                <div className='row'>
                                    <div className='col-sm-9'>{this.props.post.resume}</div>
                                    <div className='col-sm-3'>
                                        <button className='btn btn-primary' type='button' data-toggle='collapse' data-target={`#collapse-${this.props.post.key}`} aria-expanded='false' aria-controls={`collapse-${this.props.post.key}`}>
                                            Read more
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-1'/>
                        </div>
                        <div className='collapse' id={`collapse-${this.props.post.key}`}>
                            {this.props.post.content}
                        </div>
                    </div>
                </div>
                <br/>
            </div>
        );
    }

}

export default BlogpostPreview;