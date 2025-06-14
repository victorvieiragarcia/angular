import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'dash',
    renderMode: RenderMode.Client,
  },
  {
    path: 'expenses',
    renderMode: RenderMode.Client,
  },
  {
    path: 'expenses/register',
    renderMode: RenderMode.Server,
  },
   {
    path: '**',
    renderMode: RenderMode.Client,
  },
];
