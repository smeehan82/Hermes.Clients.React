import * as Mobx from 'mobx';

import {Content} from '../Content';

export class Book extends Content {
    @Mobx.observable author: string;
}