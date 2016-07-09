import * as React from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router';

import PagesStore from './PagesStore';

function PagesList() {
    return !PagesStore.isLoading ? (
        <ul>
            {PagesStore.pages.map(p => {
                return (
                    <li key={p.id}>
                        <Link to={`/pages/${p.slug}`}>{p.title}</Link>
                    </li>
                );
            }) }
        </ul>
    ) : (
        <div>loading...</div>
    );
}

export default observer(PagesList);