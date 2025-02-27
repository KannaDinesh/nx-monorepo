import { loadRemoteModule } from '@angular-architects/native-federation';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'sdm',
    loadComponent: () =>
      loadRemoteModule('sdm', './Component').then((m) => m.AppComponent),
  },

  // Route to load the SSM remote component
  {
    path: 'ssm',
    loadComponent: () =>
      loadRemoteModule('ssm', './Component').then((m) => m.AppComponent),
  },

  // {
  //   path: 'sdm',
  //   loadChildren: () =>
  //     // eslint-disable-next-line @nx/enforce-module-boundaries
  //     import('../../../../apps/sdm/src/app/app.routes').then(
  //       (m) => m.appRoutes
  //     ),
  // },
  // {
  //   path: 'ssm',
  //   loadChildren: () =>
  //     // eslint-disable-next-line @nx/enforce-module-boundaries
  //     import('../../../../apps/ssm/src/app/app.routes').then(
  //       (m) => m.appRoutes
  //     ),
  // },
  // { path: '', redirectTo: 'sdm', pathMatch: 'full' }, // Default route
  // {
  //   path: 'shared-ui',
  //   loadComponent: () =>
  //     import('@angular-monorepo/shared-ui').then((c) => c.SharedUiComponent),
  // },
];
