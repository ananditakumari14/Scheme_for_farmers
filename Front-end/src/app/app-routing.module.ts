import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BidderRegComponent } from './bidder-reg/bidder-reg.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
 import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LogoutComponent } from './logout/logout.component';
import { ViewsoldhistoryComponent } from './viewsoldhistory/viewsoldhistory.component';
import { ViewmarketplaceComponent } from './viewmarketplace/viewmarketplace.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { InsuranceappformComponent } from './insuranceappform/insuranceappform.component';
import { ClaimComponent } from './claim/claim.component';
import { SellrequestComponent } from './sellrequest/sellrequest.component';



const routes: Routes = [
  {path:'', redirectTo: 'navbar', pathMatch: 'full'},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'bidder-reg',component:BidderRegComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'home',component:HomeComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'logout',component:LogoutComponent},
  {path:'viewsoldhistory',component:ViewsoldhistoryComponent},
  {path:'viewmarketplace',component:ViewmarketplaceComponent},
   {path:'welcome',component:WelcomeComponent},
   {path:'insurance',component:InsuranceComponent},
   {path:'insuranceappform',component:InsuranceappformComponent},
   {path:'claim',component:ClaimComponent},
   {path:'sellrequest',component:SellrequestComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]   
})
export class AppRoutingModule { }
