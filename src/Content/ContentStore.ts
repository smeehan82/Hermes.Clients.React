import {observable, computed, action, runInAction} from 'mobx';

import {IContent} from './Content';

class ContentStore {
    constructor() {
        this.getContent();
    }

    @observable private _content: IContent[] = [];

    @computed get content() {
        return this._content;
    }

    @action
    private async getContent() {
        const content = await this.getContentFromServer();
        runInAction('getContent', () => {
            this._content = content;
        });
    }

    private getContentFromServer(): Promise<IContent[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(fakeContent);
            }, 300);
        });
    }
}

const singleton = new ContentStore();
export default singleton;



const fakeContent = [
    {
        concurrencyStamp: '8DB0DFBB-D862-49C4-B029-5A8D72C83FC7',
        id: '251B65DC-E822-4499-8364-514987086C13',
        title: 'Saxaphone',
        slug: 'saxaphone',
        contentType: "musical-instruments",
        dateCreated: Date.now,
        dateModified: Date.now,
        datePublished: Date.now,
    },
    {
        concurrencyStamp: 'CD2544FB-84B4-478C-9ABB-03455FE71217',
        id: '8F754ED6-09BB-4EF3-AEB8-B98112ABB62C',
        title: 'Guitar',
        slug: 'guitar',
        contentType: "musical-instruments",
        dateCreated: Date.now,
        dateModified: Date.now,
        datePublished: Date.now,
    },
    {
        concurrencyStamp: 'F9AE3935-DF71-44B5-B84C-68532DF66DCD',
        id: '5AAD6BF2-F52A-40D3-AC81-D8641577DA02',
        title: 'Grand Piano',
        slug: 'grand-piano',
        contentType: "musical-instruments",
        dateCreated: Date.now,
        dateModified: Date.now,
        datePublished: Date.now,
    },
    {
        concurrencyStamp: '8DB0DFBB-D863-46C4-B029-5A8D72C83FC7',
        id: '251B65DC-E822-4499-8364-514989086C13',
        title: 'Flute',
        slug: 'flute',
        contentType: "musical-instruments",
        dateCreated: Date.now,
        dateModified: Date.now,
        datePublished: Date.now,
    },
    {
        concurrencyStamp: 'CD3544FB-84B4-428C-9ABB-03455FE71217',
        id: '8F754ED6-09BB-4E43-AEB8-B98118ABB62C',
        title: 'This is a day that will live in infamy',
        slug: 'this-is-day-that-will-live-infamy',
        contentType: "quotes",
        dateCreated: Date.now,
        dateModified: Date.now,
        datePublished: Date.now,
    },
    {
        concurrencyStamp: 'F91E3935-DF71-4CB5-B84C-68532DF66DCD',
        id: '5AAD6BF2-F52A-4083-AC81-D8641677DA02',
        title: 'No boom today',
        slug: 'no-boom-today',
        contentType: "quotes",
        dateCreated: Date.now,
        dateModified: Date.now,
        datePublished: Date.now,
    },
    {
        concurrencyStamp: '8D20DFBB-D863-49C4-B029-5A8D72C83FC7',
        id: '251B65DC-E822-4409-8364-514989086C13',
        title: 'Wizard`s First Rule',
        slug: 'wizards-first-rule',
        contentType: "quotes",
        dateCreated: Date.now,
        dateModified: Date.now,
        datePublished: Date.now,
    },
    {
        concurrencyStamp: 'CD1544FB-84B4-428C-9ABB-03455FE71217',
        id: '8F754ED6-09BB-4EA3-AEB8-B98118ABB62C',
        title: 'Bad',
        slug: 'bad',
        contentType: "quotes",
        dateCreated: Date.now,
        dateModified: Date.now,
        datePublished: Date.now,
    },
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