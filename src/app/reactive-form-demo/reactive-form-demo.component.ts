import { Component } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';

@Component({
    selector: 'ngAdmin-reactive-form-demo',
    templateUrl: './reactive-form-demo.component.html',
    styleUrls: ['./reactive-form-demo.component.scss'],
})
export class ReactiveFormDemoComponent {
    /** This is form control way */
    name = new FormControl('');

    /** This is using formgroup way */

    // profileForm = new FormGroup({
    //     firstName: new FormControl(''),
    //     lastName: new FormControl(''),
    // });

    /** This is using formbuilder way */
    profileForm = this.fb.group({
        firstName: [''],
        lastName: [''],
        address: this.fb.group({
            street: [''],
            city: [''],
            state: [''],
            zip: [''],
        }),
    });

    constructor(private fb: FormBuilder) {
        this.myForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
        });
    }

    onProfileFormSubmit() {
        console.log(this.profileForm.value);
    }

    myForm!: FormGroup;

    submitForm() {
        if (this.myForm.valid) {
            // Handle form submission
            console.log(this.myForm.value);
        } else {
            // Handle form errors
            console.log('Form is invalid');
        }
    }
}
