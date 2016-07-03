import * as Mobx from 'mobx';

export interface IContent {
    id: string;
    concurrencyStamp: string;
    title: string;
    slug: string;
    dateCreated: Date;
    dateModified: Date;
    datePublished: Date;
}

export abstract class Content implements IContent {
    @Mobx.observable id: string = '';
    @Mobx.observable concurrencyStamp: string = '';
    @Mobx.observable title: string = '';
    @Mobx.observable slug: string = '';
    @Mobx.observable dateCreated: Date = new Date();
    @Mobx.observable dateModified: Date = new Date();
    @Mobx.observable datePublished: Date = new Date();
}