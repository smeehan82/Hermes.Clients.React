import * as Mobx from 'mobx';

import {Content} from '../Content';

export class MusicalInstrument extends Content {
    @Mobx.observable instumentType: string;

    @Mobx.action
    mapFromJson (jsonObj: any) :MusicalInstrument {
        super.mapBaseFromJson(jsonObj);
        this.instumentType = jsonObj.instumentType;

        return this;
    }
}