//@TODO dynamically figure out what fields (of common field types) need to be displayed for any given taxonomy type

import * as React from 'react';
import {observer} from 'mobx-react';

import {IMedia} from './Media'

interface IProps {
    params: {
        urlName: string;
        slug: string;
    };
}

@observer
export class MediaDetails extends React.Component<IProps, void> {

    render() {
        return (
            <div>
                [Generic Media Details]
            </div>
        );
    }
}