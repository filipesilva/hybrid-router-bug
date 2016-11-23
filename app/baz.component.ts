import { Component } from '@angular/core';

@Component({
  selector: 'baz-component',
  template: `
    <p>baz component</p>
    <p *ngIf=content>{{content}}</p>
  `,
})
export class BazComponent  {
  content: string;
  constructor() {
    setTimeout(() => {
      console.log('async content loaded');
      this.content = 'async content loaded';
    }, 0);
  }
}
