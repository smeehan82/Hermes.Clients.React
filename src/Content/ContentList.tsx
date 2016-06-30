import * as React from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router';

import {IContent} from './Content';
import BookStore from './BookStore';
import MusicalInstumentStore from './MusicalIntrumentStore';
import QuoteStore from './QuoteStore';

interface IProps {
    params: {
        urlName: string;
    };
}

function ContentList(props: IProps) {
    const ContentType = props.params.urlName;

    if( ContentType === "musical-instruments"){
        const content = MusicalInstumentStore.content;
        return RenderContent(content, props);
    }else if(ContentType === "books"){
        const content = BookStore.content;
        return RenderContent(content, props);
    }else if(ContentType === "quotes"){
        const content = QuoteStore.content;
        return RenderContent(content, props);
    }
}

export default observer(ContentList);

function RenderContent(content: IContent[], props: IProps) {
    return content.length > 0 ? (
        <ul>
            {content.map(co => {
                return (
                    <li key={co.id}>
                        <Link to={`/content/${props.params.urlName}/${co.slug}`}>{co.title}</Link>
                    </li>
                );
            }) }
        </ul>
    ) : null;
}