import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './components/app.component';
import { ListComponent }  from './components/list.component';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';

import { GetSPListService } from './services/getsplistitem.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ListComponent ],
  providers: [ GetSPListService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
