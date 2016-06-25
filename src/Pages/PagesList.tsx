import * as React from 'react';
import {observer} from 'mobx-react';

import PagesStore from './PagesStore';

function PagesList() {
    return PagesStore.pages.length > 0 ? (
        <ul>
            {PagesStore.pages.map(p => <li>{p.title}</li>) }
        </ul>
    ) : null;
}

export default observer(PagesList);