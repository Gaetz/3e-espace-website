import React from 'react';

import BlogpostLine from './BlogpostLine'

const BlogpostTable = (props) => {

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Titre</th>
                    <th>Auteur</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {Object.keys(props.posts).map(key =>
                <BlogpostLine key={key} index={key} post={props.posts[key]} onEdit={props.onEdit} onDelete={props.onDelete} />
            )}
            </tbody>
        </table>
    );
}

export default BlogpostTable;