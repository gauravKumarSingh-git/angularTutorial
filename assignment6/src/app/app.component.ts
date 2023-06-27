import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') signUpForm: NgForm | undefined;
  title = 'assignment6';
  defaultSubscription = 'advanced'
  submitted = false;
  user = {
    email: '',
    subscription: '',
    password: ''
  }


  onSubmit() {
    console.log(this.signUpForm);
    this.user.email = this.signUpForm?.value.email;
    this.user.subscription = this.signUpForm?.value.subscription;
    this.user.password = this.signUpForm?.value.password
    this.submitted = true;
  }
}
