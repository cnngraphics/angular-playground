import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private authService: AuthService) { }

  ngOnInit() {
  }


  onLogin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    this.authService.login(email, password );

  }
}
