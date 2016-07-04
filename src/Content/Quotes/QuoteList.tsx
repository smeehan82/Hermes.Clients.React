import * as React from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router';

import QuoteStore from './QuoteStore';

@observer
export class QuoteList extends React.Component<void, void> {

    render() {
        console.log('Quote list rendering: %o', QuoteStore);
        return (
            <div>
                {QuoteStore.content.length > 0 ? (
                    <ul>
                        {QuoteStore.content.map(b => {
                            return (
                                <li key={b.id}>
                                    <Link to={`/content/quotes/${b.slug}`}>{b.title}</Link>
                                </li>
                            )
                        }) }
                    </ul>
                ) : 'No quotes found'}
            </div>
        );
    }
}