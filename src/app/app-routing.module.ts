import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './outer/loginpage/loginpage.component'; // Import the login component
import { LayoutComponent } from './layout1/outerlayout/layout/layout.component';
import { HomeComponent } from './outer/home/home.component';
import { CustomerLoginComponent } from './outer/customer.login/customer.login.component';
import { AboutusComponent } from './outer/aboutus/aboutus.component';
import { ContactUsComponent } from './outer/contactus/contactus.component';
import { RegistrationComponent } from './outer/registration/registration.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'loginpage', component: LoginpageComponent },  // Add route for login page
      { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to login by default
      { path: 'admin-login', component: LoginpageComponent },
      { path: 'customer-login', component: CustomerLoginComponent },
      { path: 'aboutus',component:AboutusComponent},
      { path: 'contactus',component:ContactUsComponent},
      { path: 'registration',component:RegistrationComponent} 
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
