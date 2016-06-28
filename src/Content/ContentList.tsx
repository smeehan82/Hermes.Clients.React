import * as React from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router';

import ContentStore from './ContentStore';

interface IProps {
    params: {
        urlName: string;
    };
}

function ContentList(props: IProps) {
    const content = ContentStore.content.filter(c => props.params.urlName === c.contentType)
    return ContentStore.content.filter(c => props.params.urlName === c.contentType).length > 0 ? (
        <ul>
            {ContentStore.content.filter(c => props.params.urlName === c.contentType).map(co => {
                return (
                    <li key={co.id}>
                        <Link to={`/content/${props.params.urlName}/${co.slug}`}>{co.title}</Link>
                    </li>
                );
            }) }
        </ul>
    ) : null;
}

export default observer(ContentList);