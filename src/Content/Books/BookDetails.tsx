import * as React from 'react';
import {observer} from 'mobx-react';

import BookStore from './BookStore';

interface IProps {
    params: {
        urlName: string;
        slug: string;
    };
}

@observer
export class BookDetails extends React.Component<IProps, void>{
    render(){
        const book = BookStore.content.find(b=>b.slug === this.props.params.slug);

        return (
            <div>
                <h2>{book.title}</h2>
                <p>Written by, {book.author}</p>
                <p>[Book Detail Component]</p>
            </div>
        );
    }
}