import * as Mobx from 'mobx';

import {MediaStore} from '../MediaStore';
import {Document} from './Document';

const fakeDocuments = [
    {
        id: '5AAD6BF2-F12A-10D3-AC81-D8641677DA02',
        concurrencyStamp: 'FBAE3935-DF71-4CB5-B84C-68532DF66DCD',
        title: 'Document 1',
        slug: 'document-1',
        dateCreated: Date.now,
        dateModified: Date.now,
        datePublished: Date.now,
    },
    {
        id: '5AAD6BF2-352A-10B3-AC81-D8641677DA02',
        concurrencyStamp: 'FAABB935-DF71-4CB5-B84C-68532DF66DCC',
        title: 'Document 2',
        slug: 'document-2',
        dateCreated: Date.now,
        dateModified: Date.now,
        datePublished: Date.now,
    },
    {
        id: '5AAD6BF1-F52A-10D3-DD81-D8641677DA02',
        concurrencyStamp: 'FAAE3885-DF71-4CB5-B84C-68532DF66DC6',
        title: 'Document 3',
        slug: 'document-3',
        dateCreated: Date.now,
        dateModified: Date.now,
        datePublished: Date.now,
    }
];

class DocumentStore extends MediaStore<Document> {

    constructor() {
        super();
        this.addMediaRange(fakeDocuments.map(d => new Document().mapFromJson(d)));
    }
}

const singleton = new DocumentStore();
export default singleton;