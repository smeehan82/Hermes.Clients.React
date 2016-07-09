import * as Mobx from 'mobx';

import {TaxonomyStore} from '../TaxonomyStore';
import {Tag} from './Tag';

const fakeTags = [
    {
        id: '5AAD6BF2-F52A-10D3-AC81-D8641677DA02',
        concurrencyStamp: 'FAAE3935-DF71-4CB5-B84C-68532DF66DCD',
        title: 'Tag 1',
        slug: 'tag-1',
        dateCreated: Date.now,
        dateModified: Date.now,
        datePublished: Date.now,
    },
    {
        id: '5AAD6BF2-352A-10D3-AC81-D8641677DA02',
        concurrencyStamp: 'FAAE3935-DF71-4CB5-B84C-68532DF66DCC',
        title: 'Tag 2',
        slug: 'tag-2',
        dateCreated: Date.now,
        dateModified: Date.now,
        datePublished: Date.now,
    },
    {
        id: '5AAD6BF1-F52A-10D3-AC81-D8641677DA02',
        concurrencyStamp: 'FAAE3935-DF71-4CB5-B84C-68532DF66DC6',
        title: 'Tag 3',
        slug: 'tag-3',
        dateCreated: Date.now,
        dateModified: Date.now,
        datePublished: Date.now,
    }
];

class TagStore extends TaxonomyStore<Tag> {

    constructor() {
        super();
        this.addTaxonomyRange(fakeTags.map(t => new Tag().mapFromJson(t)));
    }
}

const singleton = new TagStore();
export default singleton;