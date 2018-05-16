import React from 'react';

import Navigation from './Navigation'

const Page = (props) =>
    <div>
        <Navigation />
        <hr />
        {props.children}
    </div>

export default Page;