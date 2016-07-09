import * as Mobx from 'mobx';

import {Media} from '../Media';

export class Document extends Media {
    @Mobx.action
    mapFromJson (jsonObj: any) :Document {
        super.mapBaseFromJson(jsonObj);
        return this;
    }
}