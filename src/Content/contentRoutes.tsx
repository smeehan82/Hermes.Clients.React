import * as React from 'react';
import {Route, IndexRoute, Redirect} from 'react-router';

import ContentList from './ContentList';
import ContentDetails from './ContentDetails';
import ContentTypeList from './ContentTypeList';

export default (
    <Route path='/content'>
        <IndexRoute component={ContentTypeList} />
        <Route path=':urlName' component={ContentList}>
             <Route path=':slug' component={ContentDetails} />
        </Route>
    </Route>
);