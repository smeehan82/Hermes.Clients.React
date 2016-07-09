import * as Mobx from 'mobx';

import {ITaxonomy} from './Taxonomy';

export abstract class TaxonomyStore<TTaxonomy extends ITaxonomy> {
    constructor() {
        this.getTaxonomy();
    }

    @Mobx.observable
    protected _taxonomy: TTaxonomy[] = [];

    @Mobx.computed
    get taxonomy(): TTaxonomy[] {
        return this._taxonomy;
    }

    @Mobx.action
    //protected async getTaxonomy() {
    protected getTaxonomy() {
        //const taxonomy = await this.getTaxonomyFromServer();
        this._taxonomy = [];
        //Mobx.runInAction('getTaxonomy', () => {
//            this._taxonomy = taxonomy;
//        });
    }

    @Mobx.action
    protected addTaxonomy(taxonomy: TTaxonomy): void {
        this._taxonomy.push(taxonomy);
    }

    @Mobx.action
    protected addTaxonomyRange(taxonomyRange: TTaxonomy[]): void {
        for(const taxonomy of taxonomyRange) {
            this._taxonomy.push(taxonomy);
        }
    }

    private getTaxonomyFromServer(): Promise<TTaxonomy[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([]);
            }, 0);
        });
    }
}