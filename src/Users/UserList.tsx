//@TODO dynamically figure out what fields (of common field types) need to be displayed for any given taxonomy type

import * as React from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router';

import {IUser} from './User';

interface IProps {
    params: {
        urlName: string;
    };
}

@observer
export class UserList extends React.Component<IProps, void> {

    render() {
        return (
            <div>
                [Generic User List]
            </div>
        );
    }
}
