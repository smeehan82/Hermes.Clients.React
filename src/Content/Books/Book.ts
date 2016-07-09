import * as Mobx from 'mobx';

import {Content} from '../Content';

export class Book extends Content {
    @Mobx.observable author: string;

    @Mobx.action
    mapFromJson (jsonObj: any) :Book {
        super.mapBaseFromJson(jsonObj);
        this.author = jsonObj.author;

        return this;
    }
}