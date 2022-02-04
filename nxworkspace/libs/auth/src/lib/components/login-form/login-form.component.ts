import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../types/user';

@Component({
  selector: 'nxworkspace-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  userForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    account: new FormGroup({
      email: new FormControl('', Validators.required),
      confirm: new FormControl('', Validators.required)
    })
  });

  ngOnInit(): void {
  }
  

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
  }

}
