import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <a [routerLink]="['/foo']">foo</a>
    <a [routerLink]="['/bar', 1]">bar</a>
    <a [routerLink]="['/baz', 1]">baz</a>
    <router-outlet></router-outlet>
    <div ng-view></div>
  `,
})
export class AppComponent  { }
