import * as Mobx from 'mobx';

import {IUser} from './User';

export abstract class UserStore<TUser extends IUser> {
    constructor() {
        this.getUser();
    }

    @Mobx.observable
    protected _user: TUser[] = [];

    @Mobx.computed
    get user(): TUser[] {
        return this._user;
    }

    @Mobx.action
    //protected async getUser() {
    protected getUser() {
        //const user = await this.getUserFromServer();
        this._user = [];
        //Mobx.runInAction('getUser', () => {
//            this._user = user;
//        });
    }

    @Mobx.action
    protected addUser(user: TUser): void {
        this._user.push(user);
    }

    @Mobx.action
    protected addUserRange(userRange: TUser[]): void {
        for(const user of userRange) {
            this._user.push(user);
        }
    }

    private getUserFromServer(): Promise<TUser[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([]);
            }, 0);
        });
    }

    protected mapUserFromJson(jsonObj: any, user: TUser): TUser {
        user.id = jsonObj.id;
        user.concurrencyStamp = jsonObj.concurrencyStamp;
        user.title = jsonObj.title;
        user.slug = jsonObj.slug;
        user.email = jsonObj.email;
        user.userName = jsonObj.userName;
        user.dateCreated = jsonObj.dateCreated;
        user.dateModified = jsonObj.dateModified;

        return user;
    };
}