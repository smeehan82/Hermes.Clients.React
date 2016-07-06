import * as React from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router';

import MediaTypeStore from './MediaTypeStore';

function MediaTypeList() {
    return MediaTypeStore.mediaType.length > 0 ? (
        <ul>
            {MediaTypeStore.mediaType.map(m => {
                return (
                    <li key={m.id}>
                        <Link to={`/media/${m.urlName}`}>{m.name}</Link>
                    </li>
                );
            }) }
        </ul>
    ) : null;
}

export default observer(MediaTypeList);