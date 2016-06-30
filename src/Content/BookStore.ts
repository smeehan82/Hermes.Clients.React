import {observable, computed, action, runInAction} from 'mobx';

import {IContent} from './Content';

class BookStore {
    constructor() {
        this.getBook();
    }

    @observable private _content: IContent[] = [];

    @computed get content() {
        return this._content;
    }

    @action
    private async getBook() {
        const content = await this.getBookFromServer();
        runInAction('getBook', () => {
            this._content = content;
        });
    }

    private getBookFromServer(): Promise<IContent[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(fakeBook);
            }, 300);
        });
    }
}

const singleton = new BookStore();
export default singleton;

const fakeBook = [
    {
        concurrencyStamp: 'F9AE3935-DF71-4CB5-B84C-68532DF66DCD',
        id: '5AAD6BF2-F52A-40D3-AC81-D8641677DA02',
        title: 'Dead Man`s Hand',
        slug: 'dead-mans-hand',
        contentType: "books",
        dateCreated: Date.now,
        dateModified: Date.now,
        datePublished: Date.now,
    }
];