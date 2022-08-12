import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';

class UserAddress {

  id: number=0;
  email: string='';
  fname: string | any;
  cnumber:number | any;
  city:string | any;
  state:string | any;
  pincode:number | any;
  aname:number | any;
  addname:string | any; 
  accountNo:number | any;
  iname:string | any;
  aadharNo:string | any;
  pname:number |any;
  password:number | any;
  cpassword:number | any;


 // addressId: number;
  // street: string | any;
  // city: string | any;
  // pincode:number | any;

  active: boolean=false;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup | any;
  submitted = false;

  City: any = ['Bangalore','Chennai', 'Delhi', 'Kolkata','Mumbai', 'Tamil Nadu']

user: UserAddress = new UserAddress();
  
constructor(private formBuilder: FormBuilder,
            private authenticationService: AuthenticationService,
            private router: Router) { }


  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      fname: ['',[ Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      cnumber: ['',[ Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      city: ['', [Validators.required, Validators.minLength(6)]],
      state: ['', [Validators.required]],
      pincode:  ['', [Validators.required]],
      aname:  ['', [Validators.required]],
      addname:  ['', [Validators.required]],
      accountNo:  ['', [Validators.required]],
      iname: ['', [Validators.required]],
      aadharNo: ['', [Validators.required]],
      pname: ['', [Validators.required]],
      cpassword: ['', [Validators.required]],
      password: ['', [Validators.required]],});


  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
 
  changeCity(e: | any) {
    this.registerForm.get('city').setValue(e.target.value, {
     onlySelf: true
    })
  }

  UserAddress(): void {
    this.submitted = false;
    this.user= new UserAddress();
  }

  
  onSubmit() {
    this.submitted = true;
    this.user=this.registerForm.value;
    // stop the process here if form is invalid
    /*  if (this.registerForm.invalid) {
        return;
    }*/
    this.save();
  }

  save() {
   this.authenticationService.register(this.user)
    .subscribe(data => {console.log(data)} );
//    this.user= new UserAddress();
    // this.address=new Address();

    this.router.navigate(['/login']);
  }

}

