import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUsersComponent } from './pages/add-users/add-user.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { FormsModule } from '@angular/forms';
import { CountriesListComponent } from './pages/countries-list/countries-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddUsersComponent,
    UsersListComponent,
    CountriesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
