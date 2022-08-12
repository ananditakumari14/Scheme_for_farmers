import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BidderRegComponent } from './bidder-reg/bidder-reg.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminComponent } from './admin/admin.component';
import { ViewsoldhistoryComponent } from './viewsoldhistory/viewsoldhistory.component';
import { ViewmarketplaceComponent } from './viewmarketplace/viewmarketplace.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { SellrequestComponent } from './sellrequest/sellrequest.component';
import { BidderwelcomeComponent } from './bidderwelcome/bidderwelcome.component';
import { InsuranceappformComponent } from './insuranceappform/insuranceappform.component';
import { ClaimComponent } from './claim/claim.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    ContactUsComponent,
    AboutUsComponent,
    BidderRegComponent,
    LogoutComponent,
    AdminComponent,
    ViewsoldhistoryComponent,
    ViewmarketplaceComponent,
    WelcomeComponent,
    InsuranceComponent,
    SellrequestComponent,
    BidderwelcomeComponent,
    InsuranceappformComponent,
    ClaimComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
