import { loadRemoteModule } from '@angular-architects/native-federation';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'sdm',
    loadComponent: () =>
      loadRemoteModule('sdm', './ListPage').then((m) => m.ListPageComponent),
  },

  // Route to load the SSM remote component
  {
    path: 'ssm',
    loadComponent: () =>
      loadRemoteModule('ssm', './Component').then((m) => m.AppComponent),
  },
];
