import * as React from 'react';
import {observer} from 'mobx-react';

import MusicalInstrumentStore from './MusicalInstrumentStore';

interface IProps {
    params: {
        urlName: string;
        slug: string;
    };
}

function MusicalInstrumentDetails(props: IProps) {
    console.log('MusicalInstrument details rendering: %o', MusicalInstrumentStore);
    const musicalInstrument = MusicalInstrumentStore.content.find(b=>b.slug === props.params.slug);

    return (
        <div>
            <h2>{musicalInstrument.title}</h2>
            <p>[MusicalInstrument Detail Component]</p>
        </div>
    );
}

export default observer(MusicalInstrumentDetails);