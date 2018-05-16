import React from 'react';
import { Redirect } from 'react-router';

import * as routes from '../../constants/routes';
import NavigationAdmin from '../../components/NavigationAdmin'
import UserContext from '../../context/UserContext';

const Admin = (props) => 
    <UserContext.Consumer>
    { user => {
            if(user) {
                return(
                    <div>
                        <NavigationAdmin />
                        {props.children}
                    </div>
                );
            } else {
                return <Redirect to={routes.LOGIN} />;
            }
        }
    }</UserContext.Consumer>

export default Admin;