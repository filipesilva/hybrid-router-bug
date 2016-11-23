import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppComponent }  from './app.component';
import { FooComponent } from './foo.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, UpgradeModule, AppRoutingModule ],
  declarations: [ AppComponent, FooComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

declare var angular: angular.IAngularStatic;

angular.module('phonecatApp', [ 'ngRoute' ]);

