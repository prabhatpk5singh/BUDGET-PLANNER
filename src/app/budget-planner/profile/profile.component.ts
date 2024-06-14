import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SideNavComponent } from '../side-nav/side-nav.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,SideNavComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
profileForm:any;

constructor(private fb: FormBuilder) {}

ngOnInit(): void {
  this.profileForm = this.fb.group({
    name: ['', Validators.required],
    age: ['', [Validators.required, Validators.min(18)]],
    dob: ['', Validators.required],
    gender: ['', Validators.required],
    occupation: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    address: ['', Validators.required],
    contact: ['', Validators.required]
  });
}

onSubmit() {
  if (this.profileForm.valid) {
    console.log("Form Save!!!", this.profileForm.value);
  } else {
    this.openAlert('Please fill in all fields correctly!');
  }
}

openAlert(message: string) {
  alert(message);
}

}
