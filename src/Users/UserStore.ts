import * as Mobx from 'mobx';

import {User} from './User';

const fakeUsers = [
    {
        concurrencyStamp: '8DB0DFBB-D863-4CBD-B029-5A8D72C83FC7',
        id: '251B65DC-E822-4499-8364-51CCC9086C13',
        email: 'smeehan@hermes.com',
        userName: 'smeehan',
        dateCreated: Date.now,
        dateModified: Date.now
    },
    {
        concurrencyStamp: 'CD2544FB-8CC4-428C-9ABB-03455FE71217',
        id: '8F754ED6-09BB-4EF3-AECC-B98118ABB62C',
        email: 'agrady@hermes.com',
        userName: 'agrady',
        dateCreated: Date.now,
        dateModified: Date.now
    },
    {
        concurrencyStamp: 'F9AE3CC5-DF71-4CB5-B84C-68532DF66DCD',
        id: '5AAD6BF2-F52A-40D3-BB81-D8641677DA02',
        email: 'administrator@hermes.com',
        userName: 'administrator',
        dateCreated: Date.now,
        dateModified: Date.now
    },
];

class UserStore {
    constructor() {
        this.getUser();
    }

    @Mobx.observable protected _user: User[] = [];

    @Mobx.computed get user() {
        return this._user;
    }

    @Mobx.action
    //protected async getUser() {
    protected getUser() {
        //const user = await this.getUserFromServer();
        this._user = fakeUsers.map(u => new User().mapFromJson(u));
        //Mobx.runInAction('getUser', () => {
//            this._user = user;
//        });
    }

    private getUserFromServer(): Promise<User[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([]);
            }, 0);
        });
    }
}

const singleton = new UserStore();
export default singleton;