import React from 'react';
import { Link } from 'react-router-dom';

const Navlink = (props) =>
    <li className='nav-item'>
        <Link className='nav-link' to={props.route}>{props.title}</Link>
    </li>

export default Navlink;