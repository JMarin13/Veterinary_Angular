import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { VirtualStoreComponent } from './virtual-store/virtual-store.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    VirtualStoreComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
