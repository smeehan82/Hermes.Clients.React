declare var ENVIRONMENT: 'development' | 'staging' | 'production';
import * as React from 'react';
import { render } from 'react-dom';
import DevTools from 'mobx-react-devtools';

const app = (
    <div>
        <p>Hello, World</p>
        {ENVIRONMENT === "development" ? <DevTools /> : null}
    </div>
);

render(app, document.getElementById('app'));