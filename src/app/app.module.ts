import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HashLocationStrategy, Location, LocationStrategy} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NeutralGameComponent } from './neutral-game/neutral-game.component';
import { BeginGameComponent } from './begin-game/begin-game.component';

@NgModule({
  declarations: [
    AppComponent,
    NeutralGameComponent,
    BeginGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
