import * as Mobx from 'mobx';

import {MediaStore} from '../MediaStore';
import {Image} from './Image';

const fakeImages = [
    {
        id: '5AAD6BF2-F52A-10D3-AC81-D8641187DA02',
        concurrencyStamp: 'FAAE3935-DF71-4DB8-B84C-68532DF66DCD',
        title: 'Image 1',
        slug: 'image-1',
        dateCreated: Date.now,
        dateModified: Date.now,
        datePublished: Date.now,
    },
    {
        id: '5AAD6BF2-352A-10D3-AC81-D8641D778A02',
        concurrencyStamp: 'FAAE3935-DF71-DCB5-184C-68532DF66DCC',
        title: 'Image 2',
        slug: 'image-2',
        dateCreated: Date.now,
        dateModified: Date.now,
        datePublished: Date.now,
    },
    {
        id: '5AAD6BF1-F52A-10D3-AC81-D864A677DA12',
        concurrencyStamp: 'FAAE3935-DF71-FCB5-B88C-68532DF66DC6',
        title: 'Image 3',
        slug: 'image-3',
        dateCreated: Date.now,
        dateModified: Date.now,
        datePublished: Date.now,
    }
];

class ImageStore extends MediaStore<Image> {

    constructor() {
        super();
        this.addMediaRange(fakeImages.map(b => this.mapMediaFromJson(b)));
    }

    protected mapMediaFromJson(jsonObj: any): Image {
        const image = new Image();
        super.mapMediaFromJson(jsonObj, image);
        return image;
    }
}

const singleton = new ImageStore();
export default singleton;