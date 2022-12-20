import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'cats',
    loadComponent: () =>
      import('./cats.component').then((c) => c.CatsComponent),
  },
  {
    path: '**',
    redirectTo: '/cats',
  },
];
