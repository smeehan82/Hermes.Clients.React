import * as React from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router';

import MusicalInstrumentStore from './MusicalInstrumentStore';

@observer
export class MusicalInstrumentList extends React.Component<void, void> {
    
    render() {
        console.log('MusicalInstrument list rendering: %o', MusicalInstrumentStore);
        return (
            <div>
                {MusicalInstrumentStore.content.length > 0 ? (
                    <ul>
                        {MusicalInstrumentStore.content.map(b => {
                            return (
                                <li key={b.id}>
                                    <Link to={`/content/musical-instruments/${b.slug}`}>{b.title}</Link>
                                </li>
                            )
                        }) }
                    </ul>
                ) : 'No musical instruments found'}
            </div>
        );
    }
}