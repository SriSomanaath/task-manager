import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewListComponent } from './pages/new-list/new-list.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import {NewTaskComponent} from './pages/new-task/new-task.component'

const routes: Routes = [
  { path: '', redirectTo: '/lists', pathMatch: 'full' },
  { path: 'lists/:listId/new-task', component: NewTaskComponent},
  { path: 'new-list', component: NewListComponent },
  {path: 'lists', component: TaskViewComponent },
  {path: 'lists/:listId', component: TaskViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
