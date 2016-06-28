import * as React from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router';

import ContentTypeStore from './ContentTypeStore';

function ContentTypeList() {
    return ContentTypeStore.contentType.length > 0 ? (
        <ul>
            {ContentTypeStore.contentType.map(ct => {
                return (
                    <li key={ct.id}>
                        <Link to={`/content/${ct.urlName}`}>{ct.name}</Link>
                    </li>
                );
            }) }
        </ul>
    ) : null;
}

export default observer(ContentTypeList);