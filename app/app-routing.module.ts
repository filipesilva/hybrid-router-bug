import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlHandlingStrategy, UrlTree } from '@angular/router';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';

import { FooComponent } from './foo.component';
import { BarComponent } from './bar.component';
import { BazComponent } from './baz.component';

class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
  // process all urls
  shouldProcessUrl(url: UrlTree) { return true; }
  extract(url: UrlTree) { return url; }
  merge(url: UrlTree, whole: UrlTree) { return url; }
}

const routes: Routes = [
  { path: '', redirectTo: 'foo', pathMatch: 'full' },
  { path: 'foo', component: FooComponent },
  { path: 'bar/:id', component: BarComponent },
  { path: 'baz/:id', component: BazComponent }
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
