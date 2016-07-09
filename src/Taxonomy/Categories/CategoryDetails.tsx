import * as React from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router';

import CategoryStore from './CategoryStore';

interface IProps {
    params: {
        urlName: string;
        slug: string;
    };
}

@observer
export class CategoryDetails extends React.Component<IProps, void>{
    render(){
        const category = CategoryStore.taxonomy.find(t=>t.slug === this.props.params.slug);

        return (
            <div>
                <h2>{category.title}</h2>
                <p>[Category Detail Component]</p>
                {category.children.map(c => (
                    <div key={c.id}>
                        {c.title}
                    </div>
                ))}
            </div>
        );
    }
}