//@TODO dynamically figure out what fields (of common field types) need to be displayed for any given content type

import * as React from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router';

import {IContent} from './Content';
import {BookList} from './Books';
import MusicalInstumentStore from './MusicalIntrumentStore';
import QuoteStore from './QuoteStore';

interface IProps {
    params: {
        urlName: string;
    };
}

@observer
export class ContentList extends React.Component<IProps, void> {

    render() {
        return (
            <div>
                [Generic Content List]
            </div>
        );
    }
}


// function ContentList(props: IProps) {
//     const contentType = props.params.urlName;

//     if( contentType === "musical-instruments"){
//         const content = MusicalInstumentStore.content;
//         return RenderContent(content, props);
//     }else if(contentType === "books"){
//         const content = BookStore.content;
//         return RenderContent(content, props);
//     }else if(contentType === "quotes"){
//         const content = QuoteStore.content;
//         return RenderContent(content, props);
//     }
// }

// export default observer(ContentList);

// function RenderContent(content: IContent[], props: IProps) {
//     return content.length > 0 ? (
//         <ul>
//             {content.map(co => {
//                 return (
//                     <li key={co.id}>
//                         <Link to={`/content/${props.params.urlName}/${co.slug}`}>{co.title}</Link>
//                     </li>
//                 );
//             }) }
//         </ul>
//     ) : null;
// }