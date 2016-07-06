//@TODO dynamically figure out what fields (of common field types) need to be displayed for any given taxonomy type

import * as React from 'react';
import {observer} from 'mobx-react';

import {IUser} from './User'

interface IProps {
    params: {
        slug: string;
    };
}

@observer
export class UserDetails extends React.Component<IProps, void> {

    render() {
        return (
            <div>
                [Generic User Details]
            </div>
        );
    }
}