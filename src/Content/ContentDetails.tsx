import * as React from 'react';
import {observer} from 'mobx-react';

import ContentStore from './ContentStore';

interface IProps {
    params: {
        slug: string;
    };
}

function ContentDetails(props: IProps) {
    const content = ContentStore.content.find(p => props.params.slug === p.slug);
    console.log(content);
    return (
        <div>
            <h2>{content.title}</h2>
            <p>[Detail Content]</p>
        </div>
    );
}

export default observer(ContentDetails);