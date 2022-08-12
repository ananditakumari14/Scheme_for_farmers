import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';


class UseAddress {
  id: number=0;
  ctname:string | any;
  cropname:string | any;
  bname:string | any;

  active: boolean=false;
}

@Component({
  selector: 'app-viewmarketplace',
  templateUrl: './viewmarketplace.component.html',
  styleUrls: ['./viewmarketplace.component.css']
})
export class ViewmarketplaceComponent implements OnInit {

  ViewmarketplaceForm: FormGroup | any;
  submitted = false;
  use: any;


  constructor(private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router) { }


  ngOnInit(): void {

    this.ViewmarketplaceForm = this.formBuilder.group({
      ctname: ['',[ Validators.required]],
      cropname: ['',[ Validators.required]],
      bname: ['',[ Validators.required]],
    });
  }
  get f() { return this.ViewmarketplaceForm.controls; }
 
  changeCity(e: | any) {
    this.ViewmarketplaceForm.get('city').setValue(e.target.value, {
     onlySelf: true
    })
  }

  UseAddress(): void {
    this.submitted = false;
   // this.user= new UserAddress();
  }

  
  onSubmit() {
    this.submitted = true;
   this.use=this.ViewmarketplaceForm.value;
    // stop the process here if form is invalid
    /*  if (this.registerForm.invalid) {
        return;
    }*/
    this.save();
  }

  save() {
   this.authenticationService.register(this.use)
    .subscribe(data => {console.log(data)} );
    this.use= new UseAddress();
    // this.address=new Address();

    this.router.navigate(['/login']);
  }

}

