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
  accountNo:number | any;
  iname:string | any;
  aadharNo:string | any;
  pname:number |any;
  tdname:number | any;
  password:number | any;
  cpassword:number | any;

  active:boolean=false;
}


@Component({
  selector: 'app-bidder-reg',
  templateUrl: './bidder-reg.component.html',
  styleUrls: ['./bidder-reg.component.css']
})

export class BidderRegComponent implements OnInit {
  

  bidderForm: FormGroup | any;
  submitted = false;

  City: any = ['Bangalore','Chennai', 'Delhi', 'Kolkatta','Mumbai', ]

user: UserAddress = new UserAddress();


  constructor(private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router) { }


  ngOnInit(): void {

    this.bidderForm = this.formBuilder.group({
      fname: ['',[ Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      cnumber: ['',[ Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      city: ['', [Validators.required, Validators.minLength(6)]],
      state: ['', [Validators.required]],
      pincode:  ['', [Validators.required]],
      aname:  ['', [Validators.required]],
      accountNo:  ['', [Validators.required]],
      iname: ['', [Validators.required]],
      aadharNo: ['', [Validators.required]],
      pname: ['', [Validators.required]],
      tdname: ['', [Validators.required]],
      cpassword: ['', [Validators.required]],
      password: ['', [Validators.required]],});

}
get f() { return this.bidderForm.controls; }
 
changeCity(e: | any) {
  this.bidderForm.get('city').setValue(e.target.value, {
   onlySelf: true
  })
}

UserAddress(): void {
  this.submitted = false;
  this.user= new UserAddress();
}


onSubmit() {
  this.submitted = true;
  this.user=this.bidderForm.value;
  // stop the process here if form is invalid
  /*  if (this.registerForm.invalid) {
      return;
  }*/
  this.save();
}

save() {
 alert( this.authenticationService.register(this.user)
  .subscribe(data => {console.log(data)} ));
//    this.user= new UserAddress();
  // this.address=new Address();

alert("Register Successfully")
  this.gotoList();
}

gotoList() {
  this.router.navigate(['/login']);
}

}


function ngOnInit() {
  throw new Error('Function not implemented.');
}

