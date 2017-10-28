import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilterCreatureComponent } from './filter-creature/filter-creature.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterCreatureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
