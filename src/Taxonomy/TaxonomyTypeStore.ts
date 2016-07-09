import * as Mobx from 'mobx';

import {TaxonomyType} from './TaxonomyType';

const fakeTaxonomyType = [
    {
        concurrencyStamp: '8DB6DFBB-D863-49C4-B029-5A8D72C83FC7',
        id: '251B65DC-E822-4491-8364-514989086C13',
        name: 'Categories',
        urlName: 'categories'
    },
    {
        concurrencyStamp: 'CDF544FB-84B4-428C-9ABB-03455FE71217',
        id: '8F754AD6-09BB-4EF3-AEB8-B98118ABB62C',
        name: 'Tags',
        urlName: 'tags'
    },
];

class TaxonomyTypeStore {
    constructor() {
        this.getTaxonomyType();
    }

    @Mobx.observable private _taxonomyType: TaxonomyType[] = [];

    @Mobx.computed get taxonomyType() {
        return this._taxonomyType;
    }

    @Mobx.action
    //@TODO fix the async aspect of the store call
    //private async getTaxonomyType() {
    private getTaxonomyType() {
        //const taxonomyType = await this.getTaxonomyTypeFromServer();
        //Mobx.runInAction('getTaxonomyType', () => {
            //this._taxonomyType = taxonomyType;
        this._taxonomyType = fakeTaxonomyType.map(t => new TaxonomyType().mapFromJson(t));
        //});
    }

    private getTaxonomyTypeFromServer(): Promise<TaxonomyType[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(fakeTaxonomyType);
            }, 300);
        });
    }
}

const singleton = new TaxonomyTypeStore();
export default singleton;