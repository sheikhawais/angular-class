import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-add-users',
    templateUrl: './add-user.component.html'
})
export class AddUsersComponent implements OnInit {
    
    @Input() user: any;
    @Output() onAddUser = new EventEmitter();
    @ViewChild('addUserForm') addUserForm: NgForm;

    constructor() { }

    ngOnInit(): void {
        setTimeout(() => {
            this.addUserForm.setValue(this.user);
        })
    }

    saveUser(form: NgForm) {
        this.onAddUser.emit(form.value);
    }
}