import * as React from 'react';
import {Route, IndexRoute, Redirect} from 'react-router';

import {ContentList} from './ContentList';
import ContentDetails from './ContentDetails';
import ContentTypeList from './ContentTypeList';

import {BookList} from './Books';

function getContentListComponent(
    nextState: ReactRouter.RouterState,
    cb: (error: any, component?: ReactRouter.RouteComponent) => void
    ): void {

        //@TODO: make api call to get code to get module for a given content type
        switch (nextState.params['urlName']) {
            case 'books':
                cb(null, BookList);
                break;

            case 'quotes':
            case 'musical-instruments':
                //render default content component
                cb(null, ContentList);
                break;
            default:
                cb('content type not found!');
                break;
        }
}

export default (
    <Route path='/content'>
        <IndexRoute component={ContentTypeList} />
        <Route path=':urlName' getComponent={getContentListComponent} />
        <Route path=':urlName/:slug' component={ContentDetails} />
    </Route>
);