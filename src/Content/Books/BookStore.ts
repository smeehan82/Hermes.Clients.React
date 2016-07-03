import * as Mobx from 'mobx';

import {ContentStore} from '../ContentStore';
import {Book} from './Book';

const fakeBooks = [
    {
        id: '5AAD6BF2-F52A-40D3-AC81-D8641677DA02',
        concurrencyStamp: 'F9AE3935-DF71-4CB5-B84C-68532DF66DCD',
        title: 'Dead Man`s Hand',
        slug: 'dead-mans-hand',
        dateCreated: Date.now,
        dateModified: Date.now,
        datePublished: Date.now,
        author: 'Steven Meehan',
    }
];

class BookStore extends ContentStore<Book> {

    constructor() {
        super();
        this.addContentRange(fakeBooks.map(b => this.mapContentFromJson(b)));
    }

    protected mapContentFromJson(jsonObj: any): Book {
        const book = new Book();
        super.mapContentFromJson(jsonObj, book);
        book.author = jsonObj.author;

        return book;
    }
}

const singleton = new BookStore();
export default singleton;