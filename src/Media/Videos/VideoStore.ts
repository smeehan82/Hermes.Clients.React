import * as Mobx from 'mobx';

import {MediaStore} from '../MediaStore';
import {Video} from './Video';

const fakeVideos = [
    {
        id: '5AAD6BF2-F52A-1022-AC81-D8641177DA02',
        concurrencyStamp: 'FAAE2235-DF71-4DB5-B84C-68532DF66DCD',
        title: 'Video 1',
        slug: 'video-1',
        dateCreated: Date.now,
        dateModified: Date.now,
        datePublished: Date.now,
    },
    {
        id: '5AAD6BF2-352A-10D3-A221-D8641D77DA02',
        concurrencyStamp: 'FAAE3935-2271-DCB5-B84C-68532DF66DCC',
        title: 'Video 2',
        slug: 'video-2',
        dateCreated: Date.now,
        dateModified: Date.now,
        datePublished: Date.now,
    },
    {
        id: '5AAD6BF1-F52A-10D3-AC81-D224A677DA02',
        concurrencyStamp: 'FAAE3935-DF71-22B5-B84C-68532DF66DC6',
        title: 'Video 3',
        slug: 'video-3',
        dateCreated: Date.now,
        dateModified: Date.now,
        datePublished: Date.now,
    }
];

class VideoStore extends MediaStore<Video> {

    constructor() {
        super();
        this.addMediaRange(fakeVideos.map(v => new Video().mapFromJson(v)));
    }
}

const singleton = new VideoStore();
export default singleton;