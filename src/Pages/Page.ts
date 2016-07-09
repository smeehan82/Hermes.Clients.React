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
    @Mobx.observable id: string = '';
    @Mobx.observable concurrencyStamp: string = '';
    @Mobx.observable title: string = '';
    @Mobx.observable slug: string = '';
    @Mobx.observable isIndexPage: boolean = false;
    @Mobx.observable hasTemplate: boolean = true;
    @Mobx.observable children: Page[] = [];

    @Mobx.action
    mapFromJson = (jsonObj: any): Page => {
        this.id = jsonObj.id;
        this.concurrencyStamp = jsonObj.concurrencyStamp;
        this.title = jsonObj.title;
        this.slug = jsonObj.slug;
        this.isIndexPage = jsonObj.isIndexPage;
        this.hasTemplate = jsonObj.hasTemplate;
        this.children = Array.isArray(jsonObj.children) ?
            jsonObj.children.map((c: any) => new Page().mapFromJson(c))
            : [];
        return this;
    }
}