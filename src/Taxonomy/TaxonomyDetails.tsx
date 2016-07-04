//@TODO dynamically figure out what fields (of common field types) need to be displayed for any given taxonomy type

import * as React from 'react';
import {observer} from 'mobx-react';

import {ITaxonomy} from './Taxonomy'

interface IProps {
    params: {
        urlName: string;
        slug: string;
    };
}

@observer
export class TaxonomyDetails extends React.Component<IProps, void> {

    render() {
        return (
            <div>
                [Generic Taxonomy Details]
            </div>
        );
    }
}