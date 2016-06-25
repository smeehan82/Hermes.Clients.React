import * as React from 'react';
import {observer} from 'mobx-react';

import PagesStore from './PagesStore';

interface IProps {
    params: {
        id: string;
    };
}

function PageDetail(props: IProps) {
    const page = PagesStore.pages.find(p => props.params.id === p.id);
    return (
        <div>
            <h2>{page.title}</h2>
            <p>[Detail Page]</p>
        </div>
    );
}

export default observer(PageDetail);