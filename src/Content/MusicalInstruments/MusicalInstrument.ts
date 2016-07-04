import * as Mobx from 'mobx';

import {Content} from '../Content';

export class MusicalInstrument extends Content {
    @Mobx.observable instumentType: string;
}