import * as Mobx from 'mobx';

export interface IUser {
    id: string;
    concurrencyStamp: string;
    email: string;
    userName: string;
    dateCreated: Date;
    dateModified: Date;
}

export class User implements IUser {
    @Mobx.observable id: string = '';
    @Mobx.observable concurrencyStamp: string = '';
    @Mobx.observable email: string = '';
    @Mobx.observable userName: string = '';
    @Mobx.observable dateCreated: Date = new Date();
    @Mobx.observable dateModified: Date = new Date();

    @Mobx.action
    mapFromJson (jsonObj: any) :User {
        this.id = jsonObj.id;
        this.concurrencyStamp = jsonObj.concurrencyStamp;
        this.email = jsonObj.email;
        this.userName = jsonObj.userName;
        this.dateCreated = new Date(jsonObj.dateCreated);
        this.dateModified = new Date(jsonObj.dateModified);

        return this;
    }
}