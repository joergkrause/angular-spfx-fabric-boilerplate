import { ISPLists } from './../models/demo.model';
import MockHttpClient from '../../../mock/mock.client';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import { Environment, EnvironmentType } from '@microsoft/sp-core-library';
import { Injectable } from '../../../../../node_modules/@angular/core';
import { IWebPartContext } from '@microsoft/sp-webpart-base';

@Injectable()
export class GetSPListService {

  private context: IWebPartContext;

  constructor() {
    this.context = window["webPartContext"];
  }

  private _getMockListData(): Promise<ISPLists> {
    return MockHttpClient.get(this.context.pageContext.web.absoluteUrl).then(() => {
      const listData: ISPLists = {
        value:
          [
            { title: 'T1', name: 'N1' }
          ]
      };
      return listData;
    }) as Promise<ISPLists>;
  }

  private _getListData(listName: string): Promise<ISPLists> {
    return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + `/_api/web/lists/GetByTitle('${listName}')/Items`, SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse) => {
        debugger;
        return response.json();
      });
  }

  public GetDataAsync(listName: string): Promise<ISPLists> {

    if (Environment.type === EnvironmentType.Local) {
      return this._getMockListData();
    }
    else {
      return this._getListData(listName);
    }

  }

}
