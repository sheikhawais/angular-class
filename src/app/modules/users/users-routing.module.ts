import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfUsersComponent } from './components/list-of-users/list-of-users.component';
const routes: Routes = [
    { path: 'list', component: ListOfUsersComponent },
    { path: '', pathMatch: 'full', redirectTo: 'list'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
