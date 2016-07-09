import * as Mobx from 'mobx';

import {IMedia} from './Media';

export abstract class MediaStore<TMedia extends IMedia> {
    constructor() {
        this.getMedia();
    }

    @Mobx.observable
    protected _media: TMedia[] = [];

    @Mobx.computed
    get media(): TMedia[] {
        return this._media;
    }

    @Mobx.action
    //protected async getMedia() {
    protected getMedia() {
        //const media = await this.getMediaFromServer();
        this._media = [];
        //Mobx.runInAction('getMedia', () => {
//            this._media = media;
//        });
    }

    @Mobx.action
    protected addMedia(media: TMedia): void {
        this._media.push(media);
    }

    @Mobx.action
    protected addMediaRange(mediaRange: TMedia[]): void {
        for(const media of mediaRange) {
            this._media.push(media);
        }
    }

    private getMediaFromServer(): Promise<TMedia[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([]);
            }, 0);
        });
    }
}