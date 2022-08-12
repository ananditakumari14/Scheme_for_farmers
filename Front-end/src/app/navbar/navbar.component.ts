import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  islogin:boolean | undefined;
  // name:String | undefined;
  // serv: any;


  constructor(private router: Router) { 
  }
  ngOnInit(): void {
    // this.serv.name.subscribe((val: String | undefined) => {
    //   this.name=val;
    // });
    if ("user" in sessionStorage) {
      this.islogin = true;
    }
    else {
      this.islogin = false;
    }

  }
Logout() {
   
    sessionStorage.removeItem('UserId');
    this.router.navigate(['/app-login']);
    window.location.reload();
  }

}

