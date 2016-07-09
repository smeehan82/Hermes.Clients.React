import * as Mobx from 'mobx';

import {Content} from '../Content';

export class Quote extends Content {
    @Mobx.observable quote: string;

    @Mobx.action
    mapFromJson (jsonObj: any) :Quote {
        super.mapBaseFromJson(jsonObj);
        this.quote = jsonObj.quote;

        return this;
    }
}