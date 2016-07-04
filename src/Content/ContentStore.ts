import * as Mobx from 'mobx';

import {IContent} from './Content';

export abstract class ContentStore<TContent extends IContent> {
    constructor() {
        console.log('abstract constructor');
        this.getContent();
    }

    @Mobx.observable
    protected _content: TContent[] = [];

    @Mobx.computed
    get content(): TContent[] {
        return this._content;
    }

    @Mobx.action
    //protected async getContent() {
    protected getContent() {
        console.log('getting fake content');
        //const content = await this.getContentFromServer();
        this._content = [];
        //Mobx.runInAction('getContent', () => {
//            this._content = content;
//        });
        console.log('fake content retrieved');
    }

    @Mobx.action
    protected addContent(content: TContent): void {
        this._content.push(content);
    }

    @Mobx.action
    protected addContentRange(contentRange: TContent[]): void {
        console.log(this);
        console.log('adding content range %o', contentRange);
        for(const content of contentRange) {
            this._content.push(content);
        }
        console.log(this._content);
    }

    private getContentFromServer(): Promise<TContent[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([]);
            }, 0);
        });
    }

    protected mapContentFromJson(jsonObj: any, content: TContent): TContent {
        content.id = jsonObj.id;
        content.concurrencyStamp = jsonObj.concurrencyStamp;
        content.title = jsonObj.title;
        content.slug = jsonObj.slug;
        content.dateCreated = jsonObj.dateCreated;
        content.dateModified = jsonObj.dateModified;
        content.datePublished = jsonObj.datePublished;

        return content;
    };
}