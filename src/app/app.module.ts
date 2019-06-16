import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IssuesListModule } from './issues-list/issues-list.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IssuesListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
