import * as React from 'react';
import {Route, IndexRoute, Redirect} from 'react-router';

import PagesList from './PagesList';
import PageDetails from './PageDetails';

export default (
    <Route path='/pages'>
        <IndexRoute component={PagesList}  />
        <Route path=':slug/*' component={PageDetails} />
        <Route path=':slug' component={PageDetails} />
    </Route>
);