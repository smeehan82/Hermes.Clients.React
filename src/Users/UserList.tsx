//@TODO dynamically figure out what fields (of common field types) need to be displayed for any given taxonomy type

import * as React from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router';

import UserStore from './UserStore';

interface IProps {
    params: { };
}

@observer
export class UserList extends React.Component<IProps, void> {

    render() {
        return (
            <div>
                {UserStore.user.length > 0 ? (
                    <ul>
                        {UserStore.user.map(u => {
                            return (
                                <li key={u.id}>
                                    <Link to={`/users/${u.userName}`}>{u.userName}</Link>
                                </li>
                            )
                        }) }
                    </ul>
                ) : 'No Users found'}
            </div>
        );
    }
}
