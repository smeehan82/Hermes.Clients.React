import * as React from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router';

import ImageStore from './ImageStore';

@observer
export class ImageList extends React.Component<void, void> {
    render() {
        return (
            <div>
                {ImageStore.media.length > 0 ? (
                    <ul>
                        {ImageStore.media.map(m => {
                            return (
                                <li key={m.id}>
                                    <Link to={`/media/images/${m.slug}`}>{m.title}</Link>
                                </li>
                            )
                        }) }
                    </ul>
                ) : 'No images found'}
            </div>
        );
    }
}