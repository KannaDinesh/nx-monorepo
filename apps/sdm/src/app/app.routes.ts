import { Route } from '@angular/router';
import { ListPageComponent } from './list-page/list-page.component';

export const appRoutes: Route[] = [
  { path: 'list', component: ListPageComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
];
