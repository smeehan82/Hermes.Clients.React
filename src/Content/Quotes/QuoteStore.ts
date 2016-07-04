import * as Mobx from 'mobx';

import {ContentStore} from '../ContentStore';
import {Quote} from './Quote';

const fakeQuotes = [
    {
        concurrencyStamp: 'CD3544FB-84B4-428C-9ABB-03455FE71217',
        id: '8F754ED6-09BB-4E43-AEB8-B98118ABB62C',
        title: 'This is a day that will live in infamy',
        slug: 'this-is-day-that-will-live-infamy',
        dateCreated: Date.now,
        dateModified: Date.now,
        datePublished: Date.now,
    },
    {
        concurrencyStamp: 'F91E3935-DF71-4CB5-B84C-68532DF66DCD',
        id: '5AAD6BF2-F52A-4083-AC81-D8641677DA02',
        title: 'No boom today',
        slug: 'no-boom-today',
        dateCreated: Date.now,
        dateModified: Date.now,
        datePublished: Date.now,
    },
    {
        concurrencyStamp: '8D20DFBB-D863-49C4-B029-5A8D72C83FC7',
        id: '251B65DC-E822-4409-8364-514989086C13',
        title: 'Wizard`s First Rule',
        slug: 'wizards-first-rule',
        dateCreated: Date.now,
        dateModified: Date.now,
        datePublished: Date.now,
    },
    {
        concurrencyStamp: 'CD1544FB-84B4-428C-9ABB-03455FE71217',
        id: '8F754ED6-09BB-4EA3-AEB8-B98118ABB62C',
        title: 'Bad',
        slug: 'bad',
        dateCreated: Date.now,
        dateModified: Date.now,
        datePublished: Date.now,
    }
];

class QuoteStore extends ContentStore<Quote> {

    constructor() {
        super();
        this.addContentRange(fakeQuotes.map(b => this.mapContentFromJson(b)));
    }

    protected mapContentFromJson(jsonObj: any): Quote {
        const quote = new Quote();
        super.mapContentFromJson(jsonObj, quote);
        quote.author = jsonObj.author;

        return quote;
    }
}

const singleton = new QuoteStore();
export default singleton;