import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from '../store/reducers';

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
        private store: Store<State>
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
    }

    // private methods

    username!: string;
    password!: string;
    rememberMe!: string;

    login() {
        // Perform login logic here
        console.log('Username:', this.username);
        console.log('Password:', this.password);
    }
}
