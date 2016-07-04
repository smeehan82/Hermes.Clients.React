import * as React from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router';

import TagStore from './TagStore';

interface IProps {
    params: {
        urlName: string;
        slug: string;
    };
}

@observer
export class TagDetails extends React.Component<IProps, void>{
    render(){
        const tag = TagStore.taxonomy.find(t=>t.slug === this.props.params.slug);

        return (
            <div>
                <h2>{tag.title}</h2>
                <p>[Tag Detail Component]</p>
            </div>
        );
    }
}