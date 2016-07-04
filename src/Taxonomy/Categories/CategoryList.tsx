import * as React from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router';

import CategoryStore from './CategoryStore';

@observer
export class CategoryList extends React.Component<void, void> {

    componentWillReact() {
        console.log('category list reacting');
    }


    render() {
        console.log('Category list rendering: %o', CategoryStore);
        return (
            <div>
                {CategoryStore.taxonomy.length > 0 ? (
                    <ul>
                        {CategoryStore.taxonomy.map(t => {
                            return (
                                <li key={t.id}>
                                    <Link to={`/taxonomy/categories/${t.slug}`}>{t.title}</Link>
                                </li>
                            )
                        }) }
                    </ul>
                ) : 'No categorys found'}
            </div>
        );
    }
}