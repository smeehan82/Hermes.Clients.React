import * as React from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router';

import DocumentStore from './DocumentStore';

@observer
export class DocumentList extends React.Component<void, void> {
    render() {
        return (
            <div>
                {DocumentStore.media.length > 0 ? (
                    <ul>
                        {DocumentStore.media.map(m => {
                            return (
                                <li key={m.id}>
                                    <Link to={`/media/documents/${m.slug}`}>{m.title}</Link>
                                </li>
                            )
                        }) }
                    </ul>
                ) : 'No documents found'}
            </div>
        );
    }
}