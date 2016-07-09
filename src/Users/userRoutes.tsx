import * as React from 'react';
import {Route, IndexRoute, Redirect} from 'react-router';

import {UserList} from './UserList';
import {UserDetails} from './UserDetails';

export default (
    <Route path='/users'>
        <IndexRoute component={UserList} />
        <Route path=':userName' component={UserDetails} />
    </Route>
);