import * as Mobx from 'mobx';

import {Page, IPage, IPageWithParams} from './Page';

class PagesStore {
    constructor() {
        this.getPages();
    }

    @Mobx.observable private _pages: Page[] = [];
    @Mobx.computed get pages(): Page[] { return this._pages; }

    @Mobx.observable private _isLoading: boolean = false;
    @Mobx.computed get isLoading(): boolean { return this._isLoading; }

    getPageByPath = Mobx.createTransformer((path: {path: string}): IPageWithParams => {
        if (!path.path.startsWith('/')) {
            throw 'path must start with /';
        }
        let page: Page = undefined;
        let params: string[] = [];
        const sections = path.path.split('/');
        if (sections.length === 1 && sections[0] === '') {
            page = this._pages.find(p => p.isIndexPage);
        }
        else {
            let pages = this._pages;
            for (const section of sections) {
                if (section !== '' && section !== 'pages') { //@TODO: account for being in the admin section
                    const maybePage = pages.find(p => p.slug === section);
                    if (maybePage === undefined) {
                        params = sections.slice(sections.indexOf(section));
                        break;
                    }
                    page = maybePage;
                    pages = page.children;
                }
            }
        }
        if (page === null) {
            //TODO fix edge cases and improve error handling
            throw 'page not found';
        }
        return { page, params };

    }, (b, sourceObj) => {
        console.log('cleaning up transformation: %o, %o', b, sourceObj);
    });

    @Mobx.action
    private getPages = async () => {
        this._isLoading = true;
        const pages = await this.getPagesFromServer();
        Mobx.runInAction('getPages', () => {
            this._pages = pages;
            this._isLoading = false;
        });
    }

    @Mobx.action
    private getPagesFromServer(): Promise<Page[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                Mobx.runInAction('getPagesFromServer', () => {
                    const pages = (fakePageJson).map(pageJson => new Page().mapFromJson(pageJson));
                    resolve(pages);
                });
            }, 500);
        });
    }
}

const singleton = new PagesStore();
export default singleton;


const fakePageJson: any[] = [
    {
        id: '251B65DC-E822-4499-8364-514989086C13',
        concurrencyStamp: '8DB0DFBB-D863-49C4-B029-5A8D72C83FC7',
        title: 'Test Home Page',
        slug: 'test-home-page',
        isIndexPage: true,
        hasTemplate: true,
    },
    {
        id: '8F754ED6-09BB-4EF3-AEB8-B98118ABB62C',
        concurrencyStamp: 'CD2544FB-84B4-428C-9ABB-03455FE71217',
        title: 'Page 1',
        slug: 'page-1',
        isIndexPage: false,
        hasTemplate: true,
        children: [
            {
                id: 'A94825A2-614D-42A1-AC48-0E919FC06A66',
                concurrencyStamp: '12E03FF0-65FA-46EE-86F3-EB599C788EC8',
                title: 'Nested Page',
                slug: 'nested-page',
                isIndexPage: false,
                hasTemplate: true,
            },
        ],
    },
    {
        id: '5AAD6BF2-F52A-40D3-AC81-D8641677DA02',
        concurrencyStamp: 'F9AE3935-DF71-4CB5-B84C-68532DF66DCD',
        title: 'Page 2',
        slug: 'page-2',
        isIndexPage: false,
        hasTemplate: true,
    },
    {
        id: 'EB9A461E-244A-4963-BBB1-DBCB166FF854',
        concurrencyStamp: '67480C64-D589-4A3F-8232-90B7B41FD662',
        title: 'Grouping Page',
        slug: 'grouping-page',
        isIndexPage: false,
        hasTemplate: false,
        children: [
            {
                id: 'A5BBB9B6-120B-49E8-9089-B7B52ABAC91F',
                concurrencyStamp: 'B2B3D1C3-01EF-4764-85EC-9D0A48D47710',
                title: 'Grouping Index Page',
                slug: 'grouping-index-page',
                isIndexPage: true,
                hasTemplate: true,
            },
            {
                id: 'CC04DE9B-EAF8-40C2-B786-F7C7F4AAF02D',
                concurrencyStamp: '5D16D291-6DDE-4B81-876C-3DFAA8615016',
                title: 'Grouping Page 2',
                slug: 'grouping-page-2',
                isIndexPage: false,
                hashasTemplate: true,
            },
        ]
    },
];