import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Parent1Component } from './parent1/parent1.component';
import { Parent2Component } from './parent2/parent2.component';
import { P1c1Component } from './p1c1/p1c1.component';
import { P1c2Component } from './p1c2/p1c2.component';
import { P2c1Component } from './p2c1/p2c1.component';
import { P2c2Component } from './p2c2/p2c2.component';

@NgModule({
  declarations: [
    AppComponent,
    Parent1Component,
    Parent2Component,
    P1c1Component,
    P1c2Component,
    P2c1Component,
    P2c2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
