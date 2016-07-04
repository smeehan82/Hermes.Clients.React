import * as React from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router';

import PagesStore from './PagesStore';


interface IProps {
    params: {
        slug: string;
    };
    location: HistoryModule.Location;
}

function PageDetail(props: IProps) {
    if (PagesStore.isLoading) {
        return (<div>loading...</div>);
    }
    const pageWithParams = PagesStore.getPageByPath({ path: props.location.pathname });
    const page = pageWithParams.page;
    return (
        <div>
            <h2>{page.title}</h2>
            <p>[Detail Page]</p>
            {page.children.map(p => (
                <div key={p.id}>
                    <Link to={`/pages/${page.slug}/${p.slug}`}>{p.title}</Link>
                </div>
            ))}
        </div>
    );
}

export default observer(PageDetail);