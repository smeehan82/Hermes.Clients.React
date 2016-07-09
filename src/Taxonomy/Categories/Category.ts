import * as Mobx from 'mobx';

import {Taxonomy} from '../Taxonomy';

export class Category extends Taxonomy {
    @Mobx.observable children: Category[];

    @Mobx.action
    mapFromJson (jsonObj: any) :Category {
        super.mapBaseFromJson(jsonObj);
        this.children = Array.isArray(jsonObj.children) ?
            jsonObj.children.map((c: any) => new Category().mapFromJson(c))
            : [];

        return this;
    }
}