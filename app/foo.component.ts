declare var angular: angular.IAngularStatic;
import { downgradeComponent } from '@angular/upgrade/static';

import { Component } from '@angular/core';

@Component({
  selector: 'foo-component',
  template: `
    <p>foo component</p>
    <a *ngIf="link" [routerLink]="['/baz', 1]">async ngIf link to baz</a>
  `,
})
export class FooComponent {
  link = false;
  constructor() {
    console.log('foo constructor called');
    setTimeout(() => this.link = true, 0);
  }
 }

angular.module('ng1app.foo', [])
  .directive(
    'fooComponent',
    downgradeComponent({component: FooComponent}) as angular.IDirectiveFactory
  );
