declare var ENVIRONMENT: 'development' | 'staging' | 'production';
import * as React from 'react';
import { render } from 'react-dom';
import DevTools from 'mobx-react-devtools';
import {useStrict} from 'mobx';
import { Router, browserHistory, Route } from 'react-router';

import routes from './routes';


useStrict(true);

const app = (
    <div>
        <Router history={browserHistory} onUpdate={() => { window.scrollTo(0, 0); } } routes={routes} />
        {ENVIRONMENT === "development" ? <DevTools /> : null}
        <DevTools />
    </div>
);

render(app, document.getElementById('app'));