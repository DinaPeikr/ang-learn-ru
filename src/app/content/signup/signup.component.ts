import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public emailValidators = [Validators.required, Validators.email];
  public signupForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
    // private location: Location
  ) {
  }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.location.back();
    // }, 3000);
    this.signupForm = this.fb.group({
      username: new FormControl('', [Validators.required, Validators.minLength(3),
        // this.uniqUserNameValidator.bind(this)
      ]),
      emails: this.fb.array([
        this.fb.control('', [...this.emailValidators]),
      ]),
      // email: this.fb.control('', this.emailValidators),
      mail: [false],
      password: this.fb.group({
        password: this.fb.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
        confirmPassword: this.fb.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)])
      }, {validator: this.equalValidator}),
    });
  }

  public equalValidator(control: FormGroup): ValidationErrors | null {
    const [password, confirmPassword] = Object.values(control.value);
    return password === confirmPassword ? null : {nonEqual: 'Passwords are not equal'};
  }

  public uniqUserNameValidator({value: username}: FormControl): Subscription {
    return this.http.post('assets/users.json', {username})
      .subscribe((v) => {
        console.log(v);
      });
  }

  public getControls(control: FormGroup, path: string): FormControl[] {
    return (control.get(path) as FormArray).controls as FormControl[];

  }

  public signUp(data: any): void {
    console.log(data);
  }

  public addEmail(): void {
    (this.signupForm.get('emails') as FormArray).push(this.fb.control('', [...this.emailValidators]));

  }

  public removeEmail(i: number): void {
    if ((this.signupForm.get('emails') as FormArray).length > 1) {
      (this.signupForm.get('emails') as FormArray).removeAt(i);
    }

  }
}


