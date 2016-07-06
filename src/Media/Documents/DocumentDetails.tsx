import * as React from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router';

import DocumentStore from './DocumentStore';

interface IProps {
    params: {
        urlName: string;
        slug: string;
    };
}

@observer
export class DocumentDetails extends React.Component<IProps, void>{
    render(){
        const document = DocumentStore.media.find(m=>m.slug === this.props.params.slug);

        return (
            <div>
                <h2>{document.title}</h2>
                <p>[Document Detail Component]</p>
            </div>
        );
    }
}