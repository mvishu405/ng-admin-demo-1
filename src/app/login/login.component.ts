import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { State, Store } from '@ngrx/store';
import { RootState } from '../store/app.state';
import { appInitialized } from '../store/app.actions';

@Component({
    selector: 'ngAdmin-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    // public properties
    loginForm!: FormGroup;

    // private fields

    // Constructor
    constructor(
        private formBuilder: FormBuilder,
        private store: Store<RootState>
    ) {}

    // public methods
    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username: [''],
            password: [''],
            rememberMe: false,
        });
    }

    onSubmit(): void {
        console.log(this.loginForm.value);
        this.store.dispatch(appInitialized());
    }

    // private methods
}
