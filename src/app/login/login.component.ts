import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  showPwd: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      rememberMe: ['']
    });
  }

  ngOnInit(): void {
    let username = localStorage.getItem('username');

    if (username) {
      this.rememberMe = true;
      this.username?.setValue(username);
    }
  }

  submit() {
    if (!this.loginForm.valid) {
      return;
    }
    if (this.rememberMe) {
      localStorage.setItem('username', this.username?.value);
    }

    this.router.navigateByUrl('/dashboard').then(r => {
        if (r) {
          console.log('success');
        } else {
          console.log('failed')
        }
      }
    );
  }

  toggleShowPassword() {
    this.showPwd = !this.showPwd;
  }

  unsetRememberMe() {
    let username = localStorage.getItem('username');

    if (username) {
      localStorage.removeItem('username');
    }
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get rememberMe() {
    return this.loginForm.get('rememberMe')?.value;
  }

  set rememberMe(isChecked: boolean) {
    this.loginForm.get('rememberMe')?.setValue(isChecked);
  }

}
