import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as FromServices from './../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users: any[];

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private userService: FromServices.UserService, private router: Router) { }

  ngOnInit() {
    this.users = this.userService.users;
  }

  onSubmit() {
    this.users.forEach(user => {
      if (user.username === this.loginForm.value.username
        && user.password === this.loginForm.value.password) {
        this.router.navigate(['conversations']);
      }
    });
  }
}
