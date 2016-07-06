import * as React from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router';

import VideoStore from './VideoStore';

interface IProps {
    params: {
        urlName: string;
        slug: string;
    };
}

@observer
export class VideoDetails extends React.Component<IProps, void>{
    render(){
        const video = VideoStore.media.find(m=>m.slug === this.props.params.slug);

        return (
            <div>
                <h2>{video.title}</h2>
                <p>[Video Detail Component]</p>
            </div>
        );
    }
}