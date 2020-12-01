import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './404/404.component';
import { CoreComponent } from './core/core.component';
import { NetworkAwarePreloadStrategy } from './preload-strat';

const routes: Routes = [
  { path: "", redirectTo: "listings", pathMatch: "full" },
  { path: 'listings',
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
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
