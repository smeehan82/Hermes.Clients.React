import * as Mobx from 'mobx';

import {ContentType} from './ContentType';

const fakeContentType = [
    {
        concurrencyStamp: '8DB0DFBB-D863-49C4-B029-5A8D72C83FC7',
        id: '251B65DC-E822-4499-8364-514989086C13',
        name: 'Musical Instruments',
        urlName: 'musical-instruments'
    },
    {
        concurrencyStamp: 'CD2544FB-84B4-428C-9ABB-03455FE71217',
        id: '8F754ED6-09BB-4EF3-AEB8-B98118ABB62C',
        name: 'Quotes',
        urlName: 'quotes'
    },
    {
        concurrencyStamp: 'F9AE3935-DF71-4CB5-B84C-68532DF66DCD',
        id: '5AAD6BF2-F52A-40D3-AC81-D8641677DA02',
        name: 'Books',
        urlName: 'books'
    },
];

class ContentTypeStore {
    constructor() {
        this.getContentType();
    }

    @Mobx.observable private _contentType: ContentType[] = [];

    @Mobx.computed get contentType() {
        return this._contentType;
    }

    @Mobx.action
    //@TODO fix the async aspect of the store call
    //private async getContentType() {
    private getContentType() {
        //const contentType = await this.getContentTypeFromServer();
        //Mobx.runInAction('getContentType', () => {
            //this._contentType = contentType;
        this._contentType = fakeContentType.map(ct => new ContentType().mapFromJson(ct));
        //});
    }

    private getContentTypeFromServer(): Promise<ContentType[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(fakeContentType);
            }, 300);
        });
    }
}

const singleton = new ContentTypeStore();
export default singleton;