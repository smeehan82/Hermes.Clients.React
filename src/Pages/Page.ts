import * as Mobx from 'mobx';

export interface IPage {
    id: string;
    concurrencyStamp: string;
    title: string;
    slug: string;
    isIndexPage: boolean;
    hasTemplate: boolean;
    children: IPage[];
}

export interface IPageWithParams {
    page: Page;
    params: string[];
}

export class Page implements IPage {
    constructor(jsonObj?: any) {
        Mobx.runInAction('pageConstructor', () => {
            if (jsonObj) {
                this.id = jsonObj.id;
                this.concurrencyStamp = jsonObj.concurrencyStamp;
                this.title = jsonObj.title;
                this.slug = jsonObj.slug;
                this.isIndexPage = jsonObj.isIndexPage;
                this.hasTemplate = jsonObj.hasTemplate;
                this.children = Array.isArray(jsonObj.children) ?
                    jsonObj.children.map((c: any) => new Page(c))
                    : [];
            }
            else {
                this.id = '';
                this.concurrencyStamp = '';
                this.title = '';
                this.slug = '';
                this.isIndexPage = false;
                this.hasTemplate = true;
                this.children = [];
            }
        });
    }

    @Mobx.observable id: string;
    @Mobx.observable concurrencyStamp: string;
    @Mobx.observable title: string;
    @Mobx.observable slug: string;
    @Mobx.observable isIndexPage: boolean;
    @Mobx.observable hasTemplate: boolean;
    @Mobx.observable children: Page[];
}