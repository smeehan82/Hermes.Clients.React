import * as Mobx from 'mobx';

export interface ITaxonomy {
    id: string;
    concurrencyStamp: string;
    title: string;
    slug: string;
    dateCreated: Date;
    dateModified: Date;
    datePublished: Date;
}

export abstract class Taxonomy implements ITaxonomy {
    @Mobx.observable id: string = '';
    @Mobx.observable concurrencyStamp: string = '';
    @Mobx.observable title: string = '';
    @Mobx.observable slug: string = '';
    @Mobx.observable dateCreated: Date = new Date();
    @Mobx.observable dateModified: Date = new Date();
    @Mobx.observable datePublished: Date = new Date();

    @Mobx.action
    mapBaseFromJson (jsonObj: any) :Taxonomy {
        this.id = jsonObj.id;
        this.concurrencyStamp = jsonObj.concurrencyStamp;
        this.title = jsonObj.title;
        this.slug = jsonObj.slug;
        this.dateCreated = new Date(jsonObj.dateCreated);
        this.dateModified = new Date(jsonObj.dateModified);
        this.datePublished = new Date(jsonObj.datePublished);

        return this;
    }
}