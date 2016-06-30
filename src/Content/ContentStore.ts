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

const fakeContent = [ { } ];