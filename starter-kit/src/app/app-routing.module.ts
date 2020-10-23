import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then((m) => m.AboutModule),
  },
  { path: 'list-example', 
  loadChildren: () => import('./list-example/list-example.module').then(m => m.ListExampleModule) 
  },
  {
     path: 'delete-list', 
  loadChildren: () => import('./delete-list/delete-list.module').then(m => m.DeleteListModule) 
  },
  { path: 'post-example', loadChildren: () => import('./post-list/post-list.module').then(m => m.PostListModule) },

]
;

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
