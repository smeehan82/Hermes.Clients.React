import * as React from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router';

import BookStore from './BookStore';

@observer
export class BookList extends React.Component<void, void> {
    render() {
        return (
            <div>
                {BookStore.content.length > 0 ? (
                    <ul>
                        {BookStore.content.map(b => {
                            return (
                                <li key={b.id}>
                                    <Link to={`/content/books/${b.slug}`}>{b.title}</Link>
                                </li>
                            )
                        }) }
                    </ul>
                ) : 'No books found'}
            </div>
        );
    }
}