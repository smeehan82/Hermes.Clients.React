import * as React from 'react';
import {observer} from 'mobx-react';

import {IContent} from './Content'
import MusicalInstumentStore from './MusicalIntrumentStore';
import QuoteStore from './QuoteStore';

interface IProps {
    params: {
        urlName: string;
        slug: string;
    };
}

function ContentDetails(props: IProps) {
    const ContentType = props.params.urlName;

    if( ContentType === "musical-instruments"){
        const content = MusicalInstumentStore.content.find(c=> props.params.slug === c.slug);
        return RenderContent(content, props);
    }else if(ContentType === "quotes"){
        const content = QuoteStore.content.find(c=> props.params.slug === c.slug);
        return RenderContent(content, props);
    }
}

export default observer(ContentDetails);

function RenderContent(content: IContent, props: IProps) {
    return (
        <div>
            <h2>{content.title}</h2>
            <p>[Detail Content]</p>
        </div>
    );
}