import * as Mobx from 'mobx';

import {TaxonomyStore} from '../TaxonomyStore';
import {Category} from './Category';

const fakeCategorys = [
    {
        id: '5AAD6BF2-F52A-10D3-AC81-D8641177DA02',
        concurrencyStamp: 'FAAE3935-DF71-4DB5-B84C-68532DF66DCD',
        title: 'Category 1',
        slug: 'category-1',
        dateCreated: Date.now,
        dateModified: Date.now,
        datePublished: Date.now,
    },
    {
        id: '5AAD6BF2-352A-10D3-AC81-D8641D77DA02',
        concurrencyStamp: 'FAAE3935-DF71-DCB5-B84C-68532DF66DCC',
        title: 'Category 2',
        slug: 'category-2',
        dateCreated: Date.now,
        dateModified: Date.now,
        datePublished: Date.now,
    },
    {
        id: '5AAD6BF1-F52A-10D3-AC81-D864A677DA02',
        concurrencyStamp: 'FAAE3935-DF71-FCB5-B84C-68532DF66DC6',
        title: 'Category 3',
        slug: 'category-3',
        dateCreated: Date.now,
        dateModified: Date.now,
        datePublished: Date.now,
    }
];

class CategoryStore extends TaxonomyStore<Category> {

    constructor() {
        super();
        this.addTaxonomyRange(fakeCategorys.map(b => this.mapTaxonomyFromJson(b)));
    }

    protected mapTaxonomyFromJson(jsonObj: any): Category {
        const category = new Category();
        super.mapTaxonomyFromJson(jsonObj, category);
        return category;
    }
}

const singleton = new CategoryStore();
export default singleton;