import * as React from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router';

import TagStore from './TagStore';

@observer
export class TagList extends React.Component<void, void> {
    render() {
        return (
            <div>
                {TagStore.taxonomy.length > 0 ? (
                    <ul>
                        {TagStore.taxonomy.map(t => {
                            return (
                                <li key={t.id}>
                                    <Link to={`/taxonomy/tags/${t.slug}`}>{t.title}</Link>
                                </li>
                            )
                        }) }
                    </ul>
                ) : 'No tags found'}
            </div>
        );
    }
}