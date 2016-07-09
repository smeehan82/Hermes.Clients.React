import * as Mobx from 'mobx';

import {Media} from '../Media';

export class Video extends Media {
    @Mobx.action
    mapFromJson (jsonObj: any) :Video {
        super.mapBaseFromJson(jsonObj);
        return this;
    }
}