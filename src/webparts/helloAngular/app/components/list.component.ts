import { Component, Input, OnInit, Inject } from '@angular/core';

import { GetSPListService } from './../services/getsplistitem.service';

import { IWebPartContext } from '@microsoft/sp-webpart-base';
import { ISPList, ISPLists } from '../models/demo.model';

@Component({
  selector: 'spfx-list',
  template: `
    <div class="" *ngIf="!tems">No items found or list '{{ listName }}' does not exists</div>
    <table class="TFtable" border=1 width=100% style="border-collapse: collapse;" *ngIf="items">
      <th>Title</th><th>Name</th>
      <tr *ngFor="let item of items">
        <td>{{ item.Title }}</td>
        <td>{{ item.Name }}</td>
      </tr>
    </table>
  `
})
export class ListComponent implements OnInit {

  public items: ISPLists;
  @Input()
  public listName: string;

  constructor(private listService: GetSPListService) {
  }

  public ngOnInit() {
    this.listService.GetDataAsync(this.listName).then(data => this.items = data);
  }

}

