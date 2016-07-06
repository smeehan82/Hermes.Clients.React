import * as Mobx from 'mobx';

export interface IUser {
    id: string;
    concurrencyStamp: string;
    title: string;
    slug: string;
    email: string;
    userName: string;
    dateCreated: Date;
    dateModified: Date;
}

export abstract class User implements IUser {
    @Mobx.observable id: string = '';
    @Mobx.observable concurrencyStamp: string = '';
    @Mobx.observable title: string = '';
    @Mobx.observable slug: string = '';
    @Mobx.observable email: string = '';
    @Mobx.observable userName: string = '';
    @Mobx.observable dateCreated: Date = new Date();
    @Mobx.observable dateModified: Date = new Date();
}