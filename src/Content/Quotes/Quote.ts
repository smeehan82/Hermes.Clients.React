import * as Mobx from 'mobx';

import {Content} from '../Content';

export class Quote extends Content {
    @Mobx.observable author: string;
}