import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public value = '';
  // public usernameCtrl = new FormControl('', [
  //   Validators.required,
  //   Validators.minLength(5)
  //     ]);

  constructor() { }

  ngOnInit(): void {
  }

  login(data: any): void {
    console.log(data);
  }
}
