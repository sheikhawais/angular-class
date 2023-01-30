import { NgModule } from "@angular/core";
import { ListOfUsersComponent } from "./components/list-of-users/list-of-users.component";
import { UsersRoutingModule } from "./users-routing.module";
import { UsersComponent } from "./users.component";
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        UsersComponent,
        ListOfUsersComponent
    ],
    imports: [
        UsersRoutingModule,
        SharedModule
    ],
    exports: [],
})
export class UsersModule { }