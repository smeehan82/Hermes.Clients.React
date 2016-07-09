import * as React from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router';

import TaxonomyTypeStore from './TaxonomyTypeStore';

@observer
export class TaxonomyTypeList extends React.Component<void, void> {
    render() {
        return (
            <div>
                {TaxonomyTypeStore.taxonomyType.length > 0 ? (
                    <ul>
                        {TaxonomyTypeStore.taxonomyType.map(t => {
                            return (
                                <li key={t.id}>
                                    <Link to={`/taxonomy/${t.urlName}`}>{t.name}</Link>
                                </li>
                            )
                        }) }
                    </ul>
                ) : 'No Taxonomy Types found'}
            </div>
        );
    }
}