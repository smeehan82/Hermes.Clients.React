import * as React from 'react';
import {observer} from 'mobx-react';

import QuoteStore from './QuoteStore';

interface IProps {
    params: {
        urlName: string;
        slug: string;
    };
}

@observer
export class QuoteDetail extends React.Component<IProps, void> {
    render(){
        console.log('Quote details rendering: %o', QuoteStore);
        const quote = QuoteStore.content.find(b=>b.slug === this.props.params.slug);

        return (
            <div>
                <h2>{quote.title}</h2>
                <p>[Quote Detail Component]</p>
            </div>
        );
    }
}