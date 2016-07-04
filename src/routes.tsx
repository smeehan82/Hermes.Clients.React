import * as React from 'react';
import {Route, IndexRoute, Redirect} from 'react-router';

import Root from './Root';

const DashboardView = () => <div>[Dashboard Component]</div>;
const SampleRoute1 = () => <div>[Sample Route 1 Component]</div>;
const SampleRoute2 = () => <div>[Sample Route 2 Component]</div>;

export default (
    <Route path='/' component={Root}>
        <IndexRoute component={DashboardView}  />
        <Route path='sample-route-1' component={SampleRoute1} />
        <Route path='sample-route-2' component={SampleRoute2} />
    </Route>
);
