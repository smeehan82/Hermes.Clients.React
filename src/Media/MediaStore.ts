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

    protected mapMediaFromJson(jsonObj: any, media: TMedia): TMedia {
        media.id = jsonObj.id;
        media.concurrencyStamp = jsonObj.concurrencyStamp;
        media.title = jsonObj.title;
        media.slug = jsonObj.slug;
        media.dateCreated = jsonObj.dateCreated;
        media.dateModified = jsonObj.dateModified;
        media.datePublished = jsonObj.datePublished;

        return media;
    };
}