import * as Mobx from 'mobx';

import {MediaType} from './MediaType';

const fakeMediaType = [
    {
        concurrencyStamp: '8D11DFBB-D863-49C4-B029-5A8D72C83FC7',
        id: '251B65DC-E822-1191-8364-514989086C13',
        name: 'Videos',
        urlName: 'videos'
    },
    {
        concurrencyStamp: 'C11544FB-84B4-428C-9ABB-03455FE71217',
        id: '8F754AD6-011B-4EF3-AEB8-B98118ABB62C',
        name: 'Documents',
        urlName: 'documents'
    },
    {
        concurrencyStamp: 'C11544FB-84B4-4555-9ABB-03455FE71217',
        id: '8F754AD6-011B-4EF3-AEB8-B9811555B62C',
        name: 'Images',
        urlName: 'images'
    },
];

class MediaTypeStore {
    constructor() {
        this.getMediaType();
    }

    @Mobx.observable private _mediaType: MediaType[] = [];

    @Mobx.computed get mediaType() {
        return this._mediaType;
    }

    @Mobx.action
    //@TODO fix the async aspect of the store call
    //private async getMediaType() {
    private getMediaType() {
        //const mediaType = await this.getMediaTypeFromServer();
        //Mobx.runInAction('getMediaType', () => {
            //this._mediaType = mediaType;
        this._mediaType = fakeMediaType.map(mt => new MediaType().mapFromJson(mt));
        //});
    }

    private getMediaTypeFromServer(): Promise<MediaType[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(fakeMediaType);
            }, 300);
        });
    }
}

const singleton = new MediaTypeStore();
export default singleton;