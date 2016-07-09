import * as Mobx from 'mobx';

import {Taxonomy} from '../Taxonomy';

export class Tag extends Taxonomy {
    @Mobx.action
    mapFromJson (jsonObj: any) :Tag {
        super.mapBaseFromJson(jsonObj);
        return this;
    }
}