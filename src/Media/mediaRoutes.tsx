import * as React from 'react';
import {Route, IndexRoute, Redirect} from 'react-router';

import {MediaList} from './MediaList';
import MediaDetails from './MediaDetails';
import {MediaTypeList} from './MediaTypeList';

import {DocumentList, DocumentDetails} from './Documents';
import {ImageList, ImageDetails} from './Images';
import {VideoList, VideoDetails} from './Videos';

function getMediaListComponent(
    nextState: ReactRouter.RouterState,
    cb: (error: any, component?: ReactRouter.RouteComponent) => void
    ): void {

        //@TODO: make api call to get code to get module for a given media type
        switch (nextState.params['urlName']) {
            case 'images':
                cb(null, ImageList);
                break;
            case 'videos':
                cb(null, VideoList);
                break;
            case 'documents':
                cb(null, DocumentList);
                break;
            default:
                cb('media type not found!');
                break;
        }
}

function getMediaDetailsComponent(
    nextState: ReactRouter.RouterState,
    cb: (error: any, component?: ReactRouter.RouteComponent) => void
    ): void {

        //@TODO: make api call to get code to get module for a given media type
        switch (nextState.params['urlName']) {
            case 'images':
                cb(null, ImageDetails);
                break;
            case 'videos':
                cb(null, VideoDetails);
                break;
            case 'documents':
                cb(null, DocumentDetails);
                break;
            default:
                cb('media type not found!');
                break;
        }
}

export default (
    <Route path='/media'>
        <IndexRoute component={MediaTypeList} />
        <Route path=':urlName' getComponent={getMediaListComponent} />
        <Route path=':urlName/:slug' getComponent={getMediaDetailsComponent} />
    </Route>
);