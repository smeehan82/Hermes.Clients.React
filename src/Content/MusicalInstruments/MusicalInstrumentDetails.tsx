import * as React from 'react';
import {observer} from 'mobx-react';

import MusicalInstrumentStore from './MusicalInstrumentStore';

interface IProps {
    params: {
        urlName: string;
        slug: string;
    };
}

@observer
export class MusicalInstrumentDetails extends React.Component<IProps, void> {
    render(){
        console.log('MusicalInstrument details rendering: %o', MusicalInstrumentStore);
        const musicalInstrument = MusicalInstrumentStore.content.find(b=>b.slug === this.props.params.slug);

        return (
            <div>
                <h2>{musicalInstrument.title}</h2>
                <p>[MusicalInstrument Detail Component]</p>
            </div>
        );
    }
}