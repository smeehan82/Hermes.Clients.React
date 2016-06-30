import {observable, computed, action, runInAction} from 'mobx';

import {IContentType} from './ContentType';

class ContentTypeStore {
    constructor() {
        this.getContentType();
    }

    @observable private _contentType: IContentType[] = [];

    @computed get contentType() {
        return this._contentType;
    }

    @action
    private async getContentType() {
        const contentType = await this.getContentTypeFromServer();
        runInAction('getContentType', () => {
            this._contentType = contentType;
        });
    }

    private getContentTypeFromServer(): Promise<IContentType[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(fakeContentType);
            }, 300);
        });
    }
}

const singleton = new ContentTypeStore();
export default singleton;

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