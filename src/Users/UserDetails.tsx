//@TODO dynamically figure out what fields (of common field types) need to be displayed for any given taxonomy type

import * as React from 'react';
import {observer} from 'mobx-react';

import UserStore from './UserStore'

interface IProps {
    params: {
        userName: string;
    };
}

@observer
export class UserDetails extends React.Component<IProps, void> {
    render() {
        const user = UserStore.user.find(u=>u.userName === this.props.params.userName);

        return (
            <div>
                <h2>{user.userName}</h2>
                <p>{user.email}</p>
                [Generic User Details]
            </div>
        );
    }
}