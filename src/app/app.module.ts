import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KoliBriModule } from "@public-ui/angular-v16";
import { defineCustomElements } from '@public-ui/components/dist/loader';
import { register } from '@public-ui/components';
import { DEFAULT } from '@public-ui/themes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    KoliBriModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    register(DEFAULT, defineCustomElements)
      .catch(console.warn);
  }
}
