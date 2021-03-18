import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login-form-example.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginFormExampleComponent implements OnInit {
  public value = '';
  public usernameCtrl = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
      ]);

  constructor() { }

  ngOnInit(): void {
  }

}
