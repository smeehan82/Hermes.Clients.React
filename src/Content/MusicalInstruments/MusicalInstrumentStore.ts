import * as Mobx from 'mobx';

import {ContentStore} from '../ContentStore';
import {MusicalInstrument} from './MusicalInstrument';

const fakeMusicalInstruments = [
    {
        concurrencyStamp: '8DB0DFBB-D862-49C4-B029-5A8D72C83FC7',
        id: '251B65DC-E822-4499-8364-514987086C13',
        title: 'Saxaphone',
        slug: 'saxaphone',        
        dateCreated: Date.now,
        dateModified: Date.now,
        datePublished: Date.now,
        instumentType: 'Brass',
    },
    {
        concurrencyStamp: 'CD2544FB-84B4-478C-9ABB-03455FE71217',
        id: '8F754ED6-09BB-4EF3-AEB8-B98112ABB62C',
        title: 'Guitar',
        slug: 'guitar',        
        dateCreated: Date.now,
        dateModified: Date.now,
        datePublished: Date.now,
        instumentType: 'String',
    },
    {
        concurrencyStamp: 'F9AE3935-DF71-44B5-B84C-68532DF66DCD',
        id: '5AAD6BF2-F52A-40D3-AC81-D8641577DA02',
        title: 'Grand Piano',
        slug: 'grand-piano',        
        dateCreated: Date.now,
        dateModified: Date.now,
        datePublished: Date.now,
        instumentType: 'Keys',
    },
    {
        concurrencyStamp: '8DB0DFBB-D863-46C4-B029-5A8D72C83FC7',
        id: '251B65DC-E822-4499-8364-514989086C13',
        title: 'Flute',
        slug: 'flute',        
        dateCreated: Date.now,
        dateModified: Date.now,
        datePublished: Date.now,
        instumentType: 'Wind',
    }
];

class MusicalInstrumentStore extends ContentStore<MusicalInstrument> {

    constructor() {
        super();
        this.addContentRange(fakeMusicalInstruments.map(m => new MusicalInstrument().mapFromJson(m)));
    }
}

const singleton = new MusicalInstrumentStore();
export default singleton;