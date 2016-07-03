import * as Mobx from 'mobx';

import {IContent} from './Content';

export abstract class ContentStore<TContent extends IContent> {
    constructor() {
        console.log('abstract constructor called');
        this.getContent();
    }

    @Mobx.observable
    protected _content: TContent[] = [];

    @Mobx.computed
    get content(): TContent[] {
        return this._content;
    }

    @Mobx.action
    protected async getContent() {
        const content = await this.getContentFromServer();
        Mobx.runInAction('getContent', () => {
            this._content = content;
        });
    }

    private getContentFromServer(): Promise<TContent[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.fakeContent);
            }, 300);
        });
    }

    abstract mapContentFromJson(jsonObj: any[]): TContent[];

    protected fakeContent: any[];
}