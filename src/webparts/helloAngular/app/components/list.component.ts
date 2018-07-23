import { Component, Input, OnInit, Inject } from '@angular/core';

import { GetSPListService } from './../services/getsplistitem.service';

import { IWebPartContext } from '@microsoft/sp-webpart-base';
import { ISPList, ISPLists } from '../models/demo.model';

@Component({
  selector: 'spfx-list',
  template: `
    <table class="TFtable" border=1 width=100% style="border-collapse: collapse;">
      <th>Title</th><th>Name</th>
      <tr *ngFor="let item of items">
        <td>{{ item.Title }}</td>
        <td>{{ item.Name }}</td>
      </tr>
    </table>
  `
})
export class ListComponent implements OnInit {

  private items: ISPLists;

  constructor(private listService: GetSPListService) {
  }

  public ngOnInit() {
    this.listService.GetDataAsync('Demo').then(data => this.items = data);
  }

}

