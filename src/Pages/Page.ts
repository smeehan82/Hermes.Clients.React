import {observable} from 'mobx';

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
    @observable id: string = '';
    @observable concurrencyStamp: string = '';
    @observable title: string = '';
    @observable slug: string = '';
    @observable isIndexPage: boolean = false;
    @observable hasTemplate: boolean = true;
    @observable children: Page[] = [];
    @observable leftoverPath: string = '';


    static mapFromJson(jsonObj: any): Page {
        const page = new Page();
        page.id = jsonObj.id;
        page.concurrencyStamp = jsonObj.concurrencyStamp;
        page.title = jsonObj.title;
        page.slug = jsonObj.slug;
        page.isIndexPage = jsonObj.isIndexPage;
        page.hasTemplate = jsonObj.hasTemplate;
        page.children = Array.isArray(jsonObj.children) ?
            jsonObj.children.map((c: any) => Page.mapFromJson(c))
            : [];
        return page;
    }
}