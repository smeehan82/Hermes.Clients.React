import * as Mobx from 'mobx';

export interface IContentType {
  id: string;
  concurrencyStamp: string;
  name: string;
  urlName: string;
}

export class ContentType implements IContentType {
    @Mobx.observable id: string = '';
    @Mobx.observable concurrencyStamp: string = '';
    @Mobx.observable name: string = '';
    @Mobx.observable urlName: string = '';

    @Mobx.action
    mapFromJson (jsonObj: any) :ContentType {
        this.id = jsonObj.id;
        this.concurrencyStamp = jsonObj.concurrencyStamp;
        this.name = jsonObj.name;
        this.urlName = jsonObj.urlName;

        return this;
    }
}