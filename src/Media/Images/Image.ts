import * as Mobx from 'mobx';

import {Media} from '../Media';

export class Image extends Media {
    @Mobx.action
    mapFromJson (jsonObj: any) :Image {
        super.mapBaseFromJson(jsonObj);
        return this;
    }
}