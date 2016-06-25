import * as React from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router';

import PagesStore from './PagesStore';

function PagesList() {
    return PagesStore.pages.length > 0 ? (
        <ul>
            {PagesStore.pages.map(p => {
                return (
                    <li key={p.id}>
                        <Link to={`/pages/${p.id}`}>{p.title}</Link>
                    </li>
                );
            }) }
        </ul>
    ) : null;
}

export default observer(PagesList);