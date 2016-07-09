import * as React from 'react';
import {Route, IndexRoute, Redirect} from 'react-router';

import {TaxonomyList} from './TaxonomyList';
import TaxonomyDetails from './TaxonomyDetails';
import {TaxonomyTypeList} from './TaxonomyTypeList';

import {TagList, TagDetails} from './Tags';
import {CategoryList, CategoryDetails} from './Categories';

function getTaxonomyListComponent(
    nextState: ReactRouter.RouterState,
    cb: (error: any, component?: ReactRouter.RouteComponent) => void
    ): void {

        //@TODO: make api call to get code to get module for a given taxonomy type
        switch (nextState.params['urlName']) {
            case 'tags':
                cb(null, TagList);
                break;
            case 'categories':
                cb(null, CategoryList);
                break;
            default:
                cb('taxonomy type not found!');
                break;
        }
}

function getTaxonomyDetailsComponent(
    nextState: ReactRouter.RouterState,
    cb: (error: any, component?: ReactRouter.RouteComponent) => void
    ): void {

        //@TODO: make api call to get code to get module for a given taxonomy type
        switch (nextState.params['urlName']) {
            case 'tags':
                cb(null, TagDetails);
                break;
            case 'categories':
                cb(null, CategoryDetails);
                break;
            default:
                cb('taxonomy type not found!');
                break;
        }
}

export default (
    <Route path='/taxonomy'>
        <IndexRoute component={TaxonomyTypeList} />
        <Route path=':urlName' getComponent={getTaxonomyListComponent} />
        <Route path=':urlName/:slug' getComponent={getTaxonomyDetailsComponent} />
    </Route>
);