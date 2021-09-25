import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './404/404.component';
import { CoreComponent } from './core/core.component';
import { NetworkAwarePreloadStrategy } from './preload-strat';

const routes: Routes = [
  { path: "", redirectTo: "issues", pathMatch: "full" },
  { path: 'issues',
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
  },
  { path: 'todo',
    loadChildren: () => import('./todos/todo.module').then(m => m.TodoModule)
  },
  {
    path: "auth",
    loadChildren: () => import('./authentication/auth.module').then(m => m.AuthModule)
  },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: NetworkAwarePreloadStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
