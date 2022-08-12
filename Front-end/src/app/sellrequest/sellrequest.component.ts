import { Component, OnInit } from '@angular/core';

import { NgModule } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SellingService } from '../selling.service';

class UserAddress {

  id: number=0;
  ctname:string | any;
  cnname:string | any;
  ftname:string | any; 
  qname: string | any;
  spname:string | any;
  bname:string | any;
  bamname:string | any;
  sname:string | any;


 // addressId: number;
  // street: string | any;
  // city: string | any;
  // pincode:number | any;

  active: boolean=false;
}

@Component({
     selector: 'app-sellrequest',
    templateUrl: './sellrequest.component.html',
     styleUrls: ['./sellrequest.component.css']
   })


   export class SellrequestComponent implements OnInit {

  sellingForm: FormGroup | any;
  submitted = false;


user: UserAddress = new UserAddress();
  
constructor(private formBuilder: FormBuilder,
            private sellingService: SellingService,
            private router: Router) { }


  ngOnInit(): void {

    this.sellingForm = this.formBuilder.group({
      ctname: ['', [Validators.required]],
      cnname:  ['', [Validators.required]],
      ftname:  ['', [Validators.required]],
      qname:  ['', [Validators.required]],
      spname: ['',[Validators.required]],
      bname:  ['', [Validators.required]],
      bamname: ['', [Validators.required]],
      sname: ['', [Validators.required]],});

  }
  // convenience getter for easy access to form fields
  get f() { return this.sellingForm.controls; }
 
  changeCity(e: | any) {
    this.sellingForm.get('city').setValue(e.target.value, {
     onlySelf: true
    })
  }

  UserAddress(): void {
    this.submitted = false;
    this.user= new UserAddress();
  }

  
  onSubmit() {
    this.submitted = true;
    this.user=this.sellingForm.value;
    // stop the process here if form is invalid
    /*  if (this.sellingForm.invalid) {
        return;
    }*/
    this.save();
  }

  save() {
    this.sellingService.createSellingItem(this.user)
     .subscribe(data => {console.log(data)} );
 //    this.user= new UserAddress();
     // this.address=new Address();
 
     this.router.navigate(['/welcome']);
   }

}

