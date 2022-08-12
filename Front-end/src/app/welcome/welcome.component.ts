import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  fullname = ""
  constructor(private router: Router) { }

  ngOnInit(): void {
    var user = JSON.parse(sessionStorage.getItem('user') as string)
    console.log(user.fullName)
    this.fullname = user.fullName
  }

  logoutUser() {
    sessionStorage.clear();
    this.router.navigate(['/login'])
    window.location.reload();
  }
}
