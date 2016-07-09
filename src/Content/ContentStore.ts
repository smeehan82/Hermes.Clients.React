import * as Mobx from 'mobx';

import {IContent} from './Content';

export abstract class ContentStore<TContent extends IContent> {
    constructor() {
        this.getContent();
    }

    @Mobx.observable
    protected _content: TContent[] = [];

    @Mobx.computed
    get content(): TContent[] {
        return this._content;
    }

    @Mobx.action
    //@TODO fix the async aspect of the store call
    //protected async getContent() {
    protected getContent() {
        //const content = await this.getContentFromServer();
        this._content = [];
        //Mobx.runInAction('getContent', () => {
//            this._content = content;
//        });
    }

    @Mobx.action
    protected addContent(content: TContent): void {
        this._content.push(content);
    }

    @Mobx.action
    protected addContentRange(contentRange: TContent[]): void {
        for(const content of contentRange) {
            this._content.push(content);
        }
    }

    private getContentFromServer(): Promise<TContent[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([]);
            }, 0);
        });
    }
}