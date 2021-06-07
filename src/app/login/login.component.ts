import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  showPwd!: boolean;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.showPwd = false;
    this.loginForm = this.formBuilder.group({
      username: [null],
      password: [null]
    })
  }

  submit() {
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm.value);
  }

  showPassword() {
    this.showPwd = !this.showPwd;
  }
}
