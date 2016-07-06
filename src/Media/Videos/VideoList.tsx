import * as React from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router';

import VideoStore from './VideoStore';

@observer
export class VideoList extends React.Component<void, void> {
    render() {
        return (
            <div>
                {VideoStore.media.length > 0 ? (
                    <ul>
                        {VideoStore.media.map(m => {
                            return (
                                <li key={m.id}>
                                    <Link to={`/media/videos/${m.slug}`}>{m.title}</Link>
                                </li>
                            )
                        }) }
                    </ul>
                ) : 'No videos found'}
            </div>
        );
    }
}