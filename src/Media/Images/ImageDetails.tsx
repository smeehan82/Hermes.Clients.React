import * as React from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router';

import ImageStore from './ImageStore';

interface IProps {
    params: {
        urlName: string;
        slug: string;
    };
}

@observer
export class ImageDetails extends React.Component<IProps, void>{
    render(){
        const image = ImageStore.media.find(m=>m.slug === this.props.params.slug);

        return (
            <div>
                <h2>{image.title}</h2>
                <p>[Image Detail Component]</p>
            </div>
        );
    }
}