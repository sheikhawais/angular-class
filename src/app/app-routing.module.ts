import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUsersComponent } from './pages/add-users/add-user.component';
import { CountriesListComponent } from './pages/countries-list/countries-list.component';
import { UsersListComponent } from './pages/users-list/users-list.component';

const routes: Routes = [
  { path: 'users', component: UsersListComponent },
  { path: 'countries', component: CountriesListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'users'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
