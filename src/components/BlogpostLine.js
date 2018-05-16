import React from 'react';

const BlogpostLine = (props) => 
    <tr>
        <td>{props.post.title}</td>
        <td>{props.post.author}</td>
        <td>{props.post.date.toString()}</td>
        <td>
            <button className="btn btn-primary" onClick={() => props.onEdit(props.index)}>Editer</button> 
            <button className="btn btn-danger" onClick={() => props.onDelete(props.index)}>Supprimer</button> 
        </td>
    </tr>

export default BlogpostLine;