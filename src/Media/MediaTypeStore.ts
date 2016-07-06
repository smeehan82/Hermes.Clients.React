import {observable, computed, action, runInAction} from 'mobx';

import {IMediaType} from './MediaType';

class MediaTypeStore {
    constructor() {
        this.getMediaType();
    }

    @observable private _mediaType: IMediaType[] = [];

    @computed get mediaType() {
        return this._mediaType;
    }

    @action
    private async getMediaType() {
        const mediaType = await this.getMediaTypeFromServer();
        runInAction('getMediaType', () => {
            this._mediaType = mediaType;
        });
    }

    private getMediaTypeFromServer(): Promise<IMediaType[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(fakeMediaType);
            }, 300);
        });
    }
}

const singleton = new MediaTypeStore();
export default singleton;

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