import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabComponent } from './shared/components/tab/tab.component';
import { TabNgSwitchComponent } from './shared/components/tab-ng-switch/tab-ng-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    TabNgSwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
