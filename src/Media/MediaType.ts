import * as Mobx from 'mobx';

export interface IMediaType {
  id: string;
  concurrencyStamp: string;
  name: string;
  urlName: string;
}

export class MediaType implements IMediaType {
    @Mobx.observable id: string = '';
    @Mobx.observable concurrencyStamp: string = '';
    @Mobx.observable name: string = '';
    @Mobx.observable urlName: string = '';

    @Mobx.action
    mapFromJson (jsonObj: any) :MediaType {
        this.id = jsonObj.id;
        this.concurrencyStamp = jsonObj.concurrencyStamp;
        this.name = jsonObj.name;
        this.urlName = jsonObj.urlName;

        return this;
    }
}