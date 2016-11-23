declare var angular: angular.IAngularStatic;
import { downgradeComponent } from '@angular/upgrade/static';

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bar-component',
  template: `<p>bar component, id: {{ id }}</p>`,
})
export class BarComponent  {
  id: string;
  constructor(activatedRoute: ActivatedRoute) {
    console.log(`id: ${activatedRoute.snapshot.params['id']}`);
    this.id = activatedRoute.snapshot.params['id'];
  }
}

angular.module('ng1app.bar', [])
  .directive(
    'barComponent',
    downgradeComponent({component: BarComponent}) as angular.IDirectiveFactory
  );
