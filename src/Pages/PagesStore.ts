import {observable, computed, action, runInAction} from 'mobx';

import {IPage} from './Page';

class PagesStore {
    constructor() {
        this.getPages();
    }

    @observable private _pages: IPage[] = [];

    @computed get pages() {
        return this._pages;
    }

    @action
    private async getPages() {
        const pages = await this.getPagesFromServer();
        runInAction('getPages', () => {
            this._pages = pages;
        });
    }

    private getPagesFromServer(): Promise<IPage[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(fakePages);
            }, 300);
        });
    }
}

const singleton = new PagesStore();
export default singleton;



const fakePages = [
    {
        concurrencyStamp: '8DB0DFBB-D863-49C4-B029-5A8D72C83FC7',
        id: '251B65DC-E822-4499-8364-514989086C13',
        path: '/',
        title: 'Test Home Page',
    },
    {
        concurrencyStamp: 'CD2544FB-84B4-428C-9ABB-03455FE71217',
        id: '8F754ED6-09BB-4EF3-AEB8-B98118ABB62C',
        path: '/page-1',
        title: 'Page 1',
    },
    {
        concurrencyStamp: 'F9AE3935-DF71-4CB5-B84C-68532DF66DCD',
        id: '5AAD6BF2-F52A-40D3-AC81-D8641677DA02',
        path: '/page-2',
        title: 'Page 2',
    },
];