import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  loginForm!: FormGroup;
  signupForm!: FormGroup;
  submitted = false;
  hide: boolean = true;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userservice: UserService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      selectedValue: ['', [Validators.required]],
    });

    this.signupForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobileNumber: ['', [Validators.required]],
      selectedValue: ['', [Validators.required]],
      service: ['advance'],
    });
  }

  onLogin() {
    let reqData = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      if (this.loginForm.value.selectedValue == 'User') {
        console.log('valid');
        console.log('User');
        this.userservice.loginUserService(reqData).subscribe(
          (result: any) => {
            console.log(result);
            localStorage.setItem('token', result.result.accessToken);
            this._snackBar.open('Login Successfull', '', {
              duration: 2000,
            });
            this.router.navigateByUrl('/dashboard/get-all-books');
          },
          (error) => {
            console.log(error);
            this._snackBar.open('Enter Valid Data', '', {
              duration: 2000,
            });
          }
        );
      } else if (this.loginForm.value.selectedValue == 'Admin') {
        this.userservice.adminLoginService(reqData).subscribe((result: any) => {
          console.log(result);
          localStorage.setItem('token', result.result.accessToken);
        });
        this.router.navigateByUrl('/dashboard/admin')
        this._snackBar.open('Welcome To Admin ', '', {
          duration: 2000,
        });
      }
    }
  }

  onSignup() {
    this.submitted = true;
    let reqData = {
      service: this.signupForm.value.service,
      fullName: this.signupForm.value.fullName,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
      phone: this.signupForm.value.mobileNumber,
    };
    console.log(this.signupForm.value);
    if (this.signupForm.valid) {
      if (this.signupForm.value.selectedValue == 'User') {
        console.log('user');
        console.log('valid');
        this.userservice.registerUserService(reqData).subscribe(
          (response: any) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );
      } else if (this.signupForm.value.selectedValue == 'Admin') {
        console.log('admin');
        this.userservice
          .adminregistrationService(reqData)
          .subscribe((response) => {
            console.log(response);
          });
      }
    } else {
      console.log('invalid');
    }
  }
}
