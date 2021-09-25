import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoCoreComponent } from './core/core.component';
import { TodoComponent } from './todo.component';

const routes: Routes = [
  { path: '', component: TodoComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: TodoCoreComponent },
  ]}
]

@NgModule({
  imports: [
    RouterModule.forChild(
      routes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class TodoRoutingModule {}
