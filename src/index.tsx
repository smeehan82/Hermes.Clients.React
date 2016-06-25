declare var ENVIRONMENT: 'development' | 'staging' | 'production';
import * as React from 'react';
import { render } from 'react-dom';
import {useStrict} from 'mobx';
import DevTools from 'mobx-react-devtools';

useStrict(true);

import * as Pages from './Pages';

const app = (
    <div>
        <h1>Hermes</h1>

        <Pages.PagesList />

        {ENVIRONMENT === "development" ? <DevTools /> : null}
    </div>
);

render(app, document.getElementById('app'));