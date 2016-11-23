import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlHandlingStrategy, UrlTree } from '@angular/router';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';

import { FooComponent } from './foo.component';

class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url: UrlTree) { return url.toString() === '/'; }
  extract(url: UrlTree) { return url; }
  merge(url: UrlTree, whole: UrlTree) { return url; }
}

const routes: Routes = [
  { path: '', redirectTo: 'foo', pathMatch: 'full' },
  { path: 'foo',          component: FooComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '!' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy }
  ]
})
export class AppRoutingModule { }
