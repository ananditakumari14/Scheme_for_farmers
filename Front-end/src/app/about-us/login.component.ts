import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false
  errorMessage = 'Invalid Credentials';
  successMessage: string | any;
  loginSuccess = false;

  constructor(public router: Router,
              private loginService: AuthenticationService) { }

  ngOnInit(): void {
  }

  checkLogin() { 

    let user={
      "email":this.username,
      "password":this.password
    }
    this.loginService.login(user).subscribe((response) => {
      if(response.status)
      {
        this.router.navigate(['/welcome']);
        window.location.reload();
        sessionStorage.setItem('user', JSON.stringify(response.farmer))
        this.invalidLogin = false;
        this.loginSuccess = true;
        this.successMessage = 'Login Successful.';
      }
      else{
        alert("Wrong Credentials")
        this.invalidLogin = true
      }
  


      //if(this.loginSuccess)
      //{

      //}
    });
 
    this.loginSuccess = false;
  }

}